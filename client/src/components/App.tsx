import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import CTA from './CTA/CTA';
import Sensor from './Sensor/Sensor';
import useGeolocation from './useGeolocation';
import { fetchRainfallReport } from '../rainfall/fetchReport';
import { findNearestSensor } from '../rainfall/findNearestSensor';
import { SensorData } from '../rainfall/types';
import './App.css';

const App = () => {
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
  };

  const content = (position.timestamp)
    ? <Sensor {...nearest}></Sensor>
    : <CTA onClick={handleClick}></CTA>;

  return (
    <div className='App'>
      {content}
      <ReactJson src={position} />
    </div>
  );
};

export default App;