import { useRef } from 'react';
import './Accordion.css';
import { IoChevronUpOutline as ChevronUp } from 'react-icons/io5';
import { IoChevronDownOutline as ChevronDown } from 'react-icons/io5';
import { notificationProps } from './Accordion';
import { HiMiniXMark as Xmark } from 'react-icons/hi2';

type propsType = {
  handleToggle: (id: number) => void;
  active: number | null;
  notification: notificationProps;
};

const AccordionItem = ({ handleToggle, active, notification }: propsType) => {
  const contentEL = useRef(null);
  const { header, id, text } = notification;

  return (
    <>
      <header
        className={active === id ? 'active' : ''}
        onClick={() => handleToggle(id)}
      >
        <p className='max-sm:flex-[0.85] text-[0.75rem]'>
          {header.substring(0, 30) + '.....'}
        </p>
        <div className='flex'>
          {active === id ? (
            <ChevronUp
              size={14}
              className='max-sm:flex-[0.1]'
            />
          ) : (
            <ChevronDown
              size={14}
              className='max-sm:flex-[0.1]'
            />
          )}
          <Xmark size={14} />
        </div>
      </header>
      <div
        ref={contentEL}
        className={`collapse-tab ${active === id ? 'show' : ''}`}
      >
        <p className='text-black'>{text}</p>
      </div>
    </>
  );
};

export default AccordionItem;
