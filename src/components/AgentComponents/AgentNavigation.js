import { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AgentNavigation extends Component {
  myProfile= () => {
    window.location.href = '/agent/profile-update';
  }

  logout = () => {
    localStorage.removeItem('user');
    alert("Logged out successfully");
    window.location.href = '/';
  }

  render(){
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
                  <Link to="/agent/add-new-customer" className="nav-link">Add New Customer Details</Link>
                </li>
                <li className="nav-item">
                  <Link to="/agent/add-customer-policy-details" className="nav-link">Add Customer Policy Details</Link>
                </li>
                <li className="nav-item">
                  <Link to="/agent/show-customer-policy-details" className="nav-link">Show Customer Policy Details</Link>
                </li>
                <li className="nav-item">
                  <Link to="/agent/policy-due-date-reminder" className="nav-link" >Customer Policy Due Date Reminder</Link>
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