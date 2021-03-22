import axios from "axios";
import authHeader from "./auth-header";
 const API_URL = "http://licportal-env.eba-2iauvd5j.us-east-2.elasticbeanstalk.com/profile_update/";
//const API_URL = "http://localhost:8080/profile_update/";
class ProfileUpdateService{
  empUpdatePassword(id, password, newPassword) {
    return axios.put(API_URL + 'password_details/' + id, {
      password,
      newPassword
    },
    {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

  empUpdateContact(id, mobile, address) {
    return axios.put(API_URL + 'contact_details/' + id, {
      mobile,
      address
    },
    {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

  empUpdatePersonalDetails(id, firstName, middleName, lastName, edQual) {
    return axios.put(API_URL + 'personal_details/' + id, {
      firstName,
      middleName,
      lastName,
      edQual
    }, 
    {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

  custUpdatePassword(id, password, newPassword) {
    return axios.put(API_URL + 'cust_password_details/' + id, {
      password,
      newPassword
    },
    {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

  custUpdateContact(id, mobile, address) {
    return axios.put(API_URL + 'cust_contact_details/' + id, {
      mobile,
      address
    },
    {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

  custUpdatePersonalDetails(id, firstName, middleName, lastName, edQual, m_status, occupation, annualIncome) {
    return axios.put(API_URL + 'cust_personal_details/' + id, {
      firstName,
      middleName,
      lastName,
      edQual,
      m_status, 
      occupation, 
      annualIncome
    }, 
    {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }


}

export default new ProfileUpdateService();