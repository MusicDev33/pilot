import axios from 'axios';

export const getBioinfoUp = () => {
  return axios.get('http://bioinfo.usu.edu');
}

export const getBiocoreUp = () => {
  return axios.get('http://bioinfocore.usu.edu');
}

export const getBioclusterUp = () => {
  return axios.get('http://biocluster.usu.edu');
}

// check if CSS is working
export const getBioinfoCss = () => {
  return axios.get('http://bioinfo.usu.edu/assets/kbl-css/style.css');
}

export const getBiocoreCss = () => {
  return axios.get('http://bioinfocore.usu.edu/public/css/style.css');
}

export const getNodeStatuses = () => {
  return axios.get('http://bioinfocore.usu.edu/api/uptime/nodes');
}

// Various services
const serviceDict = {
  rstudio: 'http://bioinfo.usu.edu/rstudio',
  ganglia: 'http://biocluster.usu.edu/ganglia/',
  rkfe: 'http://bioinfocore.usu.edu/rkfe/',
  raikou: 'http://bioinfocore.usu.edu/raikou/image/magenta.png',
  test: 'http://bioinfo.usu.edu/test'
}

export const getServiceUp = (serviceName) => {
  return axios.get(serviceDict[serviceName]);
}
