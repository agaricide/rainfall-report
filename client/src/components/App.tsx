import React, { useEffect, useState } from 'react';
import CTA from './CTA/CTA';
import Sensor from './Sensor/Sensor';
import useGeolocation from './useGeolocation';
import { fetchRainfallReport } from '../rainfall/fetchReport';
import { findNearestSensor } from '../rainfall/findNearestSensor';
import { SensorData } from '../rainfall/types';
import Header from './Header/Header';
import About from './About/About';
import Footer from './Footer/Footer';
import './App.css';
import usePicoRouter, { Routes } from './usePicoRouter';

const App = () => {
  const [route, setRoute] = usePicoRouter({ default: 'find' });
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
    setRoute('sensor');
  };

  const sensor = findNearestSensor(position.coords, sensors);
  if (sensor !== nearest) setNearest(sensor);

  const routes: Routes = {
    sensor: <Sensor {...nearest}></Sensor>,
    find: <CTA onClick={handleClick}></CTA>,
    about: <About></About>
  };

  return (
    <div className='app'>
      <div className='gutter'>
        <Header goTo={setRoute}></Header>
        <div className='content'>
          {routes[route]}
        </div>
        <Footer coords={position.coords}></Footer>
      </div>
    </div>
  );
};

export default App;