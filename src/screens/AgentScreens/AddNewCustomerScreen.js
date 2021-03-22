import { Component } from "react";
import { Redirect } from "react-router";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import AgentNavigation from "../../components/AgentComponents/AgentNavigation"
import AgentService from "../../services/agent-service";
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

export default class AddNewCustomerScreen extends Component {
  constructor(props) {
    super(props);
    this.handleAddNewCustomer = this.handleAddNewCustomer.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeDob = this.onChangeDob.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onChangeEdQual = this.onChangeEdQual.bind(this)
    this.onChangeMStatus = this.onChangeMStatus.bind(this)
    this.onChangeOccupation = this.onChangeOccupation.bind(this)
    this.onChangeAnnualIncome = this.onChangeAnnualIncome.bind(this)
    this.onChangePassportNo = this.onChangePassportNo.bind(this)
    this.onChangePanNo = this.onChangePanNo.bind(this)
    this.onChangeUin = this.onChangeUin.bind(this)
    this.onChangePolicyName = this.onChangePolicyName.bind(this)

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      dob: "",
      gender: "",
      edQual: "",
      m_status: "",
      occupation: "",
      annualIncome: 0.0,
      passportNo: "",
      panNo: "",
      UIN: 0,
      policyName: ""
    };
  }

  clearForm() {
    this.setState({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      dob: "",
      gender: "",
      edQual: "",
      m_status: "",
      occupation: "",
      annualIncome: 0.0,
      passportNo: "",
      panNo: "",
      UIN: 0,
      policyName: ""
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

  onChangeEmail(e) {
    if(e.target.value != 0) {
      this.setState({
        email: e.target.value
      })
    }
  }

  onChangeDob(e) {
    this.setState({
      dob: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
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

  onChangePassportNo(e) {
    this.setState({
      passportNo: e.target.value
    })
  }

  onChangePanNo(e) {
    this.setState({
      panNo: e.target.value
    })
  }

  onChangeUin(e) {
    this.setState({
      UIN: e.target.value
    })
  }

  onChangePolicyName(e) {
    this.setState({
      policyName: e.target.value
    })
  }

  handleAddNewCustomer(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    })

    this.form.validateAll();

     AgentService.addNewCustomer(this.state.currentUser.id, this.state.firstName, this.state.middleName, this.state.lastName, this.state.email, this.state.dob, this.state.gender, this.state.edQual, this.state.m_status, this.state.occupation, this.state.annualIncome, this.state.passportNo, this.state.panNo, this.state.UIN, this.state.policyName).then(
        () => {
          this.props.history.push("/agent/profile");
          alert("Customer Added Successfully")
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
    const currentUser = AgentService.getCurrentUser();
    
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
      <AgentNavigation/>
      <h1 id="add_new_customer_title">Add New Customer</h1>
      <div id="add_new_customer_main" className="container">
      <Form 
        id="regForm"
        onSubmit={this.handleAddNewCustomer}
        ref={c=> {
          this.form = c;
        }}
      >
        <div id="add_new_customer_div">
        <div className="row">
          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="firstName">First Name</label>
              <Input
                type="text" 
                className="form-control" 
                name="firstName"
                value={this.state.first_name}
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
                value={this.state.middle_name}
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
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                validations={[required]}
              />
            </div>
          </div>
        </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="email">Email</label>
              <Input 
                type="email" 
                className="form-control" 
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="dob">Date of Birth</label>
              <Input 
                type="date" 
                className="form-control" 
                name="dob"
                value={this.state.dob}
                onChange={this.onChangeDob}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="gender">Gender</label>
              <Select name="gender" className="form-control" onChange={this.onChangeGender} validations={[required]}>
                <option value="0">Select</option>
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
                <option value="OTHER">Other</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group col-md-8">
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
            <div className="form-group col-md-8">
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
            <div className="form-group col-md-8">
              <label htmlFor="occupation" >Occupation</label>
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
            <div className="form-group col-md-8">
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

        <div className="row">
          <div className="col">
            <div className="form-group col-md-8">
              <label htmlFor="passportNo" >Passport No</label>
              <Input
                type="text" 
                className="form-control" 
                name="passportNo"
                value={this.state.passportNo}
                onChange={this.onChangePassportNo}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8">
              <label htmlFor="panNo" >PAN No</label>
              <Input
                type="text" 
                className="form-control" 
                name="panNo"
                value={this.state.panNo}
                onChange={this.onChangePanNo}
                validations={[required]}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group col-md-8">
              <label htmlFor="uin" >UIN</label>
              <Input
                type="number" 
                className="form-control" 
                name="UIN"
                value={this.state.UIN}
                onChange={this.onChangeUin}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8">
              <label htmlFor="policyName" >Policy Name</label>
              <Input
                type="text" 
                className="form-control" 
                name="policyName"
                value={this.state.policyName}
                onChange={this.onChangePolicyName}
                validations={[required]}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div id="add_new_customer_sub">
            <div className="form-group col-md-3">
              <button 
                className="btn btn-outline-success" 
                style={{margin:"5%"}}
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Add Customer</span>
              </button>

              <button 
                type="button" 
                className="btn btn-outline-danger"
                onClick={() => this.clearForm()}
              >Clear</button>
              
              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Form>
      </div>
      <Footer/>
     </div>
    );
  }
}