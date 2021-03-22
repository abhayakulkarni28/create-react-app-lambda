import { Component } from "react";
import { Redirect } from "react-router";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import ManagerNavigation from "../../components/ManagerComponents/ManagerNavigation";
import ManagerService from "../../services/manager-service"
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

export default class AddNewManagerScreen extends Component {
  constructor(props) {
        super(props);
        this.handleAddNewAgent = this.handleAddNewAgent.bind(this)
        this.clearForm = this.clearForm.bind(this)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeDob = this.onChangeDob.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onChangeEdQual = this.onChangeEdQual.bind(this)

        this.state = {
        redirect: null,
        userReady: false,
        currentUser: { username: "" },
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        dob: "",
        gender: "",
        ed_qual: ""
        };
    }

    clearForm() {
        this.setState({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        dob: "",
        gender: "",
        ed_qual: ""
        })
    }

    onChangeFirstName(e) {
        this.setState({
        first_name: e.target.value
        })
    }

    onChangeMiddleName(e) {
        this.setState({
        middle_name: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
        last_name: e.target.value
        })
    }

    onChangeEmail(e) {
        if(e.target.value !== 0) {
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
        ed_qual: e.target.value
        })
    }

    componentDidMount(){
        const currentUser = ManagerService.getCurrentUser();
        if (!currentUser) this.setState({ redirect: "/" });
        this.setState({ currentUser: currentUser, userReady: true });
    }

    handleAddNewAgent(e) {
        e.preventDefault();

        this.setState({
        message: "",
        loading: true
        })

        this.form.validateAll();

        ManagerService.addNewAgent(this.state.currentUser.id,this.state.first_name, this.state.middle_name, this.state.last_name, this.state.email, this.state.dob, this.state.gender, this.state.ed_qual).then(
            () => {
                alert("Agent Added Successfully");
                this.props.history.push("/manager/profile");
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

  
  render () {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div>
      <Header/>
      <Navigation/>
      <ManagerNavigation/>
      <h1 id="add_new_manager_title">Add New Agent</h1>
      <div id="add_new_manager_main" className="container">
      <Form 
        id="regForm"
        onSubmit={this.handleAddNewAgent}
        ref={c=> {
          this.form = c;
        }}
      >
        <div id="add_new_manager_div">
        <div className="row">
          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="first_name">First Name</label>
              <Input
                type="text" 
                className="form-control" 
                name="first_name"
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="middle_name">Middle Name</label>
              <Input
                type="text" 
                className="form-control" 
                name="middle_name"
                value={this.state.middle_name}
                onChange={this.onChangeMiddleName}
                validations={[required]}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8 col-lg-7">
              <label for="last_name">Last Name</label>
              <Input
                type="text" 
                className="form-control" 
                name="last_name"
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
            <div className="form-group col-md-8">
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
            <div className="form-group col-md-8">
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
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group col-md-8">
              <label for="gender">Gender</label>
              <Select name="gender" className="form-control" onChange={this.onChangeGender} validations={[required]}>
                <option value="0">Select</option>
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
                <option value="OTHER">Other</option>
              </Select>
            </div>
          </div>

          <div className="col">
            <div className="form-group col-md-8">
              <label htmlFor="ed_qual" >Educational Qualification</label>
              <Select className="form-control" name='ed_qual' onChange={this.onChangeEdQual} validations={[required]}>
                  <option value="0">Choose your Education</option>
                  <option value="Primary Education">Primary education</option>
                  <option value="Secondary Education">Secondary education </option>
                  <option value="Bachelor's Degree">Bachelor's degree</option>
                  <option value="Master's Degree">Master's degree</option>
                  <option value="Doctorate">Doctorate or higher</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="row">
          <div id="add_new_manager_sub">
            <div className="form-group col-md-3">
              <button 
                className="btn btn-outline-success" 
                style={{margin:"5%"}}
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Add Agent</span>
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