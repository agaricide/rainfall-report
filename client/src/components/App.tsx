import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import CTA from './CTA/CTA';
import Sensor from './Sensor/Sensor';
import useGeolocation from './useGeolocation';
import { fetchRainfallReport } from '../rainfall/fetchReport';
import { findNearestSensor } from '../rainfall/findNearestSensor';
import { SensorData } from '../rainfall/types';
import Header from './Header/Header';
import About from './About/About';

import './App.css';

const App = () => {
  const [view, setView] = useState<string>('CTA');
  const [position, getPosition] = useGeolocation();
  const [sensors, setSensors] = useState<SensorData[]>([]);
  const [nearest, setNearest] = useState<SensorData>({
    latitude: 0,
    longitude: 0
  });

  useEffect(() => {
    fetchRainfallReport().then(setSensors);
  }, []);

  const handleClick = async () => {
    await getPosition();
    const sensor = findNearestSensor(position.coords, sensors);
    setNearest(sensor);
    setView('Sensor');
  };

  const views: { [key: string]: JSX.Element } = {
    Sensor: <Sensor {...nearest}></Sensor>,
    CTA: <CTA onClick={handleClick}></CTA>,
    About: <About></About>
  };

  return (
    <div className='App'>
      <Header goTo={setView}></Header>
      {views[view]}
    </div>
  );
};

export default App;