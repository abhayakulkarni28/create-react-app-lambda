import { Component } from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import AgentService from '../../services/agent-service'
import AgentNavigation from '../../components/AgentComponents/AgentNavigation'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const required = value => {
  if(!value) {
      return (
          <div className="alert alert-danger" role="alert">
              This field is required!
          </div>
      );
  }
};

class ShowCustomerPolicyDetailsScreen extends Component{
    constructor(props){
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.loadPolicyList = this.loadPolicyList.bind(this);
        
        this.state={
          message:null,
          loading:false,
          id: 0,
          firstName: "",
          middleName : "",
          lastName: "",
          email: "",
          mobile: "",
          policyNo: [],
          premiumMode : [],
          annualPremium: [],
          policyName: [], 
          Policies: []
        }
    }

    onAdd(policyNo, premiumMode, annualPremium, policyName) {
      console.log(policyNo+" "+premiumMode+" "+annualPremium+" "+policyName);
      this.setState((prevState) => {
        const Policies = prevState.Policies
        Policies.push({
          policyNo: policyNo,
          premiumMode: premiumMode,
          annualPremium: annualPremium,
          policyName: policyName
        })
      })
    }

    onChangeId(e) {
      this.setState({
        id: e.target.value
      })
    }

    loadPolicyList(e){
        e.preventDefault();
        const id = this.state.id;
        AgentService.getCustomerPolicyDetails(this.state.id)
        .then((res) => {
          this.setState ({
            firstName: res.firstName,
            middleName: res.middleName,
            lastName: res.lastName,
            email: res.email,
            mobile: res.mobile,
            policyNo: res.policyNo,
            premiumMode: res.premiumMode,
            annualPremium: res.annualPremium,
            policyName: res.policyName
          })
        })

        for(let i=0; i<this.state.policyNo.length; i++) {
          console.log("i : "+i);
          this.onAdd(this.state.policyNo[i], this.state.premiumMode[i], this.state.annualPremium[i], this.state.policyName[i])
        }
        console.log(this.state.Policies);
    }

    render() {
        const { Policies } = this.state;
        return(
            <div>
                <Header />
                <Navigation />  
                <AgentNavigation/>

                <h4 className="text-center" id ="customer_policy_details_title" >Customer Policy Details </h4>
                <div id="customer_policy_details_form">
                  <Form
                    onSubmit={this.loadPolicyList}
                    ref={c=> {
                      this.form = c;
                    }}
                  >
                    
                    <div className="col-md-6">
                      <div className="form-group col-md-4 col-lg-4">
                        <label for="id">Customer ID</label>
                        <Input
                          type="number" 
                          className="form-control" 
                          name="id"
                          value={this.state.id}
                          onChange={this.onChangeId}
                          validations={[required]}
                        />
                      </div>
                    
                      <button 
                        id="show-cust-policy-details-btn"
                        className="btn btn-outline-success" 
                        disabled={this.state.loading}
                      >
                        {this.state.loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Show Policy Details</span>
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
                <div className="align-self-center">
                {
                  <table className="table table-hover" id="customer_policy_details_table">
                    <thead className="bg-primary">
                      <tr>
                        <th scope="col">Customer ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Policy No</th>
                        <th scope="col">Policy Name</th>
                        <th scope="col">Premium Mode</th>
                        <th scope="col">Annual Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Policies.map(Policies => (
                        <tr>
                          <th>{this.state.id}</th>
                          <td>{this.state.firstName}</td>
                          <td>{this.state.middleName}</td>
                          <td>{this.state.lastName}</td>
                          <td>{this.state.email}</td>
                          <td>{this.state.mobile}</td>
                          <td scope="row">{Policies.policyNo}</td>
                          <td>{Policies.policyName}</td>
                          <td>{Policies.premiumMode}</td>
                          <td>{Policies.annualPremium}</td>
                        </tr>
                        ))}
                    </tbody> 
                  </table>
                }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ShowCustomerPolicyDetailsScreen