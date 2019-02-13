import React, { useState } from 'react';

type PositionHook = [Position, () => Promise<Position>];

const useGeolocation = (): PositionHook => {
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

  const handleSuccess = (p: any) => {
    setPosition({
      coords: {
        accuracy: p.coords.accuracy,
        altitude: p.coords.altitude,
        altitudeAccuracy: p.coords.altitudeAccuracy,
        heading: p.coords.heading,
        latitude: p.coords.latitude,
        longitude: p.coords.longitude,
        speed: p.coords.speed
      },
      timestamp: p.timestamp
    });

    return Promise.resolve(position);
  };

  const getCurrentPosition = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const getPosition = () => {
    return getCurrentPosition().then(handleSuccess);
  };

  return [position, getPosition];
};

export default useGeolocation;