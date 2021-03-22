import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import AdminService from '../../services/admin-service'
import AdminNavigation from '../../components/AdminComponents/AdminNavigation'

class ListOfManagersScreen extends Component {
    constructor(props){
        super(props);
        this.reloadManagerList =  this.reloadManagerList.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        
        this.state={
            managers:[],
            message:null,
            loading:false
        }
        // "id": 2,
        // "firstName": "Sun",
        // "middleName": "P",
        // "lastName": "Info",
        // "email": "sun@gmail.com",
        // "address": {
        //     "city": "Pune",
        //     "state": "MH",
        //     "pincode": "411108"
        // },
        // "count": 2
    }

    componentDidMount (){
        this.reloadManagerList();
    }

    reloadManagerList(){
        AdminService.fetchManagers()
        .then((res) => {
            this.setState({managers: res})
            console.log(this.state.managers);
        });
    }

    handleDelete(manager) {
        this.setState({
            message: "",
            loading: true
          });

          AdminService.deleteManager(manager.id).then(
            () => {
              alert("Manager removed Successfully !!");
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
               
                <h4 style= {{color:"blue"}} className="text-center" id ="admin_manager_details_header" >Manager Details </h4>
                <div className="align-self-center">
                <table className="table  table-hover "  id="admin_manager_list_table">
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
                            <th>Agent's Count </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.managers.map(
                                manager => 
                                    <tr className = "table-light">
                                        <td>{manager.id}</td>
                                        <td>{manager.firstName}</td>
                                        <td>{manager.middleName}</td>
                                        <td>{manager.lastName}</td>
                                        <td>{manager.email}</td>
                                        <td>{manager.address.city}</td>
                                        <td>{manager.address.state}</td>
                                        <td>{manager.address.pincode}</td>
                                        <td>{manager.count}</td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => {this.handleDelete(manager)}}>Remove</button></td>
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

export default ListOfManagersScreen;