import React, { useState } from 'react';
import { Cog6ToothIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

const fontOptions = ['font-kumbh', 'font-roboto', 'font-space'];
const colorOptions = ['bg-fire', 'bg-ice', 'bg-grape'];

const SettingsModal = ({
  timeSettings,
  setTimeSettings,
  fontSettings,
  setFontSettings,
  colorSettings,
  setColorSettings,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='absolute bottom-10'
      >
        <Cog6ToothIcon className='h-8 w-8 text-slate' />
      </button>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? 'flex' : 'hidden'
        } absolute inset-0 bg-black/50 backdrop-blur-sm items-center justify-center z-20 font-kumbh`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='w-11/12 md:w-9/12 lg:w-1/2 xl:w-1/3 flex flex-col bg-white text-midnight p-6 rounded-xl gap-6 z-30'
        >
          <div className='flex justify-between items-center border-b-2 pb-4'>
            <h2 className='font-bold text-2xl'>Settings</h2>
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className='h-6 w-6 text-midnight/50' />
            </button>
          </div>
          <div className='flex flex-col items-center gap-4 pb-6 border-b-2'>
            <h3 className='font-semibold text-sm uppercase tracking-widest'>
              Time (Minutes)
            </h3>
            <div className='flex gap-10 flex-col md:flex-row md:justify-between w-full'>
              <div className='flex md:flex-col md:items-start justify-between items-center md:w-full md:gap-2'>
                <span className='font-semibold text-midnight/75'>pomodoro</span>
                <input
                  type='number'
                  min='1'
                  max='60'
                  defaultValue={timeSettings.pomodoro / 60}
                  className='bg-chalk rounded-lg p-2 max-w-[130px] font-semibold md:w-full'
                />
              </div>
              <div className='flex md:flex-col md:items-start justify-between items-center md:w-full md:gap-2'>
                <span className='font-semibold text-midnight/75'>
                  short break
                </span>
                <input
                  type='number'
                  min='1'
                  max='60'
                  defaultValue={timeSettings.short / 60}
                  className='bg-chalk rounded-lg p-2 max-w-[130px] font-semibold md:w-full'
                />
              </div>
              <div className='flex md:flex-col md:items-start justify-between items-center md:w-full md:gap-2'>
                <span className='font-semibold text-midnight/75'>
                  long break
                </span>
                <input
                  type='number'
                  min='1'
                  max='60'
                  defaultValue={timeSettings.long / 60}
                  className='bg-chalk rounded-lg p-2 max-w-[130px] font-semibold md:w-full'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 justify-between pb-6 border-b-2 items-center'>
            <h3 className='font-semibold text-sm uppercase tracking-widest'>
              Font
            </h3>
            <div className='flex gap-4'>
              {fontOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setFontSettings(item)}
                  className={`${
                    fontSettings === item
                      ? 'bg-midnight text-chalk'
                      : 'bg-chalk'
                  } w-8 h-8 rounded-full`}
                >
                  <span className={`${item} font-semibold`}>Aa</span>
                </button>
              ))}
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 justify-between pb-6 items-center'>
            <h3 className='font-semibold text-sm uppercase tracking-widest'>
              Color
            </h3>
            <div className='flex gap-4'>
              {colorOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setColorSettings(item)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${item}`}
                >
                  {colorSettings === item ? (
                    <CheckIcon className='w-5 h-5' />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
