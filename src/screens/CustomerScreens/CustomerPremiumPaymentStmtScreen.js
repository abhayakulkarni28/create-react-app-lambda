import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerNavigation from "../../components/CustomerComponents/CustomerNavigation";

class CustomerPremiumPaymentStatementScreen extends Component{
    constructor(props){
        super(props);
        this.reloadStatements = this.reloadStatements.bind(this);
        this.state={
            message:null,
            StatementDetails:[]
        }
    }
        // "policyNo": 8,
        // "firstName": "meena",
        // "middleName": "m.",
        // "lastName": "sanu",
        // "regDate": "2017-12-11",
        // "premiumMode": "MONTHLY",
        // "premium": 5300.0,
        // "paidDate": "2021-03-19"
      
    componentDidMount (){
        this.reloadStatements();
    }

    reloadStatements(){
        const customer = CustomerService.getCurrentUser();
        CustomerService.fetchPremiumStatements(customer.id)
        .then((res) => {
            this.setState({
                StatementDetails : res
            }) 
        })
    }

    render() {
        return(
            <div>
                <Header />
                <Navigation />  
                <CustomerNavigation/>
                <h4 style= {{color:"blue"}} className="text-center" id ="admin_agent_details_header" >Premium Statements  </h4>
                <div className="align-self-center">
                <table className="table  table-hover "  id="admin_agent_list_table">
                    <thead className="bg-primary">
                        <tr>
                            <th>Policy No</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Registeration Date</th>
                            <th>Premium Mode</th>
                            <th>Premium </th>
                            <th>Paid Date</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.StatementDetails.map(
                                stmt => 
                                    <tr className = "table-light">
                                        <td>{stmt.policyNo}</td>
                                        <td>{stmt.firstName}</td>
                                        <td>{stmt.middleName}</td>
                                        <td>{stmt.lastName}</td>
                                        <td>{stmt.regDate}</td>
                                        <td>{stmt.premiumMode}</td>
                                        <td>{stmt.premium}</td>
                                        <td>{stmt.paidDate}</td>
                                    </tr>
                            )
                        }
                    </tbody> 
                </table>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CustomerPremiumPaymentStatementScreen;