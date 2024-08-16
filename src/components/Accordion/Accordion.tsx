'use client';

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

export type notificationProps = {
  id: number;
  header: string;
  text: string;
};
type propsType = {
  notifications: notificationProps[];
};
const Accordion = (props: propsType) => {
  const [active, setActive] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <article className='overflow-scroll h-[15.8rem]'>
        {props.notifications.map((notification, index) => {
          return (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              notification={notification}
            />
          );
        })}
      </article>
    </>
  );
};

export default Accordion;
