import axios from 'axios';

export const instance = axios.create({
  baseURL: 'baseurl',
  headers: {
    'Content-type': 'application/json',
  },
});
export function getReport() {
  return instance.get('/report/common');
}
