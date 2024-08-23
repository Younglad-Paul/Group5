import React from 'react';
import './OVerview.css';
import Navbar from '../../components/navbar/Navbar';
import { ImUser } from 'react-icons/im';
import {
  HiArrowsRightLeft,
  HiArrowSmallUp,
  HiArrowSmallDown,
} from 'react-icons/hi2';
import { useState } from 'react';
import CryptoCard from '../../components/CryptoCard';
import { CryptoCardPropType } from '../../components/CryptoCard';
import { FaEthereum } from 'react-icons/fa6';

type walletType = {
  id: number;
  walletName: string;
  walletAddress: string;
};

const Overview: React.FC = () => {
  const [wallets, setWallets] = useState<walletType[]>([]);
  const [activeWallet, setActiveWallet] = useState<walletType | null>(null);

  const connectWallet = () => {
    const initialWallets = [
      {
        id: 1,
        walletName: 'Main wallet',
        walletAddress: '0x5nosgSJvMZONVsovnpsVSJvmsv3iks02340983',
      },
      {
        id: 2,
        walletName: 'Second Wallet',
        walletAddress: '0x93FnosgSJvMZONVsovnpsVSJvmsv3iks023409',
      },
    ];

    setWallets(initialWallets);
    setActiveWallet(initialWallets[0]);
  };

  const assets: CryptoCardPropType[] = [
    {
      Image: FaEthereum,
      cryptoName: 'Ethereum (Eth)',
    },
    {
      Image: FaEthereum,
      cryptoName: 'Ethereum (Eth)',
    },
    {
      Image: FaEthereum,
      cryptoName: 'Ethereum (Eth)',
      // data: {
      //   name: "",
      //   price: number
      // }
    },
  ];
  const handleWormHolePortal = () => {
    alert('Wormhole portal under construction');
  };

  const handleDeposit = () => {
    alert('Deposit under construction');
  };

  const handleTransfer = () => {
    alert('Transfer under construction');
  };

  const handleWalletChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWalletName = e.target.value;
    const selectedWallet = wallets.find(
      (wallet) => wallet.walletName === selectedWalletName
    );
    if (selectedWallet) {
      setActiveWallet(selectedWallet);
    }
  };
  return (
    <>
      <Navbar />
      <section className='overview px-8 h-[90vh] flex flex-col'>
        <div className='flex justify-between border-[0.8px] border-midBlue rounded-lg p-4'>
          <div className='flex-1'>
            <h2 className='mb-4 ml-5 font-medium text-[1.3rem]'>
              Assets Overview
            </h2>

            <div className=' grid grid-cols-3 gap-x-5 ps-5 pr-16'>
              {assets.map((asset, id) => (
                <CryptoCard
                  key={id}
                  Image={FaEthereum}
                  cryptoName={asset.cryptoName}
                />
              ))}
            </div>
          </div>

          {/* wallet Balance Display  */}
          <div className='col-span-2 flex flex-col items-center border-[0.5px] border-[#5d5d5d33] bg-[#26262c3b] rounded-lg p-5'>
            <div className=' w-[3rem] h-[3rem] flex items-center justify-center border-[1px] border-gray-500 rounded-full p-1 bg-[#57565665]'>
              {/* <img></img> */}
              <ImUser size={35} />
            </div>
            <p className='text-[0.75rem] text-lightBlue mt-2'>
              Available balance
            </p>
            <h2 className='text-[1.55rem] text-gray-300 tracking-tight'>
              {'1000'} <span className='text-[1.2rem]'>USDT</span>
            </h2>
            {wallets.length > 0 || wallets == null ? (
              <div className='flex items-center bg-[#5756563c] px-2 py-1 gap-3 rounded-lg text-gray-300 cursor-pointer my-3'>
                <select
                  className='text-[0.7rem] font-semibold bg-[#5756563c] px-1 py-1 rounded-lg 
                  text-gray-300 focus:outline-none'
                  value={activeWallet?.walletName}
                  onChange={(e) => handleWalletChange(e)}
                >
                  {wallets.map((wallet, id) => (
                    <option
                      key={id}
                      value={wallet.walletName}
                    >
                      {wallet.walletName}
                    </option>
                  ))}
                </select>
                <p className='text-[0.7rem] font-medium'>
                  {activeWallet?.walletAddress.substring(0, 4) +
                    '...' +
                    activeWallet?.walletAddress?.substring(
                      activeWallet?.walletAddress.length - 4,
                      activeWallet?.walletAddress.length
                    )}
                </p>
              </div>
            ) : (
              <div>
                <button
                  onClick={connectWallet}
                  className='px-3 py-2 bg-blue-400 hover:opacity-65 text-sm text-midBlue rounded-lg my-3'
                >
                  Connect Wallet
                </button>
              </div>
            )}
            <div className='flex mt-4 gap-3'>
              <div
                className='flex flex-col items-center bg-gray-300 rounded-full py-2 px-3 cursor-pointer
                transition-all duration-300 hover:bg-blue-400
                '
                onClick={handleTransfer}
              >
                <HiArrowSmallUp
                  size={14}
                  className='text-darkBlue'
                />
                <p className='text-[0.68rem] font-medium text-darkBlue'>
                  Transfer
                </p>
              </div>
              <div
                className='flex flex-col items-center bg-gray-300 rounded-full py-2 px-3 cursor-pointer
                    transition-all duration-300 hover:bg-blue-400
                '
                onClick={handleDeposit}
              >
                <HiArrowSmallDown
                  size={14}
                  className='text-darkBlue'
                />
                <p className='text-[0.68rem] font-medium text-darkBlue'>
                  Deposit
                </p>
              </div>
              <div
                className='flex flex-col items-center bg-gray-300 rounded-full py-2 px-3 cursor-pointer
                    transition-all duration-300 hover:bg-blue-400
                '
                onClick={handleWormHolePortal}
              >
                <HiArrowsRightLeft
                  size={14}
                  className='text-darkBlue'
                />
                <p className='text-[0.68rem] font-medium text-darkBlue'>
                  Exchange
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <div className='col-span-6 border-[1px] h-full border-midBlue rounded-lg p-4 w-full'>
            <h2 className='w-full text-center font-bold'>
              Transaction History
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
