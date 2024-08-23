import React from 'react';
import { IconType } from 'react-icons/lib';
import { BsArrowUpRightCircleFill as Increase } from 'react-icons/bs';
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
  Label,
  Dot,
} from 'recharts';
// import { text } from 'body-parser';

export type CryptoCardPropType = {
  Image: IconType;
  cryptoName: string;
  //   data: {
  //     name: string,
  //     price: number
  //   }
};

const data = [
  { price: 2400, name: 'a' },
  { price: 7800, name: 'c' },
  { price: 3900, name: 'd' },
  { price: 9800, name: 'e' },
  { price: 9810, name: 'f' },
];

const highestValue = Math.max(...data.map((d) => d.price));
const lowestValue = Math.min(...data.map((d) => d.price));
const midpoint = (highestValue + lowestValue) / 2;

// difference between the Reference point A and B in the Reference Area: for the Label
const difference: number = data ? data[2].price - data[1].price : 0;

const ReferenAreaPointA: string = data[2].name;
const ReferenAreaPointB: string = data[1].name;

const CryptoCard = (props: CryptoCardPropType) => {
  return (
    <div className='bg-[#26262c53] text-white rounded-xl shadow-lg pb-4'>
      <div className='flex justify-between items-center mb-4 px-4 pt-4'>
        <div className='flex'>
          <div className=' p-2 rounded-full'>
            <props.Image />
          </div>
          <div className=''>
            <h3 className='text-[0.6rem] text-gray-400'>Proof of Stake</h3>
            <p className='text-[0.8rem]'>{props.cryptoName}</p>
          </div>
        </div>
        {/* <div className=' p-2 rounded-full'>
          <p>Arrow Icon</p>
        </div> */}
      </div>

      <div className='mb-2 px-4'>
        <p className='text-[0.7rem] text-gray-400'>Reward Rate</p>
        <p className='text-[1.5rem] font-bold'>{'13.62%'}</p>
        <p className='flex items-center text-green-500'>
          <Increase size={15} />
          <span className='ml-1 text-sm'>{'6.25%'}</span>
        </p>
      </div>

      <div className='relative h-[100px] w-full'>
        <ResponsiveContainer
          width='100%'
          height='100%'
        >
          <LineChart
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey='name'
              hide
            />
            <ReferenceArea
              x1={ReferenAreaPointA}
              x2={ReferenAreaPointB}
              fill='#7969b941'
              stroke='none'
            >
              {difference < 0 ? (
                <Label
                  value={`-$${Math.abs(difference)}`}
                  position='insideBottom'
                  offset={10}
                  style={{
                    fill: '#f64545fd',
                    fontSize: '0.7rem',
                    fontWeight: 'normal',
                  }}
                  className='font-poppins'
                />
              ) : (
                <Label
                  value={`+$${Math.abs(difference)}`}
                  position='insideTop'
                  offset={10}
                  style={{
                    fill: '#8884d8',
                    fontSize: '12px',
                    fontWeight: 'normal',
                  }}
                  className='font-poppins'
                />
              )}
            </ReferenceArea>
            <ReferenceLine
              y={midpoint}
              stroke='#57565660'
              strokeDasharray='3 3'
            />
            <Line
              type='monotone'
              dot={false}
              dataKey='price'
              stroke={difference < 0 ? '#f64545fd' : '#8884d8'}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CryptoCard;
