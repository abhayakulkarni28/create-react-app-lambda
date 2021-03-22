import { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CustomerNavigation extends Component {
  myProfile= () => {
    window.location.href = '/customer/profile-update';
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
                  <Link to="/customer/cust-policy-status" className="nav-link" >Policy Status</Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/apply-for-claim" className="nav-link" >Apply For Claim </Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/cust-claim-history" className="nav-link" >Claim History </Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/claim-status" className="nav-link" >Claim Status </Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/register-grievance" className="nav-link" >Grievance Registration </Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/cust-complaint-status" className="nav-link" >Grievance Status </Link>
                </li>  
                <li className="nav-item">
                  <Link to="/customer/premium-stmt" className="nav-link" >Premium statement </Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/policy_revival" className="nav-link" >Policy Revival  </Link>
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