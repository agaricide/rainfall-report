import axios from 'axios';

const POLL_INTERVAL = 5 * 60 * 1000;
const REPORT_URI = 'https://www.dallasopendata.com/resource/xm9r-xkdu.json';

let cached = {};

const fetchRainfallReport = async () => {
  const result = await axios(REPORT_URI);
  cached = result.data;
};

const pollRainfall = () => {
  fetchRainfallReport();
  setInterval(() => {
    fetchRainfallReport();
  }, POLL_INTERVAL);
};

export {
  cached,
  pollRainfall
}