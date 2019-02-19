import React, { useState } from 'react';
import { SensorData, RainfallInterval } from '../../rainfall/types';
import Interval from './Interval';
import './Sensor.css';
import gps from '../../icons/gps/gps-2.svg';

const Sensor = (props: SensorData) => {
  const [interval, setInterval] = useState<RainfallInterval>('sevenDays');

  const goToPoint = (latitude: number, longitude: number) => {
    const url = `https://www.google.com.sa/maps/search/${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <main className='report'>
      <div className='location' onClick={() => goToPoint(props.latitude, props.longitude)}>
        <span className='point'>
          <img src={gps} />
        </span>
        {props.name}
      </div>
      <div className='rainfall'>
        {props[interval] || '0.0'}<span className='units'> in</span>
      </div>
      <ul className='intervals wide'>
        <Interval display={'6hr'} interval={'sixHours'} onClick={setInterval} />
        <Interval display={'24hr'} interval={'oneDay'} onClick={setInterval} />
        <Interval display={'7d'} interval={'sevenDays'} onClick={setInterval} />
        <Interval display={'1mo'} interval={'thirtyDays'} onClick={setInterval} />
        <Interval display={'12mo'} interval={'pastYear'} onClick={setInterval} />
      </ul>
    </main>
  );
};

export default Sensor;