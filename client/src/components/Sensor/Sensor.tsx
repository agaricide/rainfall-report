import React, { useState } from 'react';
import { SensorData, RainfallInterval } from '../../rainfall/types';
import Interval from './Interval';
import './Sensor.css';

const Sensor = (props: SensorData) => {
  const [interval, setInterval] = useState<RainfallInterval>('sevenDays');

  return (
    <div className='report'>
      <div className='location'>
        {props.name}
      </div>
      <div className='rainfall'>
        {props[interval]}<span className='units'> in</span>
      </div>
      <ul className='intervals'>
        <Interval interval='sixHours' onClick={setInterval}/>
        <Interval interval='oneDay' onClick={setInterval}/>
        <Interval interval='sevenDays' onClick={setInterval}/>
        <Interval interval='thirtyDays' onClick={setInterval}/>
        <Interval interval='pastYear' onClick={setInterval}/>
      </ul>
    </div>
  );
};

export default Sensor;