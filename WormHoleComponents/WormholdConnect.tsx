// import React, { useState, useEffect } from 'react';
// import { wormhole, amount, Wormhole } from "@wormhole-foundation/sdk";
// import algorand from "@wormhole-foundation/sdk/algorand";
// import aptos from "@wormhole-foundation/sdk/aptos";
// import cosmwasm from "@wormhole-foundation/sdk/cosmwasm";
// import evm from "@wormhole-foundation/sdk/evm";
// import solana from "@wormhole-foundation/sdk/solana";
// import sui from "@wormhole-foundation/sdk/sui";
// import { getSigner } from "./evmSigner";

// import { ethers } from 'ethers';

// const WormholeComponent: React.FC = () => {
//   const [wh, setWh] = useState<Wormhole<"Testnet"> | null>(null);
//   const [srcChain, setSrcChain] = useState<any | null>(null);; 
//   const [dstChain, setDstChain] = useState<any | null>(null);  
//   const [sender, setSender] = useState<ethers.Signer | null>(null); 
//   const [receiver, setReceiver] = useState<ethers.Signer | null>(null);
//   const [tokenBridge, setTokenBridge] = useState<any | null>(null);
//   const [amt, setAmt] = useState<bigint | null>(null);

//   useEffect(() => {
//     const initializeWormhole = async () => {
//       try {
//         const whInstance = await wormhole("Testnet", [evm, solana, aptos, algorand, cosmwasm, sui]);
//         setWh(whInstance);
  
//         // Get source and destination chain instances
//         const srcChainInstance = whInstance.getChain("Solana");
//         const dstChainInstance = whInstance.getChain("Ethereum");
//         setSrcChain(srcChainInstance);
//         setDstChain(dstChainInstance);
  
//         // Create signers for source and destination chains
//         const srcSigner = await getSigner(srcChainInstance);  
//         const dstSigner = await getSigner(dstChainInstance);  
//         setSender(srcSigner);
//         setReceiver(dstSigner);
  
//         // Set token bridge and amount
//         const sndTb = await srcChainInstance.getTokenBridge();
//         setTokenBridge(sndTb);
  
//         const tokenId = Wormhole.tokenId(srcChainInstance.chain, "native");
//         const nativeDecimals = 9;
//         const amtBigInt = amount.units(amount.parse("0.1", nativeDecimals));
//         setAmt(amtBigInt);
  
//         console.log('Initialization complete', {
//           srcChain: srcChainInstance,
//           dstChain: dstChainInstance,
//           sender: srcSigner,
//           receiver: dstSigner,
//           tokenBridge: sndTb,
//           tokenId,
//           amtBigInt,
//         });
//       } catch (error) {
//         console.error('Initialization failed:', error);
//       }
//     };
  
//     initializeWormhole();
//   }, []);
  

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Wormhole Transfer</h1>
      
//       <div className="mb-6 p-4 bg-white rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">Initialization Status</h2>
//         <p className={`text-lg ${wh ? 'text-green-600' : 'text-red-600'}`}>
//           {wh ? 'Wormhole Initialized' : 'Initializing...'}
//         </p>
//       </div>
  
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="p-4 bg-white rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2 text-gray-800">Source Chain</h3>
//           <p className="text-gray-600">{srcChain?.chain || 'Loading...'}</p>
//         </div>
//         <div className="p-4 bg-white rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2 text-gray-800">Destination Chain</h3>
//           <p className="text-gray-600">{dstChain?.chain || 'Loading...'}</p>
//         </div>
//       </div>
  
//       <div className="mb-6 p-4 bg-white rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2 text-gray-800">Transfer Amount</h3>
//         <p className="text-gray-600">{amt ? amt.toString() : 'Loading...'} (native tokens)</p>
//       </div>
  
//       <div className="flex justify-center space-x-4">
//       <button 
//   className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400"
//   disabled={!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt}
//   onClick={() => {
//     // Implement transfer logic using sender, receiver, and tokenBridge
//   }}
// >
//   Transfer
// </button>

//         <button 
//           className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
//           disabled={!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt}
//           onClick={() => {/* Implement redeem logic */}}
//         >
//           Redeem
//         </button>
//       </div>
  
//       <div className="mt-6 p-4 bg-white rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2 text-gray-800">Status</h3>
//         <p className="text-gray-600">
//           Ready for transfer
//         </p>
//       </div>
//     </div>
//   );
// };

// export default WormholeComponent;










