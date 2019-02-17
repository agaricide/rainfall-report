import React from 'react';
import { RainfallInterval } from '../../rainfall/types';

interface IntervalProps {
  onClick: Function;
  interval: RainfallInterval;
  display: string;
}

const Interval = React.memo((props: IntervalProps) => {
  return (
    <li>
      <a onClick={() => props.onClick(props.interval)}>
        {props.display}
      </a>
    </li>
  );
});

export default Interval;