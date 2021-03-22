import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";

class CustomerClaimStatusScreen  extends Component {
    constructor(props){
        super(props);
        this.reloadClaims = this.reloadClaims.bind(this);
        this.state={
            message:null,
            claims:[]
        }
        // "policyName": "Policy5",
        // "claimType": "BADFAITH",
        // "dueDate": "2021-03-20",
        // "claimAmount": 5353.0,
        // "claimStatus": "INPROCESS"
    }
    
    componentDidMount (){
        this.reloadClaims();
    }

    reloadClaims(){
        const customer = CustomerService.getCurrentUser()
        CustomerService.fetchClaimStatus(customer.id)
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
           
            <h4 style= {{color:"blue"}} className="text-center" id ="admin_agent_details_header" >Claim Status </h4>
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

export default CustomerClaimStatusScreen;