import { Component } from "react";
import { Redirect } from "react-router";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import AdminNavigation from "../../components/AdminComponents/AdminNavigation";
import EmpAuthService from "../../services/emp-auth-service";
import AdminService from '../../services/admin-service';
import Header from "../../components/Header";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
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

export default class AddNewPolicyScreen extends Component {
  constructor(props) {
    super(props);
    this.handleAddNewPolicy =this.handleAddNewPolicy.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onChangePolicyName = this.onChangePolicyName.bind(this);
    this.onChangePolicyDescription = this.onChangePolicyDescription.bind(this);
    this.onChangeCommenceDate = this.onChangeCommenceDate.bind(this);
    this.onChangeSumAssured = this.onChangeSumAssured.bind(this);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      policy_name: "",
      policy_description: "",
      commence_date: "",
      sum_assured: 0.0
    };
  }

  clearForm() {
    // document.getElementById("regForm").reset();
    this.setState({
      policy_name: "",
      policy_description: "",
      commence_date: "",
      sum_assured: 0.0
    })
  }

  onChangePolicyName(e) {
    this.setState({
      policy_name: e.target.value
    })
  }

  onChangePolicyDescription(e) {
      this.setState({
        policy_description: e.target.value
      })
  }

  onChangeCommenceDate(e) {
    this.setState({
      commence_date: e.target.value
    })
  }

  onChangeSumAssured(e) {
    this.setState({
      sum_assured: e.target.value
    })
  }

  handleAddNewPolicy(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    })

    this.form.validateAll();

     AdminService.addNewPolicy(this.state.policy_name, this.state.policy_description, this.state.commence_date, this.state.sum_assured).then(
        () => {
          this.props.history.push("/admin/profile");
          alert("Policy Added Successfully")
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
    const currentUser = EmpAuthService.getCurrentUser();
    
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
      <AdminNavigation/>
      <h1 id="add_new_policy_title">Add New Policy</h1>
      <div id="add_new_policy_main" className="container">
      <Form 
        id="regForm"
        onSubmit={this.handleAddNewPolicy}
        ref={c=> {
          this.form = c;
        }}
      >
        <div className="col">
          <div className="form-group col-md-10">
            <label for="policy_name">Policy Name</label>
            <Input
              type="text" 
              className="form-control" 
              name="policy_name"
              value={this.state.policy_name}
              onChange={this.onChangePolicyName}
              validations={[required]}
            />
          </div>
        </div>

        <div className="form-group col-md-10">
          <label for="policy_description">Policy Description</label>
          <Textarea 
            id="textarea" 
            name="policy_description" 
            className="form-control" 
            rows="3"
            value={this.state.policy_description}
            onChange={this.onChangePolicyDescription}
            validations={[required]}
          />
        </div>
        
        <div className="row">

          <div className="col">
            <div className="form-group col-md-8">
              <label for="commence_date">Commence Date</label>
              <Input 
                type="date" 
                className="form-control" 
                name="commence_date"
                value={this.state.commence_date}
                onChange={this.onChangeCommenceDate}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8">
              <label for="sum_assured">Sum Assured</label>
              <Input 
                type="number" 
                className="form-control" 
                name="sum_assured"
                value={this.state.sum_assured}
                onChange={this.onChangeSumAssured}
                validations={[required]}
              />
            </div>
          </div>
        </div>

        

        <div className="row">
          <div id="add_new_policy_sub">
            <div className="form-group col-md-3">
              <button 
                className="btn btn-outline-success" 
                style={{margin:"5%"}}
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Add Policy</span>
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