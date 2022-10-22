import React, { useEffect, useState } from 'react';
import { convertTime } from '../utilities/convertTime';

const Clock = ({ isTiming, setIsTiming, timeFunc, timeSettings }) => {
  let defaultTimer;
  if (timeFunc === 'pomodoro') {
    defaultTimer = timeSettings.pomodoro;
  } else if (timeFunc === 'short') {
    defaultTimer = timeSettings.short;
  } else {
    defaultTimer = timeSettings.long;
  }

  const [timer, setTimer] = useState(defaultTimer);

  const updateTimeRemaining = () => {
    if (!timer) {
      setTimer(defaultTimer + 1);
      setIsTiming(false);
    }
    setTimer((prev) => prev - 1);
  };

  useEffect(() => {
    if (isTiming) {
      const intervalId = setInterval(() => {
        updateTimeRemaining();
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isTiming, setIsTiming, timer, setTimer]);

  useEffect(() => {
    setIsTiming(false);
    if (timeFunc === 'pomodoro') {
      setTimer(timeSettings.pomodoro);
    } else if (timeFunc === 'short') {
      setTimer(timeSettings.short);
    } else {
      setTimer(timeSettings.long);
    }
  }, [timeFunc, setTimer, timeSettings]);

  return (
    <>
      <div className='absolute top-[245px] bg-midnight  w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full customShadow' />
      <div className='absolute top-[240px] bg-gradient-to-br from-[#14162a] to-[#292e56] w-[330px] h-[330px] md:w-[430px] md:h-[430px] rounded-full' />
      <div
        onClick={() => setIsTiming((prev) => !prev)}
        className='bg-midnight relative flex flex-col gap-8 md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full items-center justify-center cursor-pointer mt-14'
      >
        <span className='text-[85px] md:text-[110px] font-bold pointer-events-none text-slate'>
          {convertTime(timer)}
        </span>
        <button className='absolute bottom-14 text-lg md:text-2xl font-semibold text-slate uppercase tracking-[8px]'>
          {isTiming ? 'pause' : 'start'}
        </button>
      </div>
    </>
  );
};

export default Clock;
