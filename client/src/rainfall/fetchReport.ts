import axios from 'axios';

export async function fetchRainfallReport() {
    const result = await axios('report');
    return result.data;
}
