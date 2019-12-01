import axios from 'axios';

function handleHttpError(error) {
  const genericErrorMessage = 'Something Failed. Try again?';

  if (error.response && error.response.data) {
    return error.response.data.errorMessage || genericErrorMessage;
  }

  return genericErrorMessage;
}

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

export function postRequest(path, options = {}) {
  return makeHttpRequest(() => axios.post(path, options));
}

export function putRequest(path, options = {}) {
  return makeHttpRequest(() => axios.put(path, options));
}

export function deleteRequest(path, options = {}) {
  return makeHttpRequest(() => axios.delete(path, options));
}
