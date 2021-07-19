import axios from 'axios';
import { token } from 'token';

const config = {
  headers: {
    'kbl-token': token
  }
}

export const getDataUsage = () => {
  return axios.get('http://bioinfocore.usu.edu/api/quotas/all', config);
}
