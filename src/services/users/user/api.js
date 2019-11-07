import axios from 'axios';
import Http from 'utils/Http';

class UserAPI {
  static URL = `${process.env.REACT_APP_BACKEND_API}/users`;

  static getUser(userId) {
    return Http.callAPI(() => axios.get(`${this.URL}/${userId}`));
  }
}

export default UserAPI;
