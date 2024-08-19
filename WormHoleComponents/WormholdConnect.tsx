import React, { useState, useEffect } from 'react';
import { wormhole, amount, Wormhole } from "@wormhole-foundation/sdk";
import algorand from "@wormhole-foundation/sdk/algorand";
import aptos from "@wormhole-foundation/sdk/aptos";
import cosmwasm from "@wormhole-foundation/sdk/cosmwasm";
import evm from "@wormhole-foundation/sdk/evm";
import solana from "@wormhole-foundation/sdk/solana";
import sui from "@wormhole-foundation/sdk/sui";
import { getSigner } from "./evmSigner";
import { ethers } from 'ethers';

const WormholeComponent: React.FC = () => {
  const [wh, setWh] = useState<Wormhole<"Testnet"> | null>(null);
  const [srcChain, setSrcChain] = useState<any | null>(null);; 
  const [dstChain, setDstChain] = useState<any | null>(null);  
  const [sender, setSender] = useState<ethers.Signer | null>(null); 
  const [receiver, setReceiver] = useState<ethers.Signer | null>(null);
  const [tokenBridge, setTokenBridge] = useState<any | null>(null);
  const [amt, setAmt] = useState<bigint | null>(null);

  useEffect(() => {
    const initializeWormhole = async () => {
      try {
        const whInstance = await wormhole("Testnet", [evm, solana, aptos, algorand, cosmwasm, sui]);
        setWh(whInstance);
  
        // Get source and destination chain instances
        const srcChainInstance = whInstance.getChain("Solana");
        const dstChainInstance = whInstance.getChain("Ethereum");
        setSrcChain(srcChainInstance);
        setDstChain(dstChainInstance);
  
        // Create signers for source and destination chains
        const srcSigner = await getSigner(srcChainInstance);  
        const dstSigner = await getSigner(dstChainInstance);  
        setSender(srcSigner);
        setReceiver(dstSigner);
  
        // Set token bridge and amount
        const sndTb = await srcChainInstance.getTokenBridge();
        setTokenBridge(sndTb);
  
        const tokenId = Wormhole.tokenId(srcChainInstance.chain, "native");
        const nativeDecimals = 9;
        const amtBigInt = amount.units(amount.parse("0.1", nativeDecimals));
        setAmt(amtBigInt);
  
        console.log('Initialization complete', {
          srcChain: srcChainInstance,
          dstChain: dstChainInstance,
          sender: srcSigner,
          receiver: dstSigner,
          tokenBridge: sndTb,
          tokenId,
          amtBigInt,
        });
      } catch (error) {
        console.error('Initialization failed:', error);
      }
    };
  
    initializeWormhole();
  }, []);
  

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
          <p className="text-gray-600">{srcChain?.chain || 'Loading...'}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Destination Chain</h3>
          <p className="text-gray-600">{dstChain?.chain || 'Loading...'}</p>
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
  onClick={() => {
    // Implement transfer logic using sender, receiver, and tokenBridge
  }}
>
  Transfer
</button>

        <button 
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
          disabled={!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt}
          onClick={() => {/* Implement redeem logic */}}
        >
          Redeem
        </button>
      </div>
  
      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Status</h3>
        <p className="text-gray-600">
          Ready for transfer
        </p>
      </div>
    </div>
  );
};

export default WormholeComponent;

// import React, { useState, useEffect } from 'react';
// import { wormhole } from '@wormhole-foundation/sdk';
// import { amount, signSendWait } from '@wormhole-foundation/sdk';
// import evm from '@wormhole-foundation/sdk/evm';
// import solana from '@wormhole-foundation/sdk/solana';
// import algorand from '@wormhole-foundation/sdk/algorand';
// import { getSigner } from './evmSigner';

// const WormholeTransfer = () => {
//    const [wh, setWh] = useState(null);

//   const [sourceChain, setSourceChain] = useState('Solana');
//   const [destinationChain, setDestinationChain] = useState('Algorand');
//   const [amount, setAmount] = useState('0.1');
//   const [transferTxid, setTransferTxid] = useState(null);
//   const [redeemTxid, setRedeemTxid] = useState(null);
//   const [transferCompleted, setTransferCompleted] = useState(false);

//   useEffect(() => {
//     const initWormhole = async () => {
//       const wh = await wormhole('Testnet', [evm, solana, algorand]);



//       const ctx = wh.getChain(sourceChain);
//       const rcv = wh.getChain(destinationChain);
//       const sender = await getSigner(ctx);
//       const receiver = await getSigner(rcv);

//       const sndTb = await ctx.getTokenBridge();
//       const tokenId = Wormhole.tokenId(ctx.chain, 'native');
//       const amt = amount.units(amount.parse(amount, ctx.config.nativeTokenDecimals));

//       const transfer = sndTb.transfer(sender.address.address, receiver.address, tokenId.address, amt);
//       const txids = await signSendWait(ctx, transfer, sender.signer);
//       setTransferTxid(txids[txids.length - 1]!.txid);

//       const whm = await ctx.parseTransaction(txids[txids.length - 1]!.txid);
//       const vaa = await wh.getVaa(whm!, 'TokenBridge:Transfer', 60_000);

//       const rcvTb = await rcv.getTokenBridge();
//       const redeem = rcvTb.redeem(receiver.address.address, vaa!);
//       const rcvTxids = await signSendWait(rcv, redeem, receiver.signer);
//       setRedeemTxid(rcvTxids[rcvTxids.length - 1]!.txid);

//       const finished = await rcvTb.isTransferCompleted(vaa!);
//       setTransferCompleted(finished);
//     };

//     initWormhole();
//   }, [sourceChain, destinationChain, amount]);

//   return (
//     <div>
//       <h1>Wormhole Transfer</h1>
//       <form>
//         <label>
//           Source Chain:
//           <select value={sourceChain} onChange={(e) => setSourceChain(e.target.value)}>
//             <option value="Solana">Solana</option>
//             <option value="EVM">EVM</option>
//             <option value="Algorand">Algorand</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Destination Chain:
//           <select value={destinationChain} onChange={(e) => setDestinationChain(e.target.value)}>
//             <option value="Solana">Solana</option>
//             <option value="EVM">EVM</option>
//             <option value="Algorand">Algorand</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Amount:
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Transfer</button>
//       </form>
//       {transferTxid && (
//         <p>
//           Transfer TXID: {transferTxid}
//         </p>
//       )}
//       {redeemTxid && (
//         <p>
//           Redeem TXID: {redeemTxid}
//         </p>
//       )}
//       {transferCompleted && (
//         <p>
//           Transfer Completed: {transferCompleted.toString()}
//         </p>
//       )}
//     </div>
//   );
// };

// export default WormholeTransfer;