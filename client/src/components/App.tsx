import React, { useState, useEffect } from 'react';
import { SensorData } from '../rainfall/types';
import { findNearestSensor } from '../rainfall/findNearestSensor';
import { fetchRainfallReport } from '../rainfall/fetchReport';
import Sensor from './Sensor/Sensor';
import CTA from './CTA/CTA';
import './App.css';

const App = () => {
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0
  });
  const [sensors, setSensors] = useState<SensorData[]>([]);
  const [nearest, setNearest] = useState<SensorData>({ ...coords });

  useEffect(() => {
    fetchRainfallReport(setSensors);
  }, []);

  const geoSuccess = (position: Position) => {
    setCoords(position.coords);
    const { sensor } = findNearestSensor(position.coords, sensors);
    setNearest(sensor);
  };

  const geoError = (error: PositionError) => {
    console.log(error);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  };

  const content = (coords.latitude === 0 && coords.longitude === 0)
    ? <CTA onClick={getLocation}></CTA>
    : <Sensor {...nearest}></Sensor>;

  return (
    <div className='App'>
      {content}
    </div>
  );
};

export default App;