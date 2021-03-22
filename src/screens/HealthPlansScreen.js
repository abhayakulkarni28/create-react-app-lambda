import Footer from "../components/Footer"
import Header from "../components/Header"
import Navigation from "../components/Navigation"

const HealthPlansScreen = () => {
  return(
      <div >
          <Header/>
          <Navigation/>
          <h5 style={{textAlign:"center"}}>Health Plan</h5>
          <h4 style={{textAlign:"center"}}>LIC's Jeevan Arogya</h4>
          <div id="health_plan_container" className="card">
            <p>
            LIC Jeevan Arogya is a non-linked health insurance policy offered by Life Insurance Corporation (India) to help individuals deal with medical expenses. This comprehensive health insurance policy will cover the entire family. The main highlight of the policy is that new family members in case of a marriage or birth of a child can be included during the term of the policy. Health is a major concern in today’s fast paced life and this policy will ensure that you and your family members are covered against medical uncertainties.
            </p>
            <p><strong>Key features and highlights</strong></p>
            <ul className="health_plan_ul">
              <li>It is a comprehensive health insurance policy.</li>
              <li>Cover-Offers cover for your parents, spouse, children and parents-in-law.</li>
              <li>Financial protection for medical expenses.</li>
              <li>Provides benefit payout irrespective of the medical costs.</li>
              <li>No claim benefit</li>
              <li>Premium payment- Flexible premium payment options</li>
              <li>Flexible benefit limit.</li>
              <li>Cover can be extended for new family members.</li>
              <li>Can be taken up with an existing mediclaim policy for the same medical cause.</li>
              <li>Increasing health cover year on year.</li>
              <li>Waiting period- There is no general waiting period in case of hospitalisation or surgery due to accidental bodily injury.</li>
            </ul>

            <p>Listed below is the cover offered by LIC Jeevan Arogya</p>
            <ul className="healt_plan_ul">
              <li><strong>Maturity benefit</strong>: There will be no maturity benefit paid under the policy.</li>
              <li><strong>Hospitalisation cash benefit</strong>: If the insured or any other insured covered by the plan is hospitalised due to accidental body injury or sickness they can avail the hospitalisation cash benefit.</li>
              <li><strong>Major surgical benefit</strong>: If the insured is going under any surgery within the policy period they can avail the major surgical benefit.</li>
              <li><strong>Other surgical benefits</strong>: Surgeries not covered under the major surgical benefit will be covered under this.</li>
              <li><strong>Ambulance benefit</strong>: Ambulance charges up to Rs.1000 per insured is covered every year.</li>
              <li><strong>Death benefit</strong>: No death benefit is payable on the death of the insured unless one has opted for a special rider benefit.</li>
              <li><strong>Hospitalisation cash benefit</strong>: One can choose a cover of Rs.1000 to Rs.4000 per day for HCB</li>
              <li><strong>Major surgical benefit</strong>: Major surgical benefit is always 100 times your Hospital cash benefit</li>
            </ul>

            <p><strong>Eligibility conditions</strong></p>
            <table className="table table-bordered border-primary">
              <tr>
                <th>Criteria</th>
                <th>Minium</th>
                <th>Maximum</th>
              </tr>
              <tr>
                <th>Age at entry for self/spouse</th>
                <td>18 years</td>
                <td>65 years</td>
              </tr>
              <tr>
                <th>Age at entry for children</th>
                <td>91 days</td>
                <td>17 years</td>
              </tr>
              <tr>
                <th>Age at entry for parents</th>
                <td>18 years</td>
                <td>75 years</td>
              </tr>
              <tr>
                <th>Age at maturity</th>
                <td>-</td>
                <td>80 years</td>
              </tr>
              <tr>
                <th>Daily hospitalisation benefit</th>
                <td>Rs.1000 a day excluding ICU</td>
                <td>Rs.4000 a day excluding ICU</td>
              </tr>
              <tr>
                <th>Major surgical benefit</th>
                <td>Rs.1,00,000</td>
                <td>Rs.4,00,000</td>
              </tr>
            </table>
          </div>
          <Footer/>
      </div>
  )
}

export default HealthPlansScreen