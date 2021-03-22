import { Component } from "react";
import { Redirect } from "react-router";
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import CustmerService from "../../services/customer-service";
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

  export default class CustomerApplyForClaimScreen extends Component {
    constructor(props) {
        super(props);
        this.handleApplyClaim = this.handleApplyClaim.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onChangeClaimType = this.onChangeClaimType.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePolicyNo = this.onChangePolicyNo.bind(this);
    

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" },
            claimType: "",
            date: "",
            policyNo: "",
        };

    }

    clearForm() {
        this.setState({
            claimType: "",  
            date: "",
            policyNo: ""
        })
    }
    
    onChangeClaimType(e) {
        this.setState({
            claimType: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    onChangePolicyNo(e) {
        this.setState({
            policyNo: e.target.value
        })
    }

    handleApplyClaim(e){
        e.preventDefault();
        
        this.setState({
            message: "",
            loading: true
        })

        this.form.validateAll();
        const cust = CustmerService.getCurrentUser()
        CustmerService.applyForClaim(cust.id, this.state.claimType, this.state.date, this.state.policyNo)
        .then(
            () => {
                this.props.history.push("/customer/profile");
                alert("Claim Registered successfully");
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
        const currentUser = CustmerService.getCurrentUser();   
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
                <h1 id="grievance_register_title">Apply For Claim</h1>
                <div id="grievance_main" className="container" ></div>
                <Form 
                    id="regForm"
                    onSubmit={this.handleApplyClaim}
                    ref={c=> {
                        this.form = c;
                    }}
                    style={{marginLeft:"10%"}}
                >
                <div className="row">
                        <div className="col" style={{marginLeft:"10%"}}>
                            <div className="form-group col-md-5">
                                <label for="claimType">Claim Type</label>
                                <Select id="claimType" className="form-control" onChange={this.onChangeClaimType} validations={[required]}>
                                <option selected value="0">Choose Type</option>
                                <option value="MATURITY">MATURITY</option>
                                <option value="DEATH">DEATH</option>
                                <option value="ACCIDENTAL">ACCIDENTAL</option>
                                <option value="BADFAITH">BADFAITH</option>
                                <option value="GENERAL">GENERAL</option>
                                </Select>
                            </div>
                        </div>
        
                        <div className="col" >
                            <div className="form-group col-md-5">
                                <label for="policyNo">Policy Number</label>
                                <Input 
                                type="text" 
                                className="form-control" 
                                name="policyNo"
                                value={this.state.policyNo}
                                onChange={this.onChangePolicyNo}
                                validations={[required]}
                                />
                            </div>
                        </div>
                    
                        <div className="form-group col-md-3" style={{marginRight:"10%"}}>
                            <label for="date">Date</label>
                            <Input 
                            type="date" 
                            className="form-control" 
                            name="date"
                            value={today}
                            disabled
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div id="grievance_sub">
                            <div className="form-group col-md-3">
                                <button className="btn btn-outline-success" style={{margin:"5%"}} disabled={this.state.loading}>
                                    {this.state.loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Apply For Claim</span>
                                </button>
  
                                <button 
                                type="button" 
                                className="btn btn-outline-danger"
                                onClick={() => this.clearForm()}
                                >Clear
                                </button>
                
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
                <Footer/>
            </div>
        );
    }
}