// import React, { useState, useEffect } from 'react';
// import { wormhole, amount, Wormhole, signSendWait, toNative, ChainAddress, NativeAddress } from "@wormhole-foundation/sdk";
// import algorand from "@wormhole-foundation/sdk/algorand";
// import aptos from "@wormhole-foundation/sdk/aptos";
// import cosmwasm from "@wormhole-foundation/sdk/cosmwasm";
// import evm from "@wormhole-foundation/sdk/evm";
// import solana from "@wormhole-foundation/sdk/solana";
// import sui from "@wormhole-foundation/sdk/sui";
// import { getSigner } from "./evmSigner";

// import { ethers } from 'ethers';
// import { arbitrum } from 'thirdweb/chains';


// const chains = [
//   { chain: "Ethereum", chainId: 42 },
//   { chain: "Arbitrum", chainId: 42161 },
//   { chain: "Solana", chainId: 50 },
//   { chain: "Aptos", chainId: 43114 },
//   { chain: "Algorand", chainId: 28 },
//   { chain: "Cosmos-SDK", chainId: 118 },
//   { chain: "Sui", chainId: 137 },
//   { chain: "Polygon"},
// ];

// const WormholeComponent: React.FC = (chains) => {
//   const [wh, setWh] = useState<Wormhole<"Testnet"> | null>(null);
//   const [srcChain, setSrcChain] = useState<any | null>(null);
//   const [dstChain, setDstChain] = useState<any | null>(null);
//   const [sender, setSender] = useState<any | null>(null);
//   const [receiver, setReceiver] = useState<any | null>(null);
//   const [tokenBridge, setTokenBridge] = useState<any | null>(null);
//   const [amt, setAmt] = useState<bigint | null>(null);
//   const [status, setStatus] = useState<string>('Ready for transfer');
//   const [walletAddress, setWalletAddress] = useState<string | null>(null);
//   const [selectedSourceChain, setSelectedSourceChain] = useState<string | null>(null);
//   const [selectedDestinationChain, setSelectedDestinationChain] = useState<string | null>(null);



//   useEffect(() => {
//     const initializeWormhole = async () => {
//       try {
//         const whInstance = await wormhole("Testnet", [evm, solana, aptos, algorand, cosmwasm, sui]);
//         setWh(whInstance);


  
//         // const srcChainInstance = whInstance.getChain(selectedSourceChain);
//         // const dstChainInstance = whInstance.getChain(selectedDestinationChain);
//         const srcChainInstance = whInstance.getChain("Ethereum");
//         const dstChainInstance = whInstance.getChain("Solana");
//         setSrcChain(srcChainInstance);
//         setDstChain(dstChainInstance);
  
//         const srcSigner = await getSigner(srcChainInstance);
//         const dstSigner = await getSigner(dstChainInstance);
//         setSender(srcSigner);
//         setReceiver(dstSigner);

        
  
//         const sndTb = await srcChainInstance.getTokenBridge();
//         setTokenBridge(sndTb);
  
//         const tokenId = Wormhole.tokenId(srcChainInstance.chain, "native");
//         const nativeDecimals = 18; // Ethereum uses 18 decimals
//         const amtBigInt = amount.units(amount.parse("0.1", nativeDecimals));
//         setAmt(amtBigInt);

  
//         console.log('Initialization complete');
//       } catch (error) {
//         console.error('Initialization failed:', error);
//         setStatus('Initialization failed');
//       }
//     };
  
//     initializeWormhole();
//   }, []);


//   useEffect(() => {
//     const getWalletAddress = async () => {
//       if (typeof window.ethereum === 'undefined') { // Property 'ethereum' does not exist on type 'Window & typeof globalThis'.ts(2339)
//         console.error('MetaMask is not installed or not connected');
//         return;
//       }

//       try {
//         // Request account access
//         await window.ethereum.request({ method: 'eth_requestAccounts' }); // Property 'ethereum' does not exist on type 'Window & typeof globalThis'.ts(2339)

//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const address = await signer.getAddress();
//         setWalletAddress(address as string);
//         console.log(walletAddress)
//       } catch (error) {
//         console.error('Error connecting to MetaMask', error);
//       }
//     };

//     getWalletAddress();
//   }, []);

//   const handleTransfer = async () => {
//     if (!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt) {
//       setStatus('Not all required components are initialized');
//       return;
//     }

//     try {
//       setStatus('Initiating transfer...');

//       const senderAddress: ChainAddress = Wormhole.chainAddress("Ethereum", sender.address());
//       const receiverAddress: ChainAddress = Wormhole.chainAddress("Solana", receiver.address());


//       const tokenId = Wormhole.tokenId(srcChain.chain, "native");
      
