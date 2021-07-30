import axios from 'axios';

const token = localStorage.getItem('token');

export const instance = () => {
  const data = axios.create({
    baseURL: 'http://localhost:8010/api/v1',
    headers: {
      authorization: token,
    },
    timeout: 10000000,
  });

  return data;
};