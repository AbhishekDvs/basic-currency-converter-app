import {useEffect, useState} from 'react';
import rapid from '../api/rapid';

export default () => {
  const [results, setResults] = useState([]);
  const listApi = async () => {
    const response = await rapid.get('/listquotes');
    setResults(response.data);
  };

  useEffect(() => {
    listApi();
  }, []);

  return [results];
};
