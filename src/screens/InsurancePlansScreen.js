import Footer from "../components/Footer"
import Header from "../components/Header"
import Navigation from "../components/Navigation"

const InsurancePlansScreen = () => {
  return(
      <div >
          <Header/>
          <Navigation/>
          <h5 style={{textAlign:"center"}}>Insurance Plan</h5>
          <h4 style={{textAlign:"center"}}>LIC's New Jeevan Anand</h4>
          <div id="insurance_plan_container" className="card">
            <p>
            LIC's New Jeevan Anand Plan is a participating non-linked plan which offers an attractive combination of protection and savings. This combination provides financial protection against death throughout the lifetime of the policyholder with the provision of payment of lumpsum at the end of the selected policy term in case of his/her survival. This plan also takes care of liquidity needs through its loan facility.
            </p>
            <p><strong>Prime features of LIC Jeevan Anand Plan:</strong></p>
            <ul className="insurance_plan_ul">
              <li>It’s a traditional endowment policy which offers sum assured and additional bonuses</li>
              <li>On survival, the maturity benefits are paid to the policyholder and the plan continues to be in force</li>
              <li>In the event of policyholder’s death, the sum assured is paid to the nominee</li>
              <li>Additional top-up covers are available on payment of a nominal sum along with premium</li>
              <li>This Life Insurance Policy Provides financial protection throughout the lifetime of the person insured</li>
              <li>Offers a lump sum at the end of the chosen term period</li>
              <li>The policy participates in the profits of the corporation</li>
            </ul>
            <p><strong>Eligibility conditions and Features</strong></p>
            <table className="table table-bordered border-primary">
              <tr>
                <td>Minimum entry age</td>
                <td>18 years</td>
              </tr>
              <tr>
                <td>Maximum entry age</td>
                <td>50 years</td>
              </tr>
              <tr>
                <td>Premium payment modes</td>
                <td>Yearly, Half-Yearly, Quarterly, Monthly </td>
              </tr>
              <tr>
                <td>Policy term</td>
                <td>15 to 35 years</td>
              </tr>
              <tr>
                <td>Basic sum assured</td>
                <td>Rs.1,00,000</td>
              </tr>
              <tr>
                <td>Revival</td>
                <td>Within 2 years</td>
              </tr>
              <tr>
                <td>Death benefit</td>
                <td>
                  <ul>
                    <li>Sum assured and accrued bonuses are paid to the nominee.</li>
                    <li>The plan continues to be in force</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Maturity benefits</td>
                <td>
                  <ul>
                    <li>Payable to policyholder after the maturity period</li>
                    <li>Includes basic sum assured and bonuses accrued from time to time</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <Footer/>
      </div>
  )
}

export default InsurancePlansScreen