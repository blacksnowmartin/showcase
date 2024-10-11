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
