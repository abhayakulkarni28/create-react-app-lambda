import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import ManagerService from '../../services/manager-service'
import ManagerNavigation from '../../components/ManagerComponents/ManagerNavigation'

class PolicyWiseCustomersScreen extends Component {
    constructor(props){
        super(props);
        this.reloadPolicyCustomerList =  this.reloadPolicyCustomerList.bind(this);
        this.state={
            policies:[],
            message:null,
            loading:false
        }
        // "policyName": "Policy6",
        // "count": 1,
        // "uin": 6
    }
        
        componentDidMount (){
            this.reloadPolicyCustomerList();
        }
    
        reloadPolicyCustomerList(){
            
            ManagerService.fetchPolicyCustomerDetails()
            .then((res) => {
                this.setState({policies: res})
                console.log(this.state.policies);
            });
        }

        render() {
            return(
                <div>
                    <Header />
                    <Navigation />  
                    <ManagerNavigation/>
                   
                    <h4 style= {{color:"blue"}} className="text-center" id ="admin_agent_details_header" >Policywise customer Details </h4>
                    <div className="align-self-center">
                    <table className="table  table-hover "  id="admin_agent_list_table">
                        <thead className="bg-primary">
                            <tr>
                                <th>UIN</th>
                                <th>Policy Name</th>
                                <th>Customer Policy Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.policies.map(
                                    policy => 
                                        <tr className = "table-light">
                                            <td>{policy.uin}</td>
                                            <td>{policy.policyName}</td>
                                            <td>{policy.count}</td>    
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
    
export default PolicyWiseCustomersScreen;
