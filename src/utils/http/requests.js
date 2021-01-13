import axios from 'axios';
import { handleHttpError } from './handleHttpError';

function makeHttpRequest(apiCall) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await apiCall();
      resolve(data.data);
    } catch (e) {
      reject(handleHttpError(e));
    }
  });
}

export function getRequest(path, options = {}) {
  return makeHttpRequest(() => axios.get(path, options));
}

export function postRequest(path, data, options = {}) {
  return makeHttpRequest(() => axios.post(path, data, options));
}

export function putRequest(path, data, options = {}) {
  return makeHttpRequest(() => axios.put(path, data, options));
}

export function deleteRequest(path, options = {}) {
  return makeHttpRequest(() => axios.delete(path, options));
}
