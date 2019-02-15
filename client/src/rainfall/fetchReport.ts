import axios from 'axios';
import { SensorData, toSensors } from './types';

type Callback = (sensors: SensorData[]) => void;

export async function fetchRainfallReport(callback?: Callback): Promise<SensorData[]> {
    const result = await axios('api/report');
    const sensors = toSensors(result.data);
    if (callback) callback(sensors);
    return sensors;
}
