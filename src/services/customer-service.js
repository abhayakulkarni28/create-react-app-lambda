import axios from "axios";
import authHeader from "./auth-header";
 const API_URL = "http://licportal-env.eba-2iauvd5j.us-east-2.elasticbeanstalk.com/cust/";
//const API_URL = "http://localhost:8080/cust/";
class CustomerService {
    fetchCustomerPolicyStatus(custId){
        return axios.get(API_URL + "policy_status/"+custId, {headers: authHeader()})
        .then (response => {
          return response.data;
        })
    }
    
    getCurrentUser() {
        console.log(JSON.parse(localStorage.getItem('user')))
        return JSON.parse(localStorage.getItem('user'));
    }
  
    fetchComplaintStatus(customerId) { 
        return axios.get(API_URL + "complaint_status/"+customerId, {headers: authHeader()})
        .then (response => {
          return response.data;
        })
    }

    fetchClaimHistory(customerId){
        console.log("customer id :"+customerId)
        return axios.get(API_URL+"claim_history/"+customerId, {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }
    fetchClaimStatus(customerId){
        console.log("customer id :"+customerId)
        return axios.get(API_URL+"claim_status/"+customerId, {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }
    fetchPremiumStatements(customerId){
        console.log("customer id :"+customerId)
        return axios.get(API_URL+"premium_stmt/"+customerId, {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }

    applyForClaim(custId,claimType,date,policyNo ){
        console.log("customer id :"+custId)
        return axios.post(API_URL+"apply_claim/"+custId, 
        {
            claimType,date,policyNo
        }
        ,{headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }

    payPremium(policyId){
        console.log("Policy id :"+policyId)
        return axios.get(API_URL+"premium_payment/"+policyId, {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }
    policyRevival(policyNoToRevive){
        // console.log("Policy no :"+policyNoToRevive)
        return axios.get(API_URL+"policy_revival/"+policyNoToRevive, {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }
}
export default new CustomerService()