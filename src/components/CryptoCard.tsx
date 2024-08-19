import React from 'react';

const CryptoCard = () => {
  return (
    <div className='bg-[#26262c53] text-white p-6 rounded-xl shadow-lg '>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center'>
          <div className=' p-2 rounded-full'>
            <small>ETH IMAGE</small>
          </div>
          <div className='ml-3'>
            <h3 className='text-sm font-medium'>Proof of Stake</h3>
            <p className='text-lg font-semibold'>Ethereum (ETH)</p>
          </div>
        </div>
        <div className=' p-2 rounded-full'>
          <p>Arrow Icon</p>
        </div>
      </div>

      <div className='mb-2'>
        <p>Reward Rate</p>
        <p className='text-4xl font-bold'>13.62%</p>
        <p className='flex items-center text-green-500'>
          <p>Arrow Up</p>
          <span className='ml-1 text-sm'>6.25%</span>
        </p>
      </div>

      <div className='relative'>
        <p>Graph</p>
        <div className='absolute bottom-0 right-0 rounded-lg'>
          <p className='text-sm font-semibold'>+$2,956</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
