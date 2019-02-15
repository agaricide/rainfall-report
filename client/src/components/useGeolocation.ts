import React, { useState } from 'react';

const defaults: PositionOptions = {
  timeout: 1000 * 60 * 10,
  enableHighAccuracy: true
};

const useGeolocation = (): [Position, () => Promise<Position>] => {
  const [position, setPosition] = useState<Position>({
    coords: {
      accuracy: 0,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: 0,
      longitude: 0,
      speed: null
    },
    timestamp: 0
  });

  const getCurrentPosition = (options: PositionOptions = {}) => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, { ...options, ...defaults });
  });

  const getPosition = async () => {
    const current = await getCurrentPosition() as Position;
    setPosition(current);
    return position;
  };

  return [position, getPosition];
};

export default useGeolocation;