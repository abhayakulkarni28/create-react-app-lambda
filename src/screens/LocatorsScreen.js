import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Component } from 'react'
import UserService from '../services/user-service'

class LocatorsScreen extends Component {
    constructor(props){
        super(props);
        this.reloadAgentList = this.reloadUserList.bind(this);
        
        this.state = {
            agents: [],
            message: null
            // firstName: "",
            // middleName: "",
            // lastName: "",
            // email: "",
            // mobile: "",
            // city: ""
        }
    }

    componentDidMount() {
        this.reloadAgentList();
    }

    reloadUserList() {
        UserService.fetchAgents()
            .then((res) => {
                this.setState({agents: res})
                console.log(this.state.agents);
            });
    }

  render() {
    return(
    <div >
        <Header />
        <Navigation />
        <h2 style={{marginTop:"3%"} , {color:"blue"}}className="text-center">Locator Details</h2>
        <table style={{marginTop:"2%"}} className="table  table-hover  container">
        <thead className="bg-primary">
            <tr>
                <th >First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
            </tr>
        </thead> 
        <tbody>
            {
                this.state.agents.map(
                    agent =>
                        <tr>
                            <td>{agent.firstName}</td>
                            <td>{agent.middleName}</td>
                            <td>{agent.lastName}</td>
                            <td>{agent.email}</td>
                            <td>{agent.mobile}</td>
                            <td>{agent.city}</td>
                        </tr>
                )
            }
        </tbody>
        </table>
        <Footer/>
    </div>
    )
  }
}

export default LocatorsScreen


