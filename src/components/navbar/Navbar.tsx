import React, { useState } from 'react';
import './Navbar.css';
import { IoNotificationsOutline as NotificationIcon } from 'react-icons/io5';
import Accordion, { notificationProps } from '../Accordion/Accordion';

const Navbar = () => {
  const [openNotificationDropdown, setOpenNotificationDropdown] =
    useState<boolean>(false);

  const notifications: notificationProps[] = [
    {
      id: 1,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
    {
      id: 2,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
    {
      id: 3,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
    {
      id: 4,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
    {
      id: 5,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
    {
      id: 6,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
    {
      id: 7,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
    {
      id: 8,
      header:
        'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
      text: 'you received 40ETH from 0xEnvodnRsTKsmjwo59SvnpsvnpRKSVMxzpvnrKS304',
    },
  ];

  const toggleNotificationsDropdown = () => {
    setOpenNotificationDropdown(!openNotificationDropdown);
  };
  return (
    <div className='Navbar flex items-center justify-between md:px-8 px-2 py-3'>
      <div className='text-[2rem]'>LOGO.</div>
      <div className='flex items-center gap-5'>
        <div className='cursor-pointer'>
          <p className='text-right leading-tight text-[0.9rem]'>{'John Doe'}</p>
          <p className='text-lightBlue text-[0.8rem]'>@{'setusername'}</p>
        </div>
        <div
          onClick={toggleNotificationsDropdown}
          className='rounded-full w-[2.1rem] h-[2.1rem] border-[1.5px] border-gray-400 flex 
                justify-center items-center relative'
        >
          <NotificationIcon
            size={16}
            className='cursor-pointer'
          />
          {true ? (
            <span
              className=' bg-blue-400 font-medium text-darkBlue px-2 rounded-lg text-[0.85rem]
                        absolute -top-2 -right-3'
            >
              {'5'}
            </span>
          ) : (
            <></>
          )}
        </div>

        <div
          className={`fixed top-[4rem] bg-darkBlue border-[1.5px] border-lightBlue 
            rounded-md md:right-9 w-[19rem] -z-5 py-0 h-0 opacity-0 transition-all duration-200 overflow-hidden ${
              openNotificationDropdown ? ' opacity-100 z-1 py-2 h-auto' : ''
            }
                `}
        >
          <h3 className='px-5 pt-4 mb-2'>Notifications</h3>
          <Accordion notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
