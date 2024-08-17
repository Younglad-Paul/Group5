import React, { useState, useEffect } from 'react';
import { wormhole, amount, Wormhole, signSendWait } from "@wormhole-foundation/sdk";
import algorand from "@wormhole-foundation/sdk/algorand";
import aptos from "@wormhole-foundation/sdk/aptos";
import cosmwasm from "@wormhole-foundation/sdk/cosmwasm";
import evm from "@wormhole-foundation/sdk/evm";
import solana from "@wormhole-foundation/sdk/solana";
import sui from "@wormhole-foundation/sdk/sui";
import { getSigner } from "./evmSigner";

const WormholeComponent: React.FC = () => {
  const [wh, setWh] = useState<any | null>(null);
  const [srcChain, setSrcChain] = useState<any>(null);
  const [dstChain, setDstChain] = useState<any>(null);
  const [sender, setSender] = useState<any>(null);
  const [receiver, setReceiver] = useState<any>(null);
  const [tokenBridge, setTokenBridge] = useState<any>(null);
  const [amt, setAmt] = useState<bigint | null>(null);

  useEffect(() => {
    const initializeWormhole = async () => {
      try {
        const whInstance = await wormhole("Testnet", [evm, solana, aptos, algorand, cosmwasm, sui]);
        setWh(whInstance);

        const srcChainInstance = whInstance.getChain("Solana");
        const dstChainInstance = whInstance.getChain("Ethereum");
        setSrcChain(srcChainInstance);
        setDstChain(dstChainInstance);

        const srcSigner = await getSigner(srcChainInstance);
        const dstSigner = await getSigner(dstChainInstance);
        setSender(srcSigner);
        setReceiver(dstSigner);

        const sndTb = await srcChainInstance.getTokenBridge();
        setTokenBridge(sndTb);

        const tokenId = Wormhole.tokenId(srcChainInstance.chain, "native");
        const nativeDecimals = 9; // Replace with actual decimals
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
    <div>
      {/* Your component JSX here */}
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