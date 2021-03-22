import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://licportal-env.eba-2iauvd5j.us-east-2.elasticbeanstalk.com/";
class AdminService {
    fetchCustomers(){
        return axios.get(API_URL + "admin/list_cust", {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }

    fetchAgents(){
        return axios.get(API_URL + "admin/list_agent", {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }

    fetchManagers(){
        return axios.get(API_URL + "admin/list_managers", {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }

    addNewPolicy(policyName, description, commenceDate, sumAssured) {
        return axios.post(API_URL + 'admin/add_policy', {
          policyName, 
          description, 
          commenceDate, 
          sumAssured
        }, 
        {
          headers: authHeader()
        })
        .then(response => {
          return response.data;
        })
    }
    
    addNewManager(firstName, middleName, lastName, email, dob, gender, edQual) {
        return axios.post(API_URL + 'admin/add_new_manager', {
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

    deleteManager(managerId){
        return axios.delete(API_URL + "admin/remove_manager/"+managerId,{headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }

    fetchPolicies(){
        return axios.get(API_URL + "show_policies", {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }

    deletePolicy(uin){
        return axios.delete(API_URL + "admin/withdraw_policy/" +uin, {headers: authHeader()})
        .then (response => {
            return response.data;
        })
    }
}

export default new AdminService();