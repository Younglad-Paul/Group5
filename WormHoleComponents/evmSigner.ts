// import {
//   Network,
//   SignOnlySigner,
//   SignedTx,
//   Signer as WormholeSigner,
//   UnsignedTransaction,
//   PlatformNativeSigner,
// } from '@wormhole-foundation/sdk-connect';
// import { ethers } from 'ethers';
// // import  ChainName  from '@wormhole-foundation/wormhole-connect';

// export type EvmSignerOptions = {
//   debug?: boolean;
//   maxGasLimit?: bigint;
//   overrides?: Partial<ethers.TransactionRequest>;
// };

// export async function getEvmSigner(
//   provider: ethers.Provider,
//   signer: ethers.Signer,
//   opts?: EvmSignerOptions & { chain?: string },
// ): Promise<WormholeSigner> {
//   const chain = opts?.chain ?? 'Ethereum';
//   const address = await signer.getAddress();
//   return new EvmNativeSigner(chain as ChainName, address, signer, opts); // Cannot find name 'ChainName'.ts(2304)
// }

// export class EvmNativeSigner<N extends Network, C extends ChainName> // Cannot find name 'ChainName'.ts(2304) type ChainName = /*unresolved*/ any
//   extends PlatformNativeSigner<ethers.Signer, N, C>
//   implements SignOnlySigner<N, C>
// {
//   constructor(
//     _chain: C,
//     _address: string,
//     _signer: ethers.Signer,
//     readonly opts?: EvmSignerOptions,
//   ) {
//     super(_chain, _address, _signer);
//   }

//   chain(): C {
//     return this._chain;
//   }

//   address(): string {
//     return this._address;
//   }


//   async sign(tx: UnsignedTransaction<N, C>[]): Promise<SignedTx[]> {
//     const signed: SignedTx[] = [];
//     for (const txn of tx) {
//       const signedTx = await this._signer.signTransaction(txn.transaction as ethers.TransactionRequest);
//       signed.push({
//         transaction: signedTx,
//         signingAddress: this._address,
//       });
//     }
//     return signed;
//   }
  
// }






// ./helpers/index.js
import { Wallet } from '@project-serum/anchor';
import { Connection } from '@solana/web3.js';
import { Algodv2 } from 'algosdk';
import { AptosWallet } from '@aptos-labs/wallet-adapter-aptos';
import { EvmWallet } from '@wormhole-foundation/sdk/evm';

const getSigner = async (chainContext) => {
  switch (chainContext.chain) {
    case 'Solana':
      const solanaWallet = new Wallet(new Connection('https://api.devnet.solana.com', 'confirmed'));
      return solanaWallet;
    case 'Algorand':
      const algodClient = new Algodv2('https://api.testnet.algoexplorer.io', '');
      const algodWallet = new Wallet(algodClient);
      return algodWallet;
    case 'Aptos':
      const aptosWallet = new AptosWallet();
      return aptosWallet;
    case 'EVM':
      const evmWallet = new EvmWallet(chainContext.config.ethereumProvider);
      return evmWallet;
    default:
      throw new Error(`Unsupported chain: ${chainContext.chain}`);
  }
};

export { getSigner };