import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";

class ClaimHistoryScreen extends Component{
    constructor(props){
        super(props)
        this.reloadClaimHistory = this.reloadClaimHistory.bind(this)
        this.state = {
            claims:[],
            message:null,
        }

        // "policyName": "Policy6",
        // "claimType": "BADFAITH",
        // "dueDate": "2015-07-24",
        // "claimAmount": 60000.0,
        // "claimStatus": "REJECTED"        
    }
 
    componentDidMount (){
        this.reloadClaimHistory();
    }

    reloadClaimHistory(){
        const customer = CustomerService.getCurrentUser()
        CustomerService.fetchClaimHistory(customer.id)
        .then((res) => {
            this.setState(
                {
                    claims : res
                }
            )
        })

    }

    render(){
        return(
            <div>
            <Header />
            <Navigation />  
            <CustomerNavigation/>
           
            <h4 style= {{color:"blue"}} className="text-center" id ="admin_agent_details_header" >Claim History </h4>
            <div className="align-self-center">
            <table className="table  table-hover "  id="admin_agent_list_table">
                <thead className="bg-primary">
                    <tr>
                        <th>Policy Name</th>
                        <th>Claim Type</th>
                        <th>Due Date</th>
                        <th>Claim Amount</th>
                        <th>Claim Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.claims.map(
                            claim => 
                                <tr className = "table-light">
                                    <td>{claim.policyName}</td>
                                    <td>{claim.claimType}</td>
                                    <td>{claim.dueDate}</td>
                                    <td>{claim.claimAmount}</td>
                                    <td>{claim.claimStatus}</td>
                                </tr>
                        )
                    }
                </tbody> 
            </table>
            </div>
            <Footer/>
            </div>
        )
    }


}

export default ClaimHistoryScreen