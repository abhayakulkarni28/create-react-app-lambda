import { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ManagerNavigation from '../../components/ManagerComponents/ManagerNavigation';
import ManagerService from '../../services/manager-service';

export default class GrievanceReportScreen extends Component{
  constructor(props){
    super(props);

    this.state={
      message:null,
      complaint_received: 0,
      complaint_resolved: 0,
      complaint_inproces: 0
    } 
  }

  componentDidMount (){
    ManagerService.getComplaintReport()
    .then((res) => {
      this.setState({
        complaint_received: res.complaintReceived,
        complaint_resolved: res.complaintResolved,
        complaint_inproces: res.complaintInproces
      })
    })
  }

  render() {
    return(
      <div>
        <Header />
        <Navigation />  
        <ManagerNavigation/>
        <h1 id="grievance_report_title">Grievance Report</h1>
          <div className="grievance_report_main">
            <div className="row">
              <div className="col">
                <div id="grievance_received_card" className="card text-white bg-warning" style={{width: "60%"}}>
                  <h5 style={{textAlign: "center"}} className="card-title">Complaints Received</h5>
                  <h5 style={{textAlign: "center"}} className="card-subtitle">{this.state.complaint_received}</h5>
                </div>
              </div>
              <div className="col">
                <div id="grievance_resolved_card" className="card text-white bg-success" style={{width: "60%"}}>
                  <h5 style={{textAlign: "center"}} className="card-title">Complaints Resolved</h5>
                  <h5 style={{textAlign: "center"}} className="card-subtitle">{this.state.complaint_resolved}</h5>
                </div>
              </div>
              <div className="col">
                <div id="grievance_inprocess_card" className="card text-white bg-info" style={{width: "60%"}}>
                  <h5 style={{textAlign: "center"}} className="card-title">Complaints In Process</h5>
                  <h5 style={{textAlign: "center"}} className="card-subtitle">{this.state.complaint_inproces}</h5>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
      </div>
    )
  }
}