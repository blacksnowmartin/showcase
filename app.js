window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        document.getElementById('status').textContent = "Metamask is installed!";
        const web3 = new Web3(window.ethereum);

        // Your smart contract ABI and address
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
        
        const contractAddress = '0xF03335eE7d7717CD74c1134Ec3BAB2788F9fE03a';
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Connect to MetaMask
        document.getElementById('connectButton').addEventListener('click', async () => {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                document.getElementById('status').textContent = "Wallet connected!";
            } catch (error) {
                document.getElementById('status').textContent = "User denied account access.";
            }
        });

        // Set data in the contract
        document.getElementById('setButton').addEventListener('click', async () => {
            const accounts = await web3.eth.getAccounts();
            const inputData = document.getElementById('inputData').value;
            if (inputData) {
                try {
                    await contract.methods.set(inputData).send({ from: accounts[0] });
                    document.getElementById('status').textContent = "Data stored in contract!";
                } catch (error) {
                    document.getElementById('status').textContent = "Transaction failed.";
                }
            } else {
                document.getElementById('status').textContent = "Please enter data to store.";
            }
        });

        // Get data from the contract
        document.getElementById('getButton').addEventListener('click', async () => {
            try {
                const result = await contract.methods.get().call();
                document.getElementById('contractData').textContent = "Stored data: " + result;
            } catch (error) {
                document.getElementById('contractData').textContent = "Failed to retrieve data.";
            }
        });

    } else {
        document.getElementById('status').textContent = "Metamask is not installed.";
    }
});
