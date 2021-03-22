import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://licportal-env.eba-2iauvd5j.us-east-2.elasticbeanstalk.com/";
//const API_URL = "http://localhost:8080/manager/";
class ManagerService {
    getCurrentUser() {
      console.log(JSON.parse(localStorage.getItem('user')))
      return JSON.parse(localStorage.getItem('user'));
    }

  addNewAgent(managerId,firstName, middleName, lastName, email, dob, gender, edQual) {
    return axios.post(API_URL + 'add_new_agent/'+managerId, {
      firstName, 
      middleName, 
      lastName, 
      email, 
      dob, 
      gender, 
      edQual
    }, 
    {
      headers: authHeader()
    })
    .then(response => {
      return response.data;
    })
  }

    fetchComplaints() {
      return axios.get(API_URL + "show_complaints", {headers: authHeader()})
      .then (response => {
        return response.data;
      })
    }

    settleComplaint(complaintId, complaintStatus) {
      return axios.put(API_URL + "update_complaint/" + complaintId, {
        complaintStatus
      }, {
        headers: authHeader()
      })
      .then(response => {
        return response.data;
      })
    }

    getComplaintReport() {
      return axios.get(API_URL + "report/cust_complaint", {headers: authHeader()})
      .then(response => {
        console.log(response.data);
        return response.data;
      })
    }

    fetchAgents(managerId){
      return axios.get(API_URL+"report/agent_policy/"+managerId, {headers: authHeader()})
      .then (response => {
        return response.data;
      })
    }

    deleteAgent(agentId){
      return axios.delete(API_URL+"remove_agent/"+agentId, {headers: authHeader()})
      .then (response => {
        return response.data;
      })
    }

    fetchPolicyCustomerDetails( ){
      return axios.get(API_URL + "report/policy_cust" , {headers: authHeader()})
      .then(response =>{
        return response.data;
      })
    }

    fetchClaims() {
      return axios.get(API_URL + "show_claims", {headers: authHeader()}) 
      .then(response => {
        return response.data;
      })
    }
  
    settleClaim(claimId, claimStatus) {
      return axios.put(API_URL + "update_claim/" + claimId, {
        claimStatus
      }, {
        headers: authHeader()
      })
      .then(response => {
        return response.data;
      })
    }
  
    getClaimReport() {
      return axios.get(API_URL + "report/cust_claim", {headers: authHeader()})
      .then(response => {
        console.log(response.data);
        return response.data;
      })
    }

    
    fetchPolicyCustomerDetails( ){
      return axios.get(API_URL + "report/policy_cust" , {headers: authHeader()})
      .then(response =>{
        return response.data;
      })
    }
  }
  
  export default new ManagerService();