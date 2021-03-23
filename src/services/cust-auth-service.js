import axios from "axios";
import authHeader from "./auth-header";

 const API_URL = "https://cors-everywhere-me.herokuapp.com/http://licportal-env.eba-9zwc5tbn.us-east-2.elasticbeanstalk.com/cust/";
//const API_URL = "http://localhost:8080/cust/";
const userObj = JSON.parse(localStorage.getItem('user'));

class CustAuthService {
  login(email, password, dob) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
        dob
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  registerGrievance(complaintType, policyNo, description) {
    return axios
      .post(API_URL + "add_complaint/" + userObj.id, {
        complaintType, 
        policyNo, 
        description
      }, {
        headers: authHeader()
      })
      .then(response => {
        return response.data;
      })
  }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }
  addUser(user) {
    return axios.post(API_URL + "register", user)
    .then(response => {
      return response.data;
    });
  }

  getCurrentUser() {
    console.log(JSON.parse(localStorage.getItem('user')))
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new CustAuthService();
