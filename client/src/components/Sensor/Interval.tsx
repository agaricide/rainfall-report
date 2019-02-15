import React from 'react';
import { RainfallInterval } from '../../rainfall/types';

interface IntervalProps {
  onClick: Function;
  interval: RainfallInterval;
  display: string;
}

const Interval = React.memo((props: IntervalProps) => {
  return (
    <li onClick={() => props.onClick(props.interval)}>
      {props.display}
    </li>
  );
});

export default Interval;