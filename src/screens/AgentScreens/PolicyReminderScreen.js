import { Component } from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import AgentService from '../../services/agent-service'
import AgentNavigation from '../../components/AgentComponents/AgentNavigation'

class PolicyReminderScreen extends Component{
    constructor(props){
        super(props);
        this.reloadPolicies = this.reloadPolicies.bind(this);
        
        this.state={
          message:null,
          policies: []
        }
    }

    componentDidMount() {
      this.reloadPolicies();
    }

    reloadPolicies() {
      AgentService.policyReminder()
      .then((res) => {
        this.setState({
          policies: res
        })
      });
    }

    render() {
        const { Policies } = this.state;
        return(
            <div>
                <Header />
                <Navigation />  
                <AgentNavigation/>
                <h4 className="text-center" id ="policy_reminder_title" >Policy Due Date Reminder</h4>
                <div className="align-self-center">
                {
                  <table className="table table-hover" id="customer_policy_details_table">
                    <thead className="bg-primary">
                      <tr>
                        <th scope="col">Customer ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Policy No</th>
                        <th scope="col">Policy Name</th>
                        <th scope="col">Premium</th>
                        <th scope="col">Next Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.policies.map(
                        policy => 
                        <tr className = "table-light">
                          <th>{policy.id}</th>
                          <td>{policy.firstName}</td>
                          <td>{policy.middleName}</td>
                          <td>{policy.lastName}</td>
                          <td>{policy.policyNo}</td>
                          <td>{policy.policyName}</td>
                          <td>{policy.premium}</td>
                          <td>{policy.nextDueDate}</td>
                        </tr>
                        )}
                    </tbody> 
                  </table>
                }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PolicyReminderScreen