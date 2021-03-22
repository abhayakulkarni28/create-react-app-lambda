import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";

class CustomerComplaintStatusScreen  extends Component {
    constructor(props){
        super(props);
        this.reloadComplaints = this.reloadComplaints.bind(this);
        this.state={
            message:null,
            ComplaintDetails:[]
        }
        // "complaintId": 1,
        // "complaintType": "POLICY",
        // "description": "this is a complaint",
        // "date": "2015-11-04",
        // "complaintStatus": "INPROCESS"
    }

    componentDidMount (){
        this.reloadComplaints();
    }

    reloadComplaints(){
        const customer = CustomerService.getCurrentUser();
        CustomerService.fetchComplaintStatus(customer.id)
        .then((res) => {
            this.setState({
                ComplaintDetails : res
            }) 
        })
    }

    render() {
        return(
            <div>
                <Header />
                <Navigation />  
                <CustomerNavigation/>
                <h4 style= {{color:"blue"}} className="text-center" id ="admin_agent_details_header" >Complaint Details </h4>
                <div className="align-self-center">
                <table className="table  table-hover "  id="admin_agent_list_table">
                    <thead className="bg-primary">
                        <tr>
                            <th>Id</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Complaint Status</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ComplaintDetails.map(
                                complaint => 
                                    <tr className = "table-light">
                                        <td>{complaint.complaintId}</td>
                                        <td>{complaint.complaintType}</td>
                                        <td>{complaint.description}</td>
                                        <td>{complaint.date}</td>
                                        <td>{complaint.complaintStatus}</td>
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

export default CustomerComplaintStatusScreen;