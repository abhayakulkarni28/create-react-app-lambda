import { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AdminNavigation extends Component {
  myProfile= () => {
    window.location.href = '/admin/profile-update';
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
                <Link to="/admin/add-new-policy" className="nav-link" style={{fontSize:"14px"}}>Add New Policy</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/policy-list" className="nav-link" style={{fontSize:"14px"}}>List of Policies</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/add-new-manager" className="nav-link" style={{fontSize:"14px"}} >Add Manager</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/customer-list" className="nav-link" style={{fontSize:"14px"}} >List of Customers</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/agent-list" className="nav-link" style={{fontSize:"14px"}} >List of Agents</Link>
              </li>

              <li className="nav-item">
                <Link to="/admin/manager-list" className="nav-link" style={{fontSize:"14px"}} >List of Managers</Link>
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
