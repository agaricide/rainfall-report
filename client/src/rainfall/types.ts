export interface Sensor {
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

export function toSensors(rows: any[]): Sensor[] {
    return rows.map(row => fromReportRow(row));
}

function fromReportRow(row: any): Sensor {
    return {
        name: row.station_name,
        latitude: parseFloat(row.latitude),
        longitude: parseFloat(row.longitude),
        sixHours: parseFloat(row['_6_hours']),
        oneDay: parseFloat(row['_1_day']),
        sevenDays: parseFloat(row['_1_day']),
        thirtyDays: parseFloat(row['_1_day']),
        pastYear: parseFloat(row['_1_day']),
        lastModifed: row.update_time
    };
}