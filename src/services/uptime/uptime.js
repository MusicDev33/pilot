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
