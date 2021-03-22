import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import EmpAuthService from "../../services/emp-auth-service";

export default class EmployeeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      role: ""
    };
  }

  componentDidMount() {
    const currentUser = EmpAuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })

    if(currentUser.roles.includes("ADMIN"))
      this.setState({role: "admin", redirect: "/admin/profile"});
    else if(currentUser.roles.includes("MANAGER"))
      this.setState({role: "manager", redirect: "/manager/profile"});
    else if(currentUser.roles.includes("AGENT"))
      this.setState({role: "agent", redirect: "/agent/profile"});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    if(this.state.role.includes("admin")) {
      return <Redirect to={this.state.redirect}/>
    }

    if(this.state.role.includes("manager")) {
      return <Redirect to={this.state.redirect}/>
    }

    if(this.state.role.includes("agent")) {
      return <Redirect to={this.state.redirect}/>
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}
      </div>
    );
  }
}
