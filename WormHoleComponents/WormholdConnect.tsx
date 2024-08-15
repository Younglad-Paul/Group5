import React, { useState, useEffect } from 'react';
import { Wormhole, amount } from "@wormhole-foundation/sdk";
import algorand from "@wormhole-foundation/sdk/algorand";
import aptos from "@wormhole-foundation/sdk/aptos";
import cosmwasm from "@wormhole-foundation/sdk/cosmwasm";
import evm from "@wormhole-foundation/sdk/evm";
import solana from "@wormhole-foundation/sdk/solana";
import sui from "@wormhole-foundation/sdk/sui";
import { getSigner } from "./helpers/index.js";

const WormholeComponent: React.FC = () => {
  const [wh, setWh] = useState<Wormhole | null>(null);
  const [srcChain, setSrcChain] = useState<any>(null);
  const [dstChain, setDstChain] = useState<any>(null);
  const [sender, setSender] = useState<any>(null);
  const [receiver, setReceiver] = useState<any>(null);
  const [tokenBridge, setTokenBridge] = useState<any>(null);
  const [amt, setAmt] = useState<bigint | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [transferAmount, setTransferAmount] = useState<string>('0.1');

  useEffect(() => {
    const initializeWormhole = async () => {
      try {
        setLoading(true);
        const whInstance = await Wormhole.init("Testnet", [evm, solana, aptos, algorand, cosmwasm, sui]);
        setWh(whInstance);

        const srcChainInstance = whInstance.getChain("Solana");
        const dstChainInstance = whInstance.getChain("Evm");
        setSrcChain(srcChainInstance);
        setDstChain(dstChainInstance);

        const srcSigner = await getSigner(srcChainInstance);
        const dstSigner = await getSigner(dstChainInstance);
        setSender(srcSigner);
        setReceiver(dstSigner);

        const sndTb = await srcChainInstance.getTokenBridge();
        setTokenBridge(sndTb);

        const nativeDecimals = 9; // Replace with actual decimals
        const amtBigInt = amount.units(amount.parse(transferAmount, nativeDecimals));
        setAmt(amtBigInt);

        setLoading(false);
      } catch (error) {
        console.error('Initialization failed:', error);
        setError('Failed to initialize Wormhole. Please try again.');
        setLoading(false);
      }
    };

    initializeWormhole();
  }, []);

  const handleTransfer = async () => {
    if (!wh || !srcChain || !dstChain || !sender || !receiver || !tokenBridge || !amt) {
      setError('Not all required components are initialized');
      return;
    }

    try {
      setLoading(true);
      const tokenId = Wormhole.tokenId(srcChain.chain, "native");
      const transferTx = await tokenBridge.transfer(
        sender,
        receiver.address,
        tokenId,
        amt
      );
      const receipt = await transferTx.wait();
      console.log('Transfer complete:', receipt);
      setLoading(false);
    } catch (error) {
      console.error('Transfer failed:', error);
      setError('Failed to complete transfer. Please try again.');
      setLoading(false);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(e.target.value);
    if (wh && srcChain) {
      const nativeDecimals = 9; // Replace with actual decimals
      const newAmtBigInt = amount.units(amount.parse(e.target.value, nativeDecimals));
      setAmt(newAmtBigInt);
    }
  };

  return (
    <div className="wormhole-component">
      <h1>Wormhole Cross-Chain Transfer</h1>
      {loading ? (
        <p>Loading Wormhole components...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <div className="chain-info">
            <h2>Chain Information</h2>
            <p>Source Chain: {srcChain?.chain}</p>
            <p>Destination Chain: {dstChain?.chain}</p>
          </div>
          <div className="transfer-form">
            <h2>Transfer Details</h2>
            <label>
              Amount to Transfer:
              <input
                type="number"
                value={transferAmount}
                onChange={handleAmountChange}
                step="0.000000001"
                min="0"
              />
            </label>
            <p>Sender Address: {sender?.address}</p>
            <p>Receiver Address: {receiver?.address}</p>
            <button onClick={handleTransfer} disabled={loading}>
              {loading ? 'Processing...' : 'Transfer'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WormholeComponent;