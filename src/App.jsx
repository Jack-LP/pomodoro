import React, { useState, useEffect } from 'react';
import Heading from './components/Heading';
import Tabs from './components/Tabs';
import Clock from './components/Clock';
import SettingsModal from './components/SettingsModal';

const defaultTimeSettings = {
  pomodoro: 1200,
  short: 300,
  long: 600,
};

const App = () => {
  const [timeFunc, setTimeFunc] = useState('pomodoro');
  const [isTiming, setIsTiming] = useState(false);
  const [timeSettings, setTimeSettings] = useState(
    JSON.parse(localStorage.getItem('timeSettings')) || defaultTimeSettings
  );
  const [fontSettings, setFontSettings] = useState(
    localStorage.getItem('fontSettings') || 'font-kumbh'
  );
  const [colorSettings, setColorSettings] = useState(
    localStorage.getItem('colorSettings') || 'bg-fire'
  );
  const [soundSettings, setSoundSettings] = useState(
    localStorage.getItem('soundSettings') || 'mute'
  );

  useEffect(() => {
    localStorage.setItem('timeSettings', JSON.stringify(timeSettings));
    localStorage.setItem('fontSettings', fontSettings);
    localStorage.setItem('colorSettings', colorSettings);
    localStorage.setItem('soundSettings', soundSettings);
  }, [fontSettings, colorSettings, timeSettings, soundSettings]);

  return (
    <div
      className={`bg-plum text-white h-screen w-screen ${fontSettings} flex flex-col items-center py-8 gap-8`}
    >
      <Heading />
      <Tabs
        timeFunc={timeFunc}
        setTimeFunc={setTimeFunc}
        colorSettings={colorSettings}
      />
      <Clock
        isTiming={isTiming}
        setIsTiming={setIsTiming}
        timeFunc={timeFunc}
        timeSettings={timeSettings}
        soundSettings={soundSettings}
      />
      <SettingsModal
        timeSettings={timeSettings}
        setTimeSettings={setTimeSettings}
        fontSettings={fontSettings}
        setFontSettings={setFontSettings}
        colorSettings={colorSettings}
        setColorSettings={setColorSettings}
        soundSettings={soundSettings}
        setSoundSettings={setSoundSettings}
      />
    </div>
  );
};

export default App;