//       const transfer = tokenBridge.transfer(
//         senderAddress.toString(), 
//         receiverAddress.toString(),
//         tokenId.address,
//         amt
//       );

//       setStatus('Signing and sending transaction...');
//       const txids = await signSendWait(srcChain, transfer, sender);
//       console.log("Transaction sent: ", txids);

//       setStatus('Getting VAA...');
//       const [whm] = await srcChain.parseTransaction(txids[txids.length - 1]!.txid);
//       const vaa = await wh.getVaa(whm!, "TokenBridge:Transfer", 60_000);

//       setStatus('Transfer complete. VAA received.');
//       console.log("VAA: ", vaa);

//     } catch (error) {
//       console.error('Transfer failed:', error);
//       setStatus('Transfer failed. See console for details.');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Wormhole Transfer</h1>
      
//       <div className="mb-6 p-4 bg-white rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">Initialization Status</h2>
//         <p className={`text-lg ${wh ? 'text-green-600' : 'text-red-600'}`}>
//           {wh ? 'Wormhole Initialized' : 'Initializing...'}
//         </p>
//       </div>
  
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="p-4 bg-white rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2 text-gray-800">Source Chain</h3>
//           <select
//             onChange={(e) => setSelectedSourceChain(e.target.value)}
//             className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             {chains.map((chain) => (
//               <option key={chain.chainId} value={chain.chain}>
//                 {chain.chain}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="p-4 bg-white rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2 text-gray-800">Destination Chain</h3>
//           <select
//             onChange={(e) => setSelectedDestinationChain(e.target.value)}
//             className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             {chains.map((chain) => (
//               <option key={chain.chainId} value={chain.chain}>
//                 {chain.chain}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
  
//       <div className="mb-6 p-4 bg-white rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2 text-gray-800">Transfer Amount</h3>
//         <p className="text-gray-600">{amt ? amt.toString() : 'Loading...'} (native tokens)</p>
//       </div>
  
//       <div className="flex justify-center space-x-4">
//         <button 
//           className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400"
//           disabled={!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt}
//           onClick={handleTransfer}
//         >
//           Transfer
//         </button>
//       </div>
  
//       <div className="mt-6 p-4 bg-white rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2 text-gray-800">Status</h3>
//         <p className="text-gray-600">
//           {status}
//         </p>
//       </div>
//     </div>
//   );
  
// };

// export default WormholeComponent;


import React, { useState, useEffect } from 'react';
import { wormhole, amount, Wormhole, signSendWait, ChainAddress } from "@wormhole-foundation/sdk";
import algorand from "@wormhole-foundation/sdk/algorand";
import aptos from "@wormhole-foundation/sdk/aptos";
import cosmwasm from "@wormhole-foundation/sdk/cosmwasm";
import evm from "@wormhole-foundation/sdk/evm";
import solana from "@wormhole-foundation/sdk/solana";
import sui from "@wormhole-foundation/sdk/sui";
import { getSigner } from "./evmSigner";
import { ethers } from 'ethers';

enum SupportedChains {
  Ethereum = "Ethereum",
  Solana = "Solana",
  // Arbitrum = "Arbitrum",
  Aptos = "Aptos",
  Algorand = "Algorand",
  // Cosmos = "coswasm",
  // sui = "sui",
  // Polygon = "Polygon"
}
const chains = [
  { chain: "Ethereum", chainId: 42 },
  { chain: "Arbitrum", chainId: 42161 },
  { chain: "Solana", chainId: 50 },
  { chain: "Aptos", chainId: 43114 },
  { chain: "Algorand", chainId: 28 },
  { chain: "Cosmos-SDK", chainId: 118 },
  { chain: "Sui", chainId: 137 },
  { chain: "Polygon" },
];

