const axios = require('axios');

class ErrorHandler {
  static init(error) {
    return new ErrorHandler(error);
  }
  constructor(error) {
    this.error = error;
  }
  handle() {
    let error = this.error;
    switch(error.code) {
      case 400:
          console.log(`Error with code ${error.code}, ${error.description}`);
        break;
      case 401:
          console.log(`Error with code ${error.code}, ${error.description}`);
        break;
      case 500:
          console.log(`Error with code ${error.code}, ${error.description}`);
        break;
      default:
        console.log('Unknow error');
        break;
    }
  }
}

class HttpClient {
  get(url) {
    return axios.get(url)
      .then((response) => {
         return response;
      })
      .catch(error => {
        ErrorHandler.init(error.response.data).handle();
      })
  }
}

let httpClient = new HttpClient();

httpClient.get('https://httpstat.us/500')
  .then(response => {
    return response;
  })
