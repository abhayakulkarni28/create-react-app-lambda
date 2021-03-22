import { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ManagerNavigation from '../../components/ManagerComponents/ManagerNavigation';
import ManagerService from '../../services/manager-service';

export default class GrievanceSettlementScreen extends Component{
  constructor(props){
    super(props);
    this.updateResolve = this.updateResolve.bind(this);
    this.updateReject = this.updateReject.bind(this);
    this.reloadComplaintList = this.reloadComplaintList.bind(this);

    this.state={
      message:null,
      loading:false,
      complaints:[],
      complaintId: 0
    } 
  }

  componentDidMount (){
    this.reloadComplaintList();
  }

  reloadComplaintList() {
    ManagerService.fetchComplaints()
    .then((res) => {
      this.setState({complaints: res})
    })
  }

  updateResolve(complaint) {
    this.setState({
      message: "",
      loading: true
    });

    ManagerService.settleComplaint(complaint.complaintId, "RESOLVED").then (
      (res) => {
        alert("Complaint Settled successfully");
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

  updateReject(complaint) {
    this.setState({
      message: "",
      loading: true
    });

    ManagerService.settleComplaint(complaint.complaintId, "DISMISSED").then (
      (res) => {
        alert("Complaint Settled successfully");
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
        <h1 id="grievance_settle_title">Grievance Settlement</h1>
        <div className="align-self-center">
        <table className="table table-hover" id="grievance_settle_table">
          <thead className="bg-primary">
            <tr>
                <th>Complaint ID</th>
                <th>Complaint Type</th>
                <th>Description</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.complaints.map(
                complaint => 
                <tr className = "table-light">
                  <td>{complaint.complaintId}</td>
                  <td>{complaint.complaintType}</td>
                  <td>{complaint.description}</td>
                  <td>{complaint.date}</td>
                  <td>{complaint.complaintStatus}</td>
                  <td>
                    <button type="button" className="btn btn-outline-success" style={{marginRight: "3%"}} onClick={() => {this.updateResolve(complaint)}}>Resolve</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => {this.updateReject(complaint)}}>Dismiss</button>
                  </td>
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