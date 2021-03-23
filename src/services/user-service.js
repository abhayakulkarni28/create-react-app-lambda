import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://cors-everywhere-me.herokuapp.com/http://licportal-env.eba-9zwc5tbn.us-east-2.elasticbeanstalk.com/';
//const API_URL = 'http://localhost:8080/';
class UserService {
  // getPublicContent() {
  //   return axios.get(API_URL + 'all');
  // }

  getCustomerBoard() {
    return axios.get(API_URL + 'cust', { headers: authHeader() });
  }

  getAgentBoard() {
    return axios.get(API_URL + 'agent', { headers: authHeader() });
  }

  getManagerBoard() {
    return axios.get(API_URL + 'manager', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  
  fetchAgents(){
    return axios.get(API_URL + 'locator/list' )
    .then(response => {
      return response.data;
    }); 
  }
}

export default new UserService();
