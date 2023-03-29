import data from '@/constants/data.json'

const response = data.response.body.items;
const stationArray = response.map((item) => item.stationName).sort();

export default stationArray