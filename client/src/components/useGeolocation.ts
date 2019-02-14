import React, { useState } from 'react';

const options: PositionOptions = {
  timeout: 1000 * 60 * 10
};

const getCurrentPosition = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject, options);
});

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

  // Must manually copy each propety– Position is read-only for privacy
  // reasons, therefore it breaks Object.assign and Spread Operator.
  const copyPosition = (p: Position) => {
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
  };

  const getPosition = async () => {
    const current = await getCurrentPosition() as Position;
    copyPosition(current);
    return position;
  };

  return [position, getPosition];
};

export default useGeolocation;