import { Component } from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import AdminService from '../../services/admin-service'
import AdminNavigation from '../../components/AdminComponents/AdminNavigation'

class ShowPolicyScreen extends Component{
    constructor(props){
        super(props);
        
        this.state={
            policies:[],
            message:null,
            loading:false,
            uin:0
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.reloadPolicyList =  this.reloadPolicyList.bind(this);

        //"uin":5, 
        //"commence_date":"2017-10-05",
        //"description":"This is a new policy",
        //"policy_name":"Policy2",
        //"sum_assured":350000
    }

    componentDidMount (){
        this.reloadPolicyList();
    }

    reloadPolicyList(){
        AdminService.fetchPolicies()
        .then((res) => {
            this.setState({policies: res})
            console.log(this.state.policies);
        });
    }

    handleDelete(policy) {
        this.setState({
            message: "",
            loading: true
          });

          AdminService.deletePolicy(policy.uin).then(
            (res) => {
              alert("Policy Withdraw Successfull !!");
              window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage
              });
            }
          );
    }

    render() {
        return(
            <div>
                <Header />
                <Navigation />  
                <AdminNavigation/>
               
                <h4 style= {{color:"blue"}} className="text-center" id ="admin_agent_details_header" >Policy Details </h4>
                <div className="align-self-center">
                <table className="table  table-hover "  id="admin_agent_list_table">
                    <thead className="bg-primary">
                        <tr>
                            <th>UIN</th>
                            <th>Commence Date</th>
                            <th>Description </th>
                            <th>Policy Name</th>
                            <th>Sum Assured</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.policies.map(
                                policy => 
                                    <tr className = "table-light">
                                        <td>{policy.uin}</td>
                                        <td>{policy.commenceDate}</td>
                                        <td>{policy.description}</td>
                                        <td>{policy.policyName}</td>
                                        <td>{policy.sumAssured}</td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => {this.handleDelete(policy)}}>Withdraw</button></td>
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

export default ShowPolicyScreen