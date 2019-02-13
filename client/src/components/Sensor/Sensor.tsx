import React, { FunctionComponent, useState } from 'react';
import { SensorData, RainfallInterval } from '../../rainfall/types';
import Interval from './Interval';
import './Sensor.css';

type Nullable<T> = T | null;

const Sensor: FunctionComponent<Nullable<SensorData>> = (props: SensorData) => {
  const [interval, setInterval] = useState<RainfallInterval>('sevenDays');

  const handleSetInterval = (interval: RainfallInterval) => {
    return () => {
      setInterval(interval);
    };
  };

  return (
    <div className='report'>
      <div className='location'>
        {props.name}
      </div>
      <div className='rainfall'>
        {props[interval] || '0.0'}<span className='units'> in</span>
      </div>
      <ul className='intervals'>
        <Interval interval='sixHours' onClick={handleSetInterval}/>
        <Interval interval='oneDay' onClick={handleSetInterval}/>
        <Interval interval='sevenDays' onClick={handleSetInterval}/>
        <Interval interval='thirtyDays' onClick={handleSetInterval}/>
        <Interval interval='pastYear' onClick={handleSetInterval}/>
      </ul>
    </div>
  );
};

export default Sensor;