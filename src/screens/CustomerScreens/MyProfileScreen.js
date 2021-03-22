import { Component } from "react";
import { Redirect } from "react-router";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";
import ProfileUpdateService from "../../services/profile-update-service";
import Header from "../../components/Header";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';

const required = value => {
  if(!value) {
      return (
          <div className="alert alert-danger" role="alert">
              This field is required!
          </div>
      );
  }
};

export default class MyProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangePincode = this.onChangePincode.bind(this);
    this.handleUpdateContactDetails = this.handleUpdateContactDetails.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEdQual = this.onChangeEdQual.bind(this);
    this.onChangeMStatus = this.onChangeMStatus.bind(this);
    this.onChangeOccupation = this.onChangeOccupation.bind(this);
    this.onChangeAnnualIncome = this.onChangeAnnualIncome.bind(this);
    this.handleUpdatePersonalDetails = this.handleUpdatePersonalDetails.bind(this);

    this.state = {
      response: null,
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      role: "",
      password: "",
      newPassword: "",
      mobile: "",
      city: "",
      state: "",
      pincode: "",
      address:{},
      firstName: "",
      middleName: "",
      lastName: "",
      edQual: "",
      m_status: "",
      occupation: "",
      annualIncome: 0.0
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeNewPassword(e) {
    this.setState({
      newPassword: e.target.value
    })
  }

  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    })
  }


  onChangePincode(e) {
    this.setState({
      pincode: e.target.value
    })
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeMiddleName(e) {
    this.setState({
      middleName: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onChangeEdQual(e) {
    this.setState({
      edQual: e.target.value
    })
  }

  onChangeMStatus(e) {
    this.setState({
      m_status: e.target.value
    })
  }

  onChangeOccupation(e) {
    this.setState({
      occupation: e.target.value
    })
  }

  onChangeAnnualIncome(e) {
    this.setState({
      annualIncome: e.target.value
    })
  }

  handleChangePassword(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    })

    this.form.validateAll();

    ProfileUpdateService.custUpdatePassword(this.state.currentUser.id, this.state.password, this.state.newPassword).then(
      (response) => {
        console.log(response);
        this.setState({
          response: response
        })
        alert("Password changed Successfully")
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

  handleUpdateContactDetails(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    })

    this.state.address.city = this.state.city
    this.state.address.state = this.state.state
    this.state.address.pincode = this.state.pincode
    
    ProfileUpdateService.custUpdateContact(this.state.currentUser.id, this.state.mobile, this.state.address).then (
      () => {
        alert("Contact Details Updated Successfully")
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

  handleUpdatePersonalDetails(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    })

    this.form.validateAll(); 

    ProfileUpdateService.custUpdatePersonalDetails(this.state.currentUser.id, this.state.firstName, this.state.middleName, this.state.lastName, this.state.edQual, this.state.m_status, this.state.occupation, this.state.annualIncome).then (
      () => {
        alert("Personal Details Updated Successfully")
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

  componentDidMount() {
    const currentUser = ProfileUpdateService.getCurrentUser();
    
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

      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Update Personal Details</button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Update Contact Details</button>
          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <h1 id="cust-update-person-title">Update Personal Details</h1>
            <div id="cust-update-person-main" className="container">
              <Form 
                id="updatePersonForm"
                onSubmit={this.handleUpdatePersonalDetails}
                ref={c=> {
                  this.form = c;
                }}
              >

              <div className="row">
                <div className="col">
                  <div className="form-group col-md-8 col-lg-7">
                    <label for="firstName">First Name</label>
                    <Input
                      type="text" 
                      className="form-control" 
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChangeFirstName}
                      validations={[required]}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group col-md-8 col-lg-7">
                    <label for="middleName">Middle Name</label>
                    <Input
                      type="text" 
                      className="form-control" 
                      name="middleName"
                      value={this.state.middleName}
                      onChange={this.onChangeMiddleName}
                      validations={[required]}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group col-md-8 col-lg-7">
                    <label for="lastName">Last Name</label>
                    <Input
                      type="text" 
                      className="form-control" 
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChangeLastName}
                      validations={[required]}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group col-md-8 col-lg-7">
                    <label htmlFor="edQual" >Educational Qualification</label>
                    <Select className="form-control" name='edQual' onChange={this.onChangeEdQual} validations={[required]}>
                      <option value="0">Choose your Education</option>
                      <option value="Primary Education">Primary education</option>
                      <option value="Secondary Education">Secondary education </option>
                      <option value="Bachelor's Degree">Bachelor's degree</option>
                      <option value="Master's Degree">Master's degree</option>
                      <option value="Doctorate">Doctorate or higher</option>
                    </Select>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group col-md-8 col-lg-7">
                    <label for="m_status">Marital Status</label>
                    <Select name="m_status" className="form-control" onChange={this.onChangeMStatus} validations={[required]}>
                      <option value="0">Select</option>
                      <option value="SINGLE">Single</option>
                      <option value="MARRIED">Married</option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group col-md-8 col-lg-7">
                    <label htmlFor="occupation">Occupation</label>
                    <Input
                      type="text" 
                      className="form-control" 
                      name="occupation"
                      value={this.state.occupation}
                      onChange={this.onChangeOccupation}
                      validations={[required]}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group col-md-8 col-lg-7">
                    <label htmlFor="annualIncome" >Annual Income</label>
                    <Input
                      type="number" 
                      className="form-control" 
                      name="annualIncome"
                      value={this.state.annualIncome}
                      onChange={this.onChangeAnnualIncome}
                      validations={[required]}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
              <button
                id="update_cust_person_btn"
                className="btn btn-outline-success"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Update Details</span>
              </button>

              {this.state.message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                    {this.state.message}
                    </div>
                </div>
              )}
            </div> 
              </Form>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h1 id="admin-update-contact-title">Update Contact Details</h1>
            <div id="admin-update-contact-main" className="container">
              <Form 
                id="updateContactForm"
                onSubmit={ this.handleUpdateContactDetails}
                ref={c=> {
                  this.form = c;
                }}
              >

              <div className="form-group col-md-8 col-lg-7">
                <label for="mobile">Mobile</label>
                <Input
                  type="text" 
                  className="form-control" 
                  name="mobile"
                  value={this.state.mobile}
                  onChange={this.onChangeMobile}
                />
              </div>

              <div className="form-group col-md-8 col-lg-7">
                <label for="city">City</label>
                <Input
                  type="text" 
                  className="form-control" 
                  name="city"
                  value={this.state.city}
                  onChange={this.onChangeCity}
                />
              </div>

              <div className="form-group col-md-8 col-lg-7">
                <label for="state">State</label>
                <Input
                  type="text" 
                  className="form-control" 
                  name="state"
                  value={this.state.state}
                  onChange={this.onChangeState}
                />
              </div>

              <div className="form-group col-md-8 col-lg-7">
                <label for="pincode">Pincode</label>
                <Input
                  type="text" 
                  className="form-control" 
                  name="pincode"
                  value={this.state.pincode}
                  onChange={this.onChangePincode}
                />
              </div>

              <div className="form-group">
              <button
                id="update_contact_btn"
                className="btn btn-outline-success"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Update Details</span>
              </button>

              {this.state.message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                    {this.state.message}
                    </div>
                </div>
              )}
            </div> 
              </Form>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <h1 id="admin-change-password-title">Change Password</h1>
            <div id="admin-change-password-main" className="container">
            <Form
              onSubmit={this.handleChangePassword}
              ref={c => {
              this.form = c;
              }}
            >
            
            <div className="form-group col">
              <label htmlFor="password">Old Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required]}
                />
            </div>

            <div className="form-group col">
              <label htmlFor="newPassword">New Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  value={this.state.newPassword}
                  onChange={this.onChangeNewPassword}
                  validations={[required]}
                />
            </div>

            <div className="form-group">
              <button
                id="update_password_btn"
                className="btn btn-outline-success"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Update Password</span>
              </button>

              {this.state.message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                    {this.state.message}
                    </div>
                </div>
              )}
            </div> 
            </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}
