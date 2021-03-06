import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:9000/Api/v1/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'products');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
