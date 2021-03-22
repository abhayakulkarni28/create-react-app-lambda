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

//"premiumMode": "YEARLY",
//"annualPremium": "5000",
//"regDate": "2021-03-19",
//"policyDuration": "10"
//custId
//uinNo

const required = value => {
  if(!value) {
      return (
          <div className="alert alert-danger" role="alert">
              This field is required!
          </div>
      );
  }
};

export default class AddCustomerPolicyDetails extends Component {
  constructor(props) {
    super(props);
    this.handleAddCustomerPolicyDetails = this.handleAddCustomerPolicyDetails.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.onChangePremiumMode = this.onChangePremiumMode.bind(this)
    this.onChangeAnnualPremium = this.onChangeAnnualPremium.bind(this)
    this.onChangeRegDate = this.onChangeRegDate.bind(this)
    this.onChangePolicyDuration = this.onChangePolicyDuration.bind(this)
    this.onChangeCustId = this.onChangeCustId.bind(this)
    this.onChangeUinNo = this.onChangeUinNo.bind(this)

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      premiumMode: "",
      annualPremium: 0.0,
      regDate: "",
      policyDuration: 0.0,
      uinNo: 0,
      custId: 0
    };
  }

  clearForm() {
    this.setState({
      premiumMode: "",
      annualPremium: 0.0,
      regDate: "",
      policyDuration: 0.0,
      uinNo: 0,
      custId: 0
    })
  }

  onChangePremiumMode(e) {
    this.setState({
      premiumMode: e.target.value
    })
  }

  onChangeAnnualPremium(e) {
    this.setState({
      annualPremium: e.target.value
    })
  }

  onChangeRegDate(e) {
    this.setState({
      regDate: e.target.value
    })
  }

  onChangePolicyDuration(e) {
    this.setState({
      policyDuration: e.target.value
    })
  }

  onChangeUinNo(e) {
    this.setState({
      uinNo: e.target.value
    })
  }

  onChangeCustId(e) {
    this.setState({
      custId: e.target.value
    })
  }

  handleAddCustomerPolicyDetails(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    })

    this.form.validateAll();

     AgentService.addCustomerPolicyDetails(this.state.custId, this.state.uinNo, this.state.premiumMode, this.state.annualPremium, this.state.regDate, this.state.policyDuration).then(
        () => {
          this.props.history.push("/agent/profile");
          alert("Customer Policy Details Successfully")
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
      <h1 id="add_customer_policy_details_title">Add Customer Policy Details</h1>
      <div id="add_customer_policy_details_main" className="container">
      <Form 
        id="regForm"
        onSubmit={this.handleAddCustomerPolicyDetails}
        ref={c=> {
          this.form = c;
        }}
      >

        <div className="row">
          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="custId">Customer ID</label>
              <Input
                type="number" 
                className="form-control" 
                name="custId"
                value={this.state.custId}
                onChange={this.onChangeCustId}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="uinNo">UIN No</label>
              <Input
                type="number" 
                className="form-control" 
                name="uinNo"
                value={this.state.uinNo}
                onChange={this.onChangeUinNo}
                validations={[required]}
              />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="premiumMode">Premium Mode</label>
                <Select name="premiumMode" className="form-control" onChange={this.onChangePremiumMode} validations={[required]}>
                  <option value="0">Select</option>
                  <option value="MONTHLY">Monthly</option>
                  <option value="QUARTERLY">Quarterly</option>
                  <option value="HALFYEARLY">Half Yearly</option>
                  <option value="YEARLY">Yearly</option>
                </Select>
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="annualPremium">Annual Premium</label>
              <Input 
                type="number" 
                className="form-control" 
                name="annualPremium"
                value={this.state.annualPremium}
                onChange={this.onChangeAnnualPremium}
                validations={[required]}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label htmlFor="policyDuration">Policy Duration</label>
              <Input
                type="number" 
                className="form-control" 
                name="policyDuration"
                value={this.state.policyDuration}
                onChange={this.onChangePolicyDuration}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label htmlFor="regDate" >Registration Date</label>
              <Input
                type="date" 
                className="form-control" 
                name="regDate"
                value={this.state.regDate}
                onChange={this.onChangeRegDate}
                validations={[required]}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div id="add_customer_policy_details_sub">
            <div className="form-group col-md-3">
              <button 
                className="btn btn-outline-success" 
                style={{margin:"5%"}}
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Add Details</span>
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