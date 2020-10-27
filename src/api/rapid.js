import axios from 'axios';
import APIKEY from './keys';

export default axios.create({
  baseURL: 'https://currency-exchange.p.rapidapi.com',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    'x-rapidapi-key': APIKEY,
    useQueryString: true,
  }
});