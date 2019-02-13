import { SensorData } from './types';

export function findNearestSensor(coords: Coordinates, sensors: SensorData[]) {
    const nearest = { sensor: sensors[0], distance: Infinity };

    sensors.forEach(sensor => {
      const x = sensor.longitude - coords.longitude;
      const y = sensor.latitude - coords.latitude;
      const distance = Math.sqrt((x * x) + (y * y));
      if (distance < nearest.distance) {
        nearest.distance = distance;
        nearest.sensor = sensor;
      }
    });

    return nearest.sensor;
}