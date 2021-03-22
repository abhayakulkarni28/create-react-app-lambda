import { Component } from "react";
import { Redirect } from "react-router";
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import CustAuthService from "../../services/cust-auth-service";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import Textarea from 'react-validation/build/textarea';

const required = value => {
  if(!value) {
      return (
          <div className="alert alert-danger" role="alert">
              This field is required!
          </div>
      );
  }
};

export default class GrievanceRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.handleReisterGrievance = this.handleReisterGrievance.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onChangeComplaintType = this.onChangeComplaintType.bind(this);
    this.onChangePolicyNumber = this.onChangePolicyNumber.bind(this);
    this.onChangeComplaintDescription = this.onChangeComplaintDescription.bind(this);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      complaint_type: "",
      policy_number: "",
      date: "",
      complaint_description: ""
    };
  }

  clearForm() {
    this.setState({
      complaint_type: "",
      policy_number: "",
      date: "",
      complaint_description: ""
    })
  }

  onChangeComplaintType(e) {
      this.setState({
        complaint_type: e.target.value
      })
  }

  onChangePolicyNumber(e) {
    this.setState({
      policy_number: e.target.value
    })
  }

  onChangeComplaintDescription(e) {
    this.setState({
      complaint_description: e.target.value
    })
  }

  handleReisterGrievance(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    })

    this.form.validateAll();

      CustAuthService.registerGrievance(this.state.complaint_type, this.state.policy_number, this.state.complaint_description).then(
        () => {
          this.props.history.push("/customer/profile");
          alert("Grievance registered successfully");
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
    const currentUser = CustAuthService.getCurrentUser();
    
    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
  }
  
  render () {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;
    var curr = new Date();
    var today = curr.toISOString().substr(0,10);

    return (
      <div>
      <Header/>
      <Navigation/>
      <CustomerNavigation/>
      <h1 id="grievance_register_title">Register a Grievance</h1>
      <div id="grievance_main" className="container">
      <Form 
        id="regForm"
        onSubmit={this.handleReisterGrievance}
        ref={c=> {
          this.form = c;
        }}
      >
        <div className="row">
          <div className="col">
            <div className="form-group col-md-6">
              <label for="complaint_type">Complaint Type</label>
              <Select id="complaint_type" className="form-control" onChange={this.onChangeComplaintType} validations={[required]}>
                <option selected value="0">Choose Type</option>
                <option value="POLICY">Policy</option>
                <option value="MANAGEMENT">Management</option>
              </Select>
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-6">
              <label for="policy_number">Policy Number</label>
              <Input 
                type="text" 
                className="form-control" 
                name="policy_number"
                value={this.state.policy_number}
                onChange={this.onChangePolicyNumber}
                validations={[required]}
              />
            </div>
          </div>
        </div>
      
        <div className="form-group col-md-3">
          <label for="date">Date</label>
          <Input 
            type="date" 
            className="form-control" 
            name="date"
            value={today}
            disabled
          />
        </div>

        <div className="form-group col-md-9">
          <label for="complaint_description">Complaint Description</label>
          <Textarea 
            id="textarea" 
            name="complaint_description" 
            className="form-control" 
            rows="3"
            value={this.state.complaint_description}
            onChange={this.onChangeComplaintDescription}
            validations={[required]}
          />
        </div>

        <div className="row">
          <div id="grievance_sub">
            <div className="form-group col-md-3">
              <button 
                className="btn btn-outline-success" 
                style={{margin:"5%"}}
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Register Grievance</span>
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