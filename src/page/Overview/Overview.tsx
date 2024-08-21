import React from 'react';
import './OVerview.css';
import Navbar from '../../components/navbar/Navbar';
import { ImUser } from 'react-icons/im';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

const Overview: React.FC = () => {
  const walletAddress = '0x5nosgSJvMZONVsovnpsVSJvmsv3iks02340983';
  return (
    <>
      <Navbar />
      <section className='overview px-8'>
        <div className='grid grid-cols-6 grid-rows-2 gap-5 h-[90vh]'>
          <div className='col-span-4 border-[0.8px] border-midBlue rounded-lg p-4'>
            <h2 className='font-bold'>Assets</h2>
          </div>
          <div className='col-span-2 border-[0.8px] border-midBlue rounded-lg flex flex-col items-center'>
            <div className=' w-[4rem] h-[4rem] flex items-center justify-center border-[1px] border-gray-500 rounded-full p-1 bg-[#57565665] mt-10'>
              {/* <img></img> */}
              <ImUser size={35} />
            </div>
            <p className='text-[0.75rem] text-lightBlue mt-2'>
              Available balance
            </p>
            <h2 className='text-[1.55rem] text-gray-300 tracking-tight'>
              {'1000'} <span className='text-[1.2rem]'>USDT</span>
            </h2>
            <div className='flex items-center bg-[#5756563c] px-2 py-1 gap-3 rounded-lg text-gray-300 cursor-pointer mt-3'>
              <div className='text-[0.7rem] font-semibold bg-[#5756563c] px-1 py-1 rounded-lg text-gray-300'>
                Main wallet
              </div>
              <p className='text-[0.7rem] font-medium'>
                {walletAddress.substring(0, 4) +
                  '...' +
                  walletAddress.substring(
                    walletAddress.length - 4,
                    walletAddress.length
                  )}
              </p>
            </div>
            <div className='flex mt-4 gap-3'>
              <div
                className='flex flex-col items-center bg-gray-300 rounded-full py-2 px-3 cursor-pointer
                transition-all duration-300 hover:bg-purple-400
                '
              >
                <FaArrowUp
                  size={14}
                  className='text-darkBlue'
                />
                <p className='text-[0.68rem] font-medium text-darkBlue'>
                  Transfer
                </p>
              </div>
              <div
                className='flex flex-col items-center bg-gray-300 rounded-full py-2 px-3 cursor-pointer
                    transition-all duration-300 hover:bg-purple-400
                '
              >
                <FaArrowDown
                  size={14}
                  className='text-darkBlue'
                />
                <p className='text-[0.68rem] font-medium text-darkBlue'>
                  Deposit
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-6 border-[1px] h-[] border-midBlue rounded-lg p-4'>
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
