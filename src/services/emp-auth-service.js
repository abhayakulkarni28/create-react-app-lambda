import axios from "axios";
import authHeader from "../services/auth-header"

 const API_URL = "https://cors-everywhere-me.herokuapp.com/http://licportal-env.eba-9zwc5tbn.us-east-2.elasticbeanstalk.com/";

//const API_URL = "http://localhost:8080/";
class EmpAuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
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

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  
}

export default new EmpAuthService();
