import React, { Component } from 'react';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select'
import CheckButton from 'react-validation/build/button';

import CustAuthService from "../../services/cust-auth-service";

const required = value => {
    if(!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class CustomerRegistrationScreen extends Component{

    constructor(props){
        super(props);
        this.state ={
            city: '',
            pincode: '',
            state: '',
            dob: '',
            educationalQualification:'',
            email: '',
            firstName: '',
            middleName: '',
            lastName: '',
            password: '',
            gender: '',
            annualIncome: '',
            maritalStatus: '',
            occupation:'',
            pan:'',
            passport:'',
            loading: false,
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePincode = this.onChangePincode.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeEducationalQualification = this.onChangeEducationalQualification.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAnnualIncome = this.onChangeAnnualIncome.bind(this);
        this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
        this.onChangeOccupation = this.onChangeOccupation.bind(this);
        this.onChangePan = this.onChangePan.bind(this);
        this.onChangePassport = this.onChangePassport.bind(this);
    }

    
    onChangeCity (e){
        this.setState({ 
            city: e.target.value
         });
    }

    
    onChangePincode (e){
        this.setState({ 
            pincode: e.target.value
         });
    }

    onChangeState (e){
        this.setState({ 
            state: e.target.value
         });
    }   

    onChangeDob (e){
        this.setState({ 
            dob: e.target.value
         });
    }

    onChangeEducationalQualification (e){
        this.setState({ 
            educationalQualification: e.target.value
         });
    }

    onChangeEmail (e){
        this.setState({ 
            email: e.target.value
         });
    }

    onChangeFirstName (e){
        this.setState({ 
            firstName: e.target.value
         });
    }

    onChangeMiddleName (e){
        this.setState({ 
            middleName: e.target.value
         });
    }

    onChangeLastName (e){
        this.setState({ 
            lastName: e.target.value
         });
    }
    
    onChangePassword (e){
        this.setState({ 
            password: e.target.value
         });
    }

    onChangeGender(e){
        this.setState({ 
            gender: e.target.value
         });
    }

    onChangeAnnualIncome(e){
        this.setState({ 
            annualIncome: e.target.value
         });
    }

    onChangeMaritalStatus(e){
        this.setState({ 
            maritalStatus: e.target.value
         });
    }

    onChangeOccupation(e){
        this.setState({ 
            occupation: e.target.value
         });
    }

    onChangePan(e){
        this.setState({ 
            pan: e.target.value
         });
    }

    onChangePassport(e){
        this.setState({ 
            passport: e.target.value
         });
    }

    saveUser = (e) => {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            let user = {
                city: this.state.city, 
                pincode: this.state.pincode,
                state: this.state.state,
                dob: this.state.dob, 
                educationalQualification: this.state.educationalQualification,
                email:  this.state.email,
                firstName: this.state.firstName, 
                middleName: this.state.middleName, 
                lastName: this.state.lastName,
                password: this.state.password,
                gender: this.state.gender,
                annualIncome: this.state.annualIncome,
                maritalStatus: this.state.maritalStatus,
                occupation: this.state.occupation,
                pan: this.state.pan,
                passport: this.state.passport
            };
            CustAuthService.addUser(user).then(
                () => {
                    this.setState({message : 'User added successfully.'});
                    this.props.history.push("/customer/login");
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
                      message: resMessage
                    });
                  }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
    

    render() {
        return(
            <div>
            <Header/>
            <Navigation />
            <div className="container">
                <h2 style={{color:'blue'}} className="text-center">Customer Registration Form</h2>
             
                <Form
                    onSubmit={this.saveUser}
                    ref={c => {
                    this.form = c;
                    }}
                >

            
                <div class="row">  
                    <div className="form-group col">
                        <label htmlFor="firstName">First Name</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="middleName">Middle Name</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="middleName"
                            value={this.state.middleName}
                            onChange={this.onChangeMiddleName}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="lastName">Last Name</label>
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
                <div class="row"> 
                    <div className="form-group col">
                        <label htmlFor="city">City</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="city"
                        value={this.state.city}
                        onChange={this.onChangeCity}
                        validations={[required]}
                        />                        
                    </div>

                    <div className="form-group col">
                        <label htmlFor="state">State</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChangeState}
                        validations={[required]}
                        />                        
                    </div>

                    <div className="form-group col">
                        <label htmlFor="pincode">Pincode</label>
                        <Input
                        type="number"
                        className="form-control"
                        name="pincode"
                        value={this.state.pincode}
                        onChange={this.onChangePincode}
                        validations={[required]}
                        />                        
                    </div>
                </div>
                <div className="row">   
                    <div className="form-group col">
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="password">Password</label>
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
                    <label htmlFor="dob" >Date of Birth</label>
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
               
                
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="gender">Gendor</label>
                        <Select className="form-control"  name='gender' value={this.state.gender} validations={[required]}>
                            <option value=''>Choose your Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </Select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="maritalStatus">Marital Status</label>
                        <Select   className="form-control" name='maritalStatus' value={this.state.maritalStatus} validations={[required]}>
                            <option value=''>Choose your Marital Status</option>
                            <option value='single'>Single</option>
                            <option value='married'>Married</option>
                            <option value='widowed'>Widowed</option>
                            <option value='divorced'>Divorced</option>
                        </Select>
                    </div>

                    <div className="form-group col">
                        <label htmlFor="educationalQualification" >Educational Qualification</label>
                        <Select className="form-control"  name='educationalQualification' value={this.state.educationalQualification} validations={[required]}>
                            <option value=''>Choose your Education</option>
                            <option value="Primary education">Primary education</option>
                            <option value="Secondary education">Secondary education </option>
                            <option value="Bachelor's degree">Bachelor's degree</option>
                            <option value="Master's degree">Master's degree</option>
                            <option value="Doctorate or higher">Doctorate or higher</option>
                        </Select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="annualIncome">Annual Income</label>
                            <Input
                                type="number"
                                className="form-control"
                                name="annualIncome"
                                value={this.state.annualIncome}
                                onChange={this.onChangeAnnualIncome}
                                validations={[required]}
                            />
                    </div>

                    <div className="form-group col">
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
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="pan">PAN No</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="pan"
                                value={this.state.pan}
                                onChange={this.onChangePan}
                                validations={[required]}
                            />
                    </div>
                    
                    <div className="form-group col">
                        <label htmlFor="passport">Passport No</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="passport"
                                value={this.state.passport}
                                onChange={this.onChangePassport}
                                validations={[required]}
                            />
                    </div>
                </div>
                <div className="form-group">
                    <button
                        id="cust_btn"
                        className="btn btn-primary btn-block"
                        disabled={this.state.loading}
                    >
                        {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Register Customer</span>
                    </button>
                </div>
                    
                {this.state.message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                        {this.state.message}
                        </div>
                    </div>
                )}
                <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                        this.checkBtn = c;
                    }}
                />
                </Form>
                <Footer />
            </div>
            </div>
        );    
    }
}