class Http {

  static handleHttpError(error) {
    return error.response ? error.response.data : 'Something Failed. Try again?';
  }

  static callAPI(apiCall) {
    return new Promise(async (resolve, reject) => {
      let apiCallFailed = false;

      const data = await apiCall()
        .then(response => response.data)
        .catch((error) => {
          apiCallFailed = true;
          return this.handleHttpError(error);
        });

      if (apiCallFailed) {
        reject(data);
      } else {
        resolve(data);
      }
    });
  }
}

export default Http;
