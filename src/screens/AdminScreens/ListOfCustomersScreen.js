import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import AdminService from '../../services/admin-service'
import AdminNavigation from '../../components/AdminComponents/AdminNavigation'
class ListOfCustomersScreen extends Component{
    constructor(props){
        super(props);
        this.reloadCustomerList = this.reloadCustomerList.bind(this);
        this.state = {
            customers:[],
            message:null
            // "id": 1,
            // "firstName": "Nitin",
            // "middleName": "J.",
            // "lastName": "Kudale",
            // "email": "Nitin@gmail.com",
            // "password": "$2a$10$rtsA1sWlxSNWJUTzvPCdRumZJz91by7nipr0jplU4W52SLtN2XvKm",
            // "dob": "2015-03-03",
            // "gender": "MALE",
            // "edQual": "SSC",
            // "mobile": null,
            // "address": {
            //     "city": "Pune",
            //     "state": "MH",
            //     "pincode": "411108"
            // },
            // "m_status": "SINGLE",
            // "occupation": "Teacher",
            // "annualIncome": 800000.0,
            // "passportNo": "poi567865",
            // "panNo": "abc786456"
            }
        }

        componentDidMount() {
            this.reloadCustomerList();
        }

        reloadCustomerList(){
            AdminService.fetchCustomers()
            .then((res) => {
                this.setState({customers: res})
                console.log(this.state.customers);
            });
        }

        render() {
            return(
                <div>
                    <Header />
                    <Navigation />  
                    <AdminNavigation/>
                   
                    <h4 style= {{color:"blue"}} className="text-center" id ="admin_cust_details_header">Customer Details </h4>
                    <div className="align-self-center">
                    <table className="table  table-hover " id="admin_cust_list_table">
                        <thead className="bg-primary">
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>DOB </th>
                                <th>Gender </th>
                                <th>Mobile</th>
                                <th>Passport</th>
                                <th>Pan</th>
                                <th>City Pincode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer => 
                                        <tr className = "table-light">
                                            <td>{customer.id}</td>
                                            <td>{customer.firstName}</td>
                                            <td>{customer.middleName}</td>
                                            <td>{customer.lastName}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.dob}</td>
                                            <td>{customer.gender}</td>
                                            <td>{customer.mobile}</td>
                                            <td>{customer.passportNo}</td>
                                            <td>{customer.panNo}</td>
                                            <td>{customer.address.pincode}</td>
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

export default ListOfCustomersScreen;