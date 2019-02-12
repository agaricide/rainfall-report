import React, { useState, useEffect } from 'react';
import { Sensor, toSensors, RainfallInterval } from './rainfall/types';
import { findNearestSensor } from './rainfall/findNearestSensor';
import axios from 'axios';
import './App.css';

function App() {
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0
  });
  const [interval, setInterval] = useState<RainfallInterval>('sevenDays');
  const [sensor, setSensor] = useState<Sensor>({ ...coords });
  const [rainfallReport, setRainfallReport] = useState<Sensor[]>([]);

  const fetchRainfallReport = async () => {
    const result = await axios('report');
    const sensors = toSensors(result.data);
    setRainfallReport(sensors);
  };

  useEffect(() => {
    fetchRainfallReport();
  }, []);

  const handleClick = () => {
    const onSuccess = (position: Position) => {
      setCoords(position.coords);
      const { sensor } = findNearestSensor(position.coords, rainfallReport);
      setSensor(sensor);
    };
    const onError = (error: PositionError) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  const handleSetInterval = (interval: RainfallInterval) => {
    return () => {
      setInterval(interval);
    }
  }

  return (
    <div className='App'>
      <div className='location'>
        {sensor.name}
      </div>
      <div className='rainfall'>
        {sensor[interval] || '0.0'}<span className='units'> in</span>
      </div>
      <ul className='dates'>
        <li onClick={handleSetInterval('sixHours')}>6 hours</li>
        <li onClick={handleSetInterval('oneDay')}>1 day</li>
        <li onClick={handleSetInterval('sevenDays')}>7 days</li>
        <li onClick={handleSetInterval('thirtyDays')}>30 days</li>
        <li onClick={handleSetInterval('pastYear')}>1 years</li>
      </ul>
      <button onClick={handleClick}>Get nearest sensor</button>
    </div>
  );
}

export default App;