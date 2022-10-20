import React, { useState } from 'react';
import Heading from './components/Heading';
import Tabs from './components/Tabs';

const App = () => {
  const [timeFunc, setTimeFunc] = useState('pomodoro');

  return (
    <div className='bg-plum text-white h-screen w-screen font-kumbh flex flex-col items-center py-8 gap-8'>
      <Heading />
      <Tabs timeFunc={timeFunc} setTimeFunc={setTimeFunc} />
    </div>
  );
};

export default App;
