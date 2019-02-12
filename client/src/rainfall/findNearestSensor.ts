import { Sensor } from './types';

export function findNearestSensor(coords: { latitude: number, longitude: number }, sensors: Sensor[]) {
    const closest = { sensor: sensors[0], distance: Infinity };

    sensors.forEach(sensor => {
      const x = sensor.longitude - coords.longitude;
      const y = sensor.latitude - coords.latitude;
      const distance = Math.sqrt((x * x) + (y * y));
      if (distance < closest.distance) {
        closest.distance = distance;
        closest.sensor = sensor;
      }
    });

    return closest;
}