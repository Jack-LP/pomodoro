import React, { useEffect, useState } from 'react';
import { convertTime } from '../utilities/convertTime';

const Clock = ({ isTiming, setIsTiming }) => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (isTiming) {
      const intervalId = setInterval(() => {
        updateTimeRemaining();
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isTiming, setIsTiming, timer, setTimer]);

  const updateTimeRemaining = () => {
    if (!timer) {
      setTimer(10);
      setIsTiming(false);
    }
    console.log(timer);
    setTimer((prev) => prev - 1);
  };

  return (
    <div
      onClick={() => setIsTiming((prev) => !prev)}
      className='bg-midnight relative flex flex-col gap-8 w-[300px] h-[300px] rounded-full items-center justify-center shadowCustom cursor-pointer'
    >
      <span className='text-8xl font-bold pointer-events-none text-slate'>
        {convertTime(timer)}
      </span>
      <button className='absolute bottom-14 text-lg font-semibold text-slate uppercase tracking-[8px]'>
        {isTiming ? 'pause' : 'start'}
      </button>
    </div>
  );
};

export default Clock;
