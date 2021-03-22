import { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ManagerNavigation from '../../components/ManagerComponents/ManagerNavigation';
import ManagerService from '../../services/manager-service';

export default class ClaimReportScreen extends Component{
  constructor(props){
    super(props);

    this.state={
      message:null,
      claims_approved: 0,
      claims_rejected: 0,
      claims_inprocess: 0
    } 
  }

  componentDidMount (){
    ManagerService.getClaimReport()
    .then((res) => {
      this.setState({
        claims_approved: res.approvedClaims,
        claims_rejected: res.rejectedClaims,
        claims_inprocess: res.inprocessClaims
      })
    })
  }

  render() {
    return(
      <div>
        <Header />
        <Navigation />  
        <ManagerNavigation/>
        <h1 id="claim_report_title">Claim Report</h1>
          <div className="claim_report_main">
            <div className="row">
              <div className="col">
                <div id="claim_approved_card" className="card text-white bg-success" style={{width: "60%"}}>
                  <h5 style={{textAlign: "center"}} className="card-title">Claims Approved</h5>
                  <h5 style={{textAlign: "center"}} className="card-subtitle">{this.state.claims_approved}</h5>
                </div>
              </div>
              <div className="col">
                <div id="claim_rejected_card" className="card text-white bg-danger" style={{width: "60%"}}>
                  <h5 style={{textAlign: "center"}} className="card-title">Claim Rejected</h5>
                  <h5 style={{textAlign: "center"}} className="card-subtitle">{this.state.claims_rejected}</h5>
                </div>
              </div>
              <div className="col">
                <div id="claim_inprocess_card" className="card text-white bg-info" style={{width: "60%"}}>
                  <h5 style={{textAlign: "center"}} className="card-title">Claims In Process</h5>
                  <h5 style={{textAlign: "center"}} className="card-subtitle">{this.state.claims_inprocess}</h5>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
      </div>
    )
  }
}