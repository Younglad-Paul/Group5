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
} from 'recharts';
// import { text } from 'body-parser';

export type CryptoCardPropType = {
  Image: IconType;
  cryptoName: string;
};

const data = [
  { pv: 2400, name: 'a' },
  { pv: 1398, name: 'b' },
  { pv: 7800, name: 'c' },
  { pv: 3908, name: 'd' },
  { pv: 9800, name: 'e' },
  { pv: 3800, name: 'f' },
  { pv: 4300, name: 'g' },
];

const highestValue = Math.max(...data.map((d) => d.pv));
const lowestValue = Math.min(...data.map((d) => d.pv));
const midpoint = (highestValue + lowestValue) / 2;

// Define the points for ReferenceArea
const point1 = data.find((d) => d.name === 'c');
const point2 = data.find((d) => d.name === 'e');
const difference =
  point1 !== undefined && point2 !== undefined ? point2.pv - point1.pv : 0;

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
        <p className='text-[1.5rem] font-bold'>13.62%</p>
        <p className='flex items-center text-green-500'>
          <Increase size={15} />
          <span className='ml-1 text-sm'>6.25%</span>
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
              x1='c'
              x2='e'
              fill='#7969b941'
              stroke='none'
            >
              {difference < 0 ? (
                <Label
                  value={`-$${difference}`}
                  position='insideTop'
                  offset={10}
                  style={{
                    fill: '#c73232fd',
                    fontSize: '12px',
                    fontWeight: 'normal',
                  }}
                  className='font-poppins'
                />
              ) : (
                <Label
                  value={`+$${difference}`}
                  position='insideTop'
                  offset={10}
                  style={{
                    fill: 'green',
                    fontSize: '12px',
                    fontWeight: 'normal',
                  }}
                  className='font-poppins'
                />
              )}
            </ReferenceArea>
            <ReferenceLine
              y={midpoint}
              stroke='gray'
              strokeDasharray='3 3'
            />
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#8884d8'
            />
          </LineChart>
        </ResponsiveContainer>
        <div className='absolute bottom-0 right-0 rounded-lg'>
          <p className='text-sm font-semibold'>+$2,956</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
