import React, { FunctionComponent, useState } from 'react';
import { SensorData, RainfallInterval } from '../../rainfall/types';
import { startCase } from 'lodash';

interface Props {
  onClick: Function;
  interval: RainfallInterval;
}

const Interval: FunctionComponent<Props> = (props: Props) => {

  const format = (s: string) => startCase(s).toLowerCase();

  return (
    <li onClick={props.onClick(props.interval)}>
      {format(props.interval)}
    </li>
  );
};

export default Interval;