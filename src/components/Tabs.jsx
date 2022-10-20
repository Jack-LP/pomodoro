import React from 'react';

const tabs = ['pomodoro', 'short', 'long'];

const Tabs = ({ timeFunc, setTimeFunc }) => {
  return (
    <div className='flex gap-4 text-sm bg-midnight p-2 rounded-full'>
      {tabs.map((item) => (
        <button
          onClick={() => setTimeFunc(item)}
          className={`${
            timeFunc === item ? 'bg-fire text-midnight' : 'text-white/60'
          } p-4 rounded-full font-semibold duration-300 ease-in-out`}
        >
          {item !== 'pomodoro' ? `${item} break` : item}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
