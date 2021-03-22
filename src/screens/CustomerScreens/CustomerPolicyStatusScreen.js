import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";



export default class CustomerPolicyStatusScreen extends Component{
    constructor(props){
        super(props);
        this.onAdd = this.onAdd.bind(this)
        this.reloadCustomerPolicies = this.reloadCustomerPolicies.bind(this);       
        this.handlePremiumPay = this.handlePremiumPay.bind(this);
        this.state={
            loading: false,
            message:null,
            firstName:"",
            middleName:"",
            lastName:"",
            policyNo: [],
            policyName: [],
            premium: [],
            nextDueDate:[],
            PolicyStatuses:[]
        }
    }

    onAdd(policyNo,policyName,premium,nextDueDate) {
        console.log(policyNo+" "+policyName+" "+premium+" "+nextDueDate); 
        this.setState((prevState) => {
            // console.log(prevState.PolicyStatuses);
          const PolicyStatuses = prevState.PolicyStatuses
          PolicyStatuses.push({
            policyNo:policyNo,
            policyName:policyName,
            premium:premium,
            nextDueDate:nextDueDate,
          }) 
        })
      
    }

    componentDidMount (){
        this.reloadCustomerPolicies();
    }

    reloadCustomerPolicies(){
        const customer = CustomerService.getCurrentUser();
        CustomerService.fetchCustomerPolicyStatus(customer.id)
        .then((res) => {
            this.setState({
                firstName:res.firstName,
                middleName:res.middleName,
                lastName:res.lastName,
                policyNo:res.policyNo,
                policyName: res.policyName,
                premium:res.premium,
                nextDueDate:res.nextDueDate
            })
        })

        for(let i = 0 ; i < this.state.policyNo.length ; i++){
            console.log("i : "+i);     
            this.onAdd(this.state.policyNo[i], this.state.policyName[i], this.state.premium[i], this.state.nextDueDate[i])    
        }
        console.log(this.state.PolicyStatuses); 
    }

    handlePremiumPay(policyId){
      this.setState({
        message: "",
        loading: true
      });
      CustomerService.payPremium(policyId).then(
        () => {
          alert("Premium Paid Successfully !!");
          this.props.history.push("/customer/premium-stmt")
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
    
    render() {
      const { PolicyStatuses } = this.state;
      return (
        <div>
          <Header />
          <Navigation />  
          <CustomerNavigation/>
          <button type="button" className="btn btn-primary" onClick={this.reloadCustomerPolicies}>Show my Policies</button>
          <div>
          {
              <table className="table container table-hover">
              <thead>
                <tr>
                <th scope="col">Policy No</th>
                  <th scope="col">Policy Name</th>
                  <th scope="col">Premium</th>
                  <th scope="col">Next Due Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {PolicyStatuses.map(PolicyStatuses => (
                <tr>
                  <th scope="row">{PolicyStatuses.policyNo}</th>
                  <td>{PolicyStatuses.policyName}</td>
                  <td>{PolicyStatuses.premium}</td>
                  <td>{PolicyStatuses.nextDueDate}</td>
                  <td>
                    {
                      <button type="button" class="btn btn-warning" onClick={() => {this.handlePremiumPay(PolicyStatuses.policyNo)}}>Pay Premium</button>
                    }
                  </td>
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