const WormholeComponent: React.FC = () => {
  const [wh, setWh] = useState<Wormhole<"Testnet"> | null>(null);
  const [srcChain, setSrcChain] = useState<any | null>(null);
  const [dstChain, setDstChain] = useState<any | null>(null);
  const [sender, setSender] = useState<any | null>(null);
  const [receiver, setReceiver] = useState<any | null>(null);
  const [tokenBridge, setTokenBridge] = useState<any | null>(null);
  const [amt, setAmt] = useState<bigint | null>(null);
  const [status, setStatus] = useState<string>('Ready for transfer');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [selectedSourceChain, setSelectedSourceChain] = useState<string | null>(null);
  const [selectedDestinationChain, setSelectedDestinationChain] = useState<string | null>(null);



  useEffect(() => {
    const initializeWormhole = async () => {
      try {
        const whInstance = await wormhole("Testnet", [evm, solana, aptos, algorand, cosmwasm, sui]);
        setWh(whInstance);

        console.log(chains)
        // const srcChainInstance = whInstance.getChain(selectedSourceChain); // Argument of type 'string | null' is not assignable to parameter of type '"Ethereum" | "Arbitrum" | "Solana" | "Aptos" | "Algorand" | "Sui" | "Polygon" | "Terra" | "Bsc" | "Avalanche" | "Oasis" | "Aurora" | "Fantom" | "Karura" | "Acala" | "Klaytn" | "Celo" | ... 37 more ... | "PolygonSepolia"'.
        // const dstChainInstance = whInstance.getChain(selectedDestinationChain); // Argument of type 'string | null' is not assignable to parameter of type '"Ethereum" | "Arbitrum" | "Solana" | "Aptos" | "Algorand" | "Sui" | "Polygon" | "Terra" | "Bsc" | "Avalanche" | "Oasis" | "Aurora" | "Fantom" | "Karura" | "Acala" | "Klaytn" | "Celo" | ... 37 more ... | "PolygonSepolia"'.

        const srcChainInstance = whInstance.getChain(selectedSourceChain as SupportedChains);
        const dstChainInstance = whInstance.getChain(selectedDestinationChain as SupportedChains);
        // const srcChainInstance = whInstance.getChain("Ethereum");
        // const dstChainInstance = whInstance.getChain("Solana");
        setSrcChain(srcChainInstance);
        setDstChain(dstChainInstance);

        const srcSigner = await getSigner(srcChainInstance);
        const dstSigner = await getSigner(dstChainInstance);
        setSender(srcSigner);
        setReceiver(dstSigner);

        const sndTb = await srcChainInstance.getTokenBridge();
        setTokenBridge(sndTb);

        const nativeDecimals = 18; // Ethereum uses 18 decimals
        const amtBigInt = amount.units(amount.parse("0.1", nativeDecimals));
        setAmt(amtBigInt);

        console.log('Initialization complete');
      } catch (error) {
        console.error('Initialization failed:', error);
        setStatus('Initialization failed');
      }
    };

    initializeWormhole();
  }, []);

  useEffect(() => {
    const getWalletAddress = async () => {
      if (!(window as any).ethereum) {
        console.error('MetaMask is not installed or not connected');
        return;
      }

      try {
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log(walletAddress);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    };

    getWalletAddress();
  }, []);

  const handleTransfer = async () => {
    if (!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt) {
      setStatus('Not all required components are initialized');
      return;
    }

    try {
      setStatus('Initiating transfer...');

      const senderAddress: ChainAddress = Wormhole.chainAddress("Ethereum", sender.address());
      const receiverAddress: ChainAddress = Wormhole.chainAddress("Solana", receiver.address());

      const transfer = tokenBridge.transfer(
        senderAddress.toString(),
        receiverAddress.toString(),
        Wormhole.tokenId(srcChain.chain, "native").address,
        amt
      );

      setStatus('Signing and sending transaction...');
      const txids = await signSendWait(srcChain, transfer, sender);
      console.log("Transaction sent: ", txids);

      setStatus('Getting VAA...');
      const [whm] = await srcChain.parseTransaction(txids[txids.length - 1]!.txid);
      const vaa = await wh.getVaa(whm!, "TokenBridge:Transfer", 60_000);

      setStatus('Transfer complete. VAA received.');
      console.log("VAA: ", vaa);
    } catch (error) {
      console.error('Transfer failed:', error);
      setStatus('Transfer failed. See console for details.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Wormhole Transfer</h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Initialization Status</h2>
        <p className={`text-lg ${wh ? 'text-green-600' : 'text-red-600'}`}>
          {wh ? 'Wormhole Initialized' : 'Initializing...'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Source Chain</h3>
          <select
            onChange={(e) => setSelectedSourceChain(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {chains.map((chain) => (
              <option key={chain.chainId} value={chain.chain}>
                {chain.chain}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Destination Chain</h3>
          <select
            onChange={(e) => setSelectedDestinationChain(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {chains.map((chain) => (
              <option key={chain.chainId} value={chain.chain}>
                {chain.chain}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Transfer Amount</h3>
        <p className="text-gray-600">{amt ? amt.toString() : 'Loading...'} (native tokens)</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400"
          disabled={!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt}
          onClick={handleTransfer}
        >
          Transfer
        </button>
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Status</h3>
        <p className="text-gray-600">
          {status}
        </p>
      </div>
    </div>
  );
};

export default WormholeComponent;
