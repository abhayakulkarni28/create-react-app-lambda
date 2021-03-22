import { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ManagerNavigation extends Component {
  myProfile= () => {
    window.location.href = '/manager/profile-update';
  }

  logout = () => {
    localStorage.removeItem('user');
    alert("Logged out successfully");
    window.location.href = '/';
  }

  render() {
    return (
      <div >
      
        <nav  className="navbar navbar-expand-lg navbar-light shadow ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link to="/manager/register-agent" className="nav-link">Add New Agent </Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager/settle-grievance" className="nav-link">Grievance Settlement</Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager/settle-claim" className="nav-link" >Claim Settlement</Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager/policy-customer-report" className="nav-link" >Policywise Customers</Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager/agents-report" className="nav-link" >Agent  Report</Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager/claim-report" className="nav-link" >Claim Report</Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager/grievance-report" className="nav-link" >Grievance Report</Link>
                </li>
                <li className="nav-item">
                  <Link to="/manager/policy-list" className="nav-link" >Show Policies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end container">
            <button class="btn btn-outline-success" type="button" onClick={this.myProfile}>My Profile</button>
            <button class="btn btn-outline-danger" type="button" onClick={this.logout}>Logout</button>
          </div>
        </nav>
      </div>
    )
  }
}