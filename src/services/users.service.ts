import httpClient from '@/utils/httpClient';
// import axios from 'axios';
export const getUsers = async () => {
  const { data } = await httpClient.get('/user');
  // const { data } = await axios.get('http://localhost:8000/api/items');
  return data;
};
