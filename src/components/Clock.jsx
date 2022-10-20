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
  }, [timeFunc, setTimer]);

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
