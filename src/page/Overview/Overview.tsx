import React from 'react';
import './OVerview.css';
import Navbar from '../../components/navbar/Navbar';

const Overview: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className='overview px-8'>
        <div className='grid grid-cols-6 gap-5 h-[90vh]'>
          <div className='col-span-4 border-[0.8px] border-lightBlue rounded-md'>
            <h2>Assets</h2>
          </div>
          <div className='col-span-2 border-[0.8px] border-lightBlue rounded-md'>
            <h2>Wallet Deatails</h2>
          </div>
          <div className='col-span-6 border-[0.8px] h-[] border-lightBlue rounded-md'>
            <h2>Transaction History</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
