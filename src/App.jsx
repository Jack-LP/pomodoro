import React, { useState } from 'react';
import Heading from './components/Heading';
import Tabs from './components/Tabs';
import Clock from './components/Clock';

const App = () => {
  const [timeFunc, setTimeFunc] = useState('pomodoro');
  const [isTiming, setIsTiming] = useState(false);

  return (
    <div className='bg-plum text-white h-screen w-screen font-kumbh flex flex-col items-center py-8 gap-8'>
      <Heading />
      <Tabs timeFunc={timeFunc} setTimeFunc={setTimeFunc} />
      <Clock isTiming={isTiming} setIsTiming={setIsTiming} />
    </div>
  );
};

export default App;
