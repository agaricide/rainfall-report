import React from 'react';
import { RainfallInterval } from '../../rainfall/types';
import { startCase } from 'lodash';

interface IntervalProps {
  onClick: Function;
  interval: RainfallInterval;
  display: string;
}

const Interval = (props: IntervalProps) => {
  return (
    <li onClick={() => props.onClick(props.interval)}>
      {props.display}
    </li>
  );
};

export default Interval;