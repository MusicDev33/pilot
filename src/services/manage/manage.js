import axios from 'axios';
import { token } from 'token';

const config = {
  headers: {
    'kbl-token': token,
    'Access-Control-Allow-Origin': 'http://localhost:3050'
  }
}

export const updateSite = (siteName) => {
  const body = {
    site: siteName
  }

  return axios.post('http://bioinfocore.usu.edu/api/webmanage/update', body, config)
}
