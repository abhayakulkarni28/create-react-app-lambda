import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { Redirect } from "react-router";

const required = value => {
    if(!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class CustomerPolicyRevivalScreen extends Component{
    constructor(props){
        super(props)
        this.handlePolicyRevival = this.handlePolicyRevival.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onChangePolicyNoToRevive = this.onChangePolicyNoToRevive.bind(this);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" },
            policyNoToRevive: "",
            revival:[],
            
        };
        // policyNo: "",
        // sumOfPremiumDue:"",
        // fine:"",
        // remainingDuration: "",
        // lastPremiumReceivedDate: "",
    }

    clearForm() {
        this.setState({
            policyNoToRevive: "",
        })
    }

    onChangePolicyNoToRevive(e) {
        this.setState({
            policyNoToRevive: e.target.value
        })
    }

    handlePolicyRevival(e){
        console.log("Policy no :"+this.state.policyNoToRevive)
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        })
        this.form.validateAll();
        CustomerService.policyRevival(this.state.policyNoToRevive)
        .then(
            (res) => {
                this.setState(
                    {
                        revival : res
                    }
                )
                alert("Policy Registered for Revival !!");
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
        const currentUser = CustomerService.getCurrentUser();   
        if (!currentUser) this.setState({ redirect: "/" });
        this.setState({ currentUser: currentUser, userReady: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div>
                <Header/>
                <Navigation/>
                <CustomerNavigation/>
                <h1 id="grievance_register_title">Policy Revival</h1>    
                <Form 
                    id="regForm"
                    onSubmit={this.handlePolicyRevival}
                    ref={c=> {
                        this.form = c;
                    }}
                    style={{marginLeft:"10%"}}
                >
                        <div className="row container">
                        <div className="col-sm">
                            <Input 
                                type="text" 
                                className="form-control" 
                                name="policyNoToRevive"
                                value={this.state.policyNoToRevive}
                                placeHolder="Enter Policy Number"
                                onChange={this.onChangePolicyNoToRevive}
                                validations={[required]}
                                style={{marginLeft:"30%"}}
                            />
                        </div>
                        <div className="col-sm" >
                            <button className="btn btn-success" style={{marginLeft:"50%"}} >
                                <span>Revive Policy </span>
                            </button>
                        </div>
                        <div className="col-sm">
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={() => this.clearForm()}
                                >
                                    Clear
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
                </Form>
                {this.state.revival.policyNo &&(
                    <div>
                         <table class="table container">
                            <thead>
                                    <tr>
                                        <th scope="col">Policy No</th>
                                        <th scope="col">Sum Of Premium Due</th>
                                        <th scope="col">Fine</th>
                                        <th scope="col">Remaining Duration</th>
                                        <th scope="col">Last Premium Received Date</th>
                                    </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.revival.policyNo}</td>
                                    <td>{this.state.revival.sumOfPremiumDue}</td>
                                    <td>{this.state.revival.fine}</td>
                                    <td>{this.state.revival.remainingDuration}<strong style={{color:"red"}}>*</strong></td>
                                    <td>{this.state.revival.lastPremiumReceivedDate}</td>
                                </tr>
                            </tbody>
                         </table>
                         
                        <div className="container">
                        <h6><strong style={{color:"red"}}>*</strong>P:Period  Of  M:Months  D:Days</h6>
                        </div>
                    </div> 
                     
                )}
                                
               <Footer/>
            </div>
        )
        
    }
}