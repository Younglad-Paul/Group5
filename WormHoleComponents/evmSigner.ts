import {
  Network,
  SignOnlySigner,
  SignedTx,
  Signer as WormholeSigner,
  UnsignedTransaction,
  PlatformNativeSigner,
 // Module '"@wormhole-foundation/sdk-connect"' has no exported member 'ChainName'.ts(2305)
} from '@wormhole-foundation/sdk-connect';
import { ethers } from 'ethers';
import  ChainName  from '@wormhole-foundation/wormhole-connect';

export type EvmSignerOptions = {
  debug?: boolean;
  maxGasLimit?: bigint;
  overrides?: Partial<ethers.TransactionRequest>;
};

export async function getEvmSigner(
  provider: ethers.Provider,
  signer: ethers.Signer,
  opts?: EvmSignerOptions & { chain?: string },
): Promise<WormholeSigner> {
  const chain = opts?.chain ?? 'Ethereum';
  const address = await signer.getAddress();
  return new EvmNativeSigner(chain as ChainName, address, signer, opts);
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