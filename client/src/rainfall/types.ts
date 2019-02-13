export interface SensorData {
    name?: string;
    latitude: number;
    longitude: number;
    sixHours?: number;
    oneDay?: number;
    sevenDays?: number;
    thirtyDays?: number;
    pastYear?: number;
    lastModifed?: string;
}

export type RainfallInterval = 'sixHours' | 'oneDay' | 'sevenDays' | 'thirtyDays' | 'pastYear';

export function toSensors(rows: any[]): SensorData[] {
    console.log(rows);
    return rows.map(row => fromReportRow(row));
}

function fromReportRow(row: any): SensorData {
    return {
        name: row.station_name,
        latitude: parseFloat(row.latitude),
        longitude: parseFloat(row.longitude),
        sixHours: parseFloat(row['_6_hours']),
        oneDay: parseFloat(row['_1_day']),
        sevenDays: parseFloat(row['_7_days']),
        thirtyDays: parseFloat(row['_30_days']),
        pastYear: parseFloat(row['past_year']),
        lastModifed: row.update_time
    };
}