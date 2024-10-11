const contractAddress = '0xDA0bab807633f07f013f94DD0E6A4F96F8742B53';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        document.getElementById('status').textContent = "Metamask is installed!";
        const web3 = new Web3(window.ethereum);

        // Connect to Metamask
        document.getElementById('connectButton').addEventListener('click', async () => {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                document.getElementById('status').textContent = "Wallet connected!";
            } catch (error) {
                document.getElementById('status').textContent = "User denied access.";
            }
        });
    } else {
        document.getElementById('status').textContent = "Metamask is not installed.";
    }
});



document.getElementById('setButton').addEventListener('click', async () => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.set("Hello World").send({ from: accounts[0] });
    document.getElementById('status').textContent = "Data stored in contract!";
});

document.getElementById('getButton').addEventListener('click', async () => {
    const result = await contract.methods.get().call();
    document.getElementById('status').textContent = "Stored data: " + result;
});
