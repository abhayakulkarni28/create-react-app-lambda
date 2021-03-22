import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Component } from 'react'
import {withRouter} from 'react-router-dom'

class HomeScreen extends Component {
  handleClickCustomerLogin =() =>{
    this.props.history.push("/customer/login");
  }

  handleClickEmployeeLogin =() => {
    this.props.history.push("/employee/login");
  }

  render() {
    return(
    <div>
      <Header />
      <Navigation />
        <table id="home_table">
          <tr>
              <td>
                <div className="customer">
                  <img src="customer.png" alt="customer" height="50%" width="50%"></img>
                </div>
              </td>
              <td>
                <div className="employee">
                  <img src="employee.png" alt="employee" height="50%" width="50%"></img>
                </div>
              </td>
          </tr>
        </table>
        <table className="link">
          <tr>
              <td className="button_td">
                <div className="customer">
                  <button type="button" class="btn btn-outline-primary" onClick={this.handleClickCustomerLogin}>Customer Login</button>
                </div>
              </td>
              <td className="button_td">
                <div className="employee">
                  <button type="button" class="btn btn-outline-primary" onClick={this.handleClickEmployeeLogin}>Employee Login</button>
                </div>
              </td>
            </tr>
        </table>
        {/* <button type="button" class="btn btn-outline-primary">Customer Login</button>
        <button type="button" class="btn btn-outline-primary">Employee Login</button> */}
      <Footer />
    </div>
    )
  }
}

export default withRouter(HomeScreen)


