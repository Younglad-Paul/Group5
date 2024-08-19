import React, { useState, useEffect } from 'react';import { ethers } from 'ethers';


const WalletAddress = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const getWalletAddress = async () => {
      if (typeof window.ethereum === 'undefined') { // Property 'ethereum' does not exist on type 'Window & typeof globalThis'.ts(2339)
        console.error('MetaMask is not installed or not connected');
        return;
      }

      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' }); // Property 'ethereum' does not exist on type 'Window & typeof globalThis'.ts(2339)

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    };

    getWalletAddress();
  }, []);

  return (
    <div>
      <p>Connected wallet address: {walletAddress || 'No wallet connected'}</p>
    </div>
  );
}

export default WalletAddress;