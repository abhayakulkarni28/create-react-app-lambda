import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import ManagerService from '../../services/manager-service'
import ManagerNavigation from '../../components/ManagerComponents/ManagerNavigation'

class ListOfAgentsScreen extends Component {
    constructor(props){
        super(props);
        this.reloadAgentList =  this.reloadAgentList.bind(this);
        this.state={
            agents:[],
            message:null,
            loading:false
        }
        // "id": 5,
        // "firstName": "shekhar",
        // "middleName": "P",
        // "lastName": "Info",
        // "email": "shekhar@gmail.com",
        // "address": {
        //     "city": "Pune",
        //     "state": "MH",
        //     "pincode": "411108"
        // },
        // "count": 0
    }

    componentDidMount (){
        this.reloadAgentList();
    }

    reloadAgentList(){
        const manager = ManagerService.getCurrentUser();
        ManagerService.fetchAgents(manager.id)
        .then((res) => {
            this.setState({agents: res})
            console.log(this.state.agents);
        });
    }

    handleDelete(agent) {
        this.setState({
            message: "",
            loading: true
          });

          ManagerService.deleteAgent(agent.id).then(
            () => {
              alert("Agent removed Successfully !!");
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
                <ManagerNavigation/>
               
                <h4 style= {{color:"blue"}} className="text-center" id ="admin_agent_details_header" >Agent Details </h4>
                <div className="align-self-center">
                <table className="table  table-hover "  id="admin_agent_list_table">
                    <thead className="bg-primary">
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>City </th>
                            <th>State </th>
                            <th>Pincode </th>
                            <th>Customer Policy Count </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.agents.map(
                                agent => 
                                    <tr className = "table-light">
                                        <td>{agent.id}</td>
                                        <td>{agent.firstName}</td>
                                        <td>{agent.middleName}</td>
                                        <td>{agent.lastName}</td>
                                        <td>{agent.email}</td>
                                        <td>{agent.address.city}</td>
                                        <td>{agent.address.state}</td>
                                        <td>{agent.address.pincode}</td>
                                        <td>{agent.count}</td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => {this.handleDelete(agent)}}>Remove</button></td>

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

export default ListOfAgentsScreen;