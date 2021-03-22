// import logo from '../images/lic-logo.png'; 
import logo from '../images/new.png'; 
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import profile_img from "../images/profile.png";
import CustAuthServicce  from "../services/cust-auth-service"

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:null
    }
    this.getUser = this.getUser.bind(this);
  }

  getUser = (e) =>{
     console.log("user : "+this.state.user)
    this.setState({
      user: CustAuthServicce.getCurrentUser()
    });
    console.log("user : "+this.state.user)
    return this.state.user;
  }

  render(){
    return (
      <div>
        <nav  id="navbar-example2" className="navbar navbar-light bg-light">
          <Link to="/"><img id="header_logo_img" src={logo}  style={{marginLeft:"5%"}} alt="Logo" width="100px" height="70px"/></Link>
          <h3 style={{marginLeft:"15%"}} > <strong style={{color:"blue"}}>LIC PORTAL</strong></h3>
          <ul className="nav nav-pills"> 
            <li className="nav-item">
              <Link to="/insurance-info" className="nav-link">Know your Life Insurance</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">Contact us</Link>
            </li> 
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About Us</Link>  
            </li> 
          </ul>
        </nav>
      </div>
    )
  }
  
}

Header.defaultProps = {
  title: '',
}

export default  Header 

