import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import Navigation from "../../components/Navigation";
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation"
import CustAuthService from '../../services/cust-auth-service';
import customer_profile_img from '../../images/customer-profile.png'

export default class CustomerProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = CustAuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
  }
  
  render () {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
     <div>
      <Header/>
      <Navigation/>
      <CustomerNavigation/>
      <div style={{marginTop:"5%"}}>
        <img style={{marginLeft:"40%"}} src={customer_profile_img} alt="customer_profile_image"></img>
      </div>
      <Footer/>
     </div>
    );
  }
}