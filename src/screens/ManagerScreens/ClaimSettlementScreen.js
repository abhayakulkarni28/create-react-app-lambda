import { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ManagerNavigation from '../../components/ManagerComponents/ManagerNavigation';
import ManagerService from '../../services/manager-service';

export default class ClaimSettlementScreen extends Component{
  constructor(props){
    super(props);
    this.updateApprove = this.updateApprove.bind(this);
    this.updateReject = this.updateReject.bind(this);
    this.reloadClaimtList = this.reloadClaimList.bind(this);

    this.state={
      message:null,
      loading:false,
      claims:[],
      claimId: 0
    } 
  }

  componentDidMount (){
    this.reloadClaimList();
  }

  reloadClaimList() {
    ManagerService.fetchClaims()
    .then((res) => {
      this.setState({claims: res})
    })
  }

  updateApprove(claim) {
    this.setState({
      message: "",
      loading: true
    });

    ManagerService.settleClaim(claim.claimId, "APPROVED").then (
      (res) => {
        alert("Claim Settled successfully");
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

  updateReject(claim) {
    this.setState({
      message: "",
      loading: true
    });

    ManagerService.settleClaim(claim.claimId, "REJECTED").then (
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
        <h1 id="claim_settle_title">Claim Settlement</h1>
        <div className="align-self-center">
        <table className="table table-hover" id="claim_settle_table">
          <thead className="bg-primary">
            <tr>
                <th>Claim ID</th>
                <th>Claim Type</th>
                <th>Claim Amount</th>
                <th>Date</th>
                <th>Claim Status</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.claims.map(
                claim => 
                <tr className = "table-light">
                  <td>{claim.claimId}</td>
                  <td>{claim.claimType}</td>
                  <td>{claim.claimAmount}</td>
                  <td>{claim.date}</td>
                  <td>{claim.claimStatus}</td>
                  <td>
                    <button type="button" className="btn btn-outline-success" style={{marginRight: "3%"}} onClick={() => {this.updateApprove(claim)}}>Approve</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => {this.updateReject(claim)}}>Reject</button>
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