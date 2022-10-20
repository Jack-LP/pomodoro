import React, { useState } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

const SettingsModal = () => {
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
        } absolute inset-0 bg-black/50 backdrop-blur-sm items-center justify-center z-20`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='flex flex-col bg-white text-midnight p-6 rounded-xl gap-6 z-30'
        >
          <h2 className='font-bold text-2xl border-b-2'>Settings</h2>
          <div className='flex flex-col gap-4 pb-6 border-b-2'>
            <h3 className='font-semibold text-lg uppercase tracking-widest'>
              Time (Minutes)
            </h3>
            <div className='flex gap-10'>
              <div className='flex flex-col'>
                <span>pomodoro</span>
                Input
              </div>
              <div className='flex flex-col'>
                <span>short break</span>
                Input
              </div>
              <div className='flex flex-col'>
                <span>long break</span>
                Input
              </div>
            </div>
          </div>
          <div className='flex justify-between pb-6 border-b-2'>
            <h3 className='font-semibold text-lg uppercase tracking-widest'>
              Font
            </h3>
            <div className='flex gap-4'>
              <span>item</span>
              <span>item</span>
              <span>item</span>
            </div>
          </div>
          <div className='flex justify-between pb-6'>
            <h3 className='font-semibold text-lg uppercase tracking-widest'>
              Color
            </h3>
            <div className='flex gap-4'>
              <span>item</span>
              <span>item</span>
              <span>item</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
