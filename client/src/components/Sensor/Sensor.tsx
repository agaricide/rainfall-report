import React, { useState } from 'react';
import { SensorData, RainfallInterval } from '../../rainfall/types';
import Interval from './Interval';
import './Sensor.css';

const intervals: RainfallInterval[] = ['sixHours', 'oneDay', 'sevenDays', 'thirtyDays', 'pastYear'];

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
        {intervals.map(i => <Interval interval={i} onClick={setInterval}/>)}
      </ul>
    </div>
  );
};

export default Sensor;