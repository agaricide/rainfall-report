import React from 'react';
import { RainfallInterval } from '../../rainfall/types';
import { startCase } from 'lodash';

interface IntervalProps {
  onClick: Function;
  interval: RainfallInterval;
}

const format = (s: string) => startCase(s).toLowerCase();

const Interval = (props: IntervalProps) => {
  return (
    <li onClick={() => props.onClick(props.interval)}>
      {format(props.interval)}
    </li>
  );
};

export default Interval;