import axios from "axios";
import authHeader from "./auth-header";
 const API_URL = "https://cors-everywhere-me.herokuapp.com/http://licportal-env.eba-9zwc5tbn.us-east-2.elasticbeanstalk.com/agent/";
//const API_URL = "http://localhost:8080/agent/";
class AgentService {
  addNewCustomer(agentId, firstName, middleName, lastName, email, dob, gender, edQual, m_status, occupation, annualIncome, passportNo, panNo, UIN, policyName) {
    return axios.post(API_URL + 'add_customer/' + agentId, {
      firstName,
      middleName,
      lastName,
      email,
      dob,
      gender,
      edQual,
      m_status,
      occupation,
      annualIncome,
      passportNo,
      panNo,
      UIN,
      policyName,
    }, {
      headers: authHeader()
    }) 
    .then(response => {
      return response.data;
    })
  }

  addCustomerPolicyDetails(custId, uinNo, premiumMode, annualPremium, regDate, policyDuration) {
    return axios.put(API_URL + "add_customer_policy/" + custId + "/" + uinNo, {
      premiumMode, 
      annualPremium, 
      regDate, 
      policyDuration
    }, {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

  getCustomerPolicyDetails(custId) {
    return axios.get(API_URL + "cust_policy_details/" + custId, 
    {
      headers: authHeader()
    }).
    then (response => {
      return response.data;
    })
  }

  policyReminder() {
    console.log(API_URL + "policy_reminder")
    return axios.get(API_URL + "policy_reminder", 
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

export default new AgentService;