// import {
//   Network,
//   SignOnlySigner,
//   SignedTx,
//   Signer as WormholeSigner,
//   UnsignedTransaction,
//   PlatformNativeSigner,
// } from '@wormhole-foundation/sdk-connect';
// import { ethers } from 'ethers';
// import  ChainName  from '@wormhole-foundation/wormhole-connect';

// export type EvmSignerOptions = {
//   debug?: boolean;
//   maxGasLimit?: bigint;
//   overrides?: Partial<ethers.TransactionRequest>;
// };

// type ChainName = 'Ethereum' | 'Solana' | 'Algorand';


// export async function getSigner(
//   provider: ethers.Provider,
//   signer: ethers.Signer,
//   opts?: EvmSignerOptions & { chain?: string },
// ): Promise<WormholeSigner> {
//   const chain = opts?.chain ?? 'Ethereum';
//   const address = await signer.getAddress();
//   return new EvmNativeSigner(chain as ChainName, address, signer, opts); 
// }



// export class EvmNativeSigner<N extends Network, C extends ChainName> 
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

declare global {
  interface Window {
    ethereum?: any;
  }
}


import {
  Network,
  SignOnlySigner,
  SignedTx,
  Signer as WormholeSigner,
  UnsignedTransaction,
  PlatformNativeSigner,
} from '@wormhole-foundation/sdk-connect';
import { ethers } from 'ethers';

export type EvmSignerOptions = {
  debug?: boolean;
  maxGasLimit?: bigint;
  overrides?: Partial<ethers.TransactionRequest>;
};

export type ChainName = 'Ethereum' | 'Solana' | 'Algorand';

// export async function getSigner(
//   chainContext: any
// ): Promise<WormholeSigner> {
//   if (typeof window === 'undefined' || !window.ethereum) { // Property 'ethereum' does not exist on type 'Window & typeof globalThis'.ts(2339)
//     throw new Error('No Ethereum provider found');
//   }

//   const provider = new ethers.BrowserProvider(window.ethereum); // Property 'ethereum' does not exist on type 'Window & typeof globalThis'.ts(2339)
//   const signer = await provider.getSigner();
//   const address = await signer.getAddress();
//   const chain = chainContext.chain as ChainName;

//   return new EvmNativeSigner(chain, address, signer, { debug: true });
// }

export async function getSigner(
  chainContext: any
): Promise<WormholeSigner> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('No Ethereum provider found');
  }

  const provider = new ethers.BrowserProvider(window.ethereum as any);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  const chain = chainContext.chain as ChainName;

  return new EvmNativeSigner(chain, address, signer, { debug: true });
}

export class EvmNativeSigner<N extends Network, C extends ChainName> 
  extends PlatformNativeSigner<ethers.Signer, N, C>
  implements SignOnlySigner<N, C>
{
  constructor(
    _chain: C,
    _address: string,
    _signer: ethers.Signer,
    readonly opts?: EvmSignerOptions,
  ) {
    super(_chain, _address, _signer);
  }

  chain(): C {
    return this._chain;
  }

  address(): string {
    return this._address;
  }

  async sign(tx: UnsignedTransaction<N, C>[]): Promise<SignedTx[]> {
    const signed: SignedTx[] = [];
    for (const txn of tx) {
      const signedTx = await this._signer.signTransaction(txn.transaction as ethers.TransactionRequest);
      signed.push({
        transaction: signedTx,
        signingAddress: this._address,
      });
    }
    return signed;
  }
}

// Add this type guard function
export function isEvmNativeSigner<N extends Network>(
  signer: WormholeSigner<N>
): signer is EvmNativeSigner<N, ChainName> {
  return signer instanceof EvmNativeSigner;
}


