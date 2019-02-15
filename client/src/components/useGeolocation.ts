import React, { useState } from 'react';

type GeolocationHook = [Position, (options?: PositionOptions) => Promise<Position>];

const defaults: PositionOptions = {
  timeout: 1000 * 60 * 10,
  enableHighAccuracy: true
};

const useGeolocation = (): GeolocationHook => {
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

  const getCurrentPosition = (options: PositionOptions) => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, { ...options, ...defaults });
  });

  const getPosition = async (options: PositionOptions = {}) => {
    const current = await getCurrentPosition(options) as Position;
    setPosition(current);
    return position;
  };

  return [position, getPosition];
};

export default useGeolocation;