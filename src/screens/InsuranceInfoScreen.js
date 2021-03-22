import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import know_your_insurance from '../images/home_page.jpg'

const InsuranceInfoScreen = () => {
  return(
  <div>
    <Header />
    <Navigation />
    <div className="insurance_info_container">
      <h5 style={{textAlign: "center"}}>What Is Life Insurance?</h5>
      <img src={know_your_insurance} alt="image" id="insurance-info-img" height="10%" width="20%" className="know_your_insurance_img"></img>
      <p>Life insurance is a contract that pledges payment of an amount to the person assured (or his nominee) on the happening of the event insured against.</p>
      <p>The contract is valid for payment of the insured amount during:</p>
      <ul>
        <li>The date of maturity, or</li>
        <li>Specified dates at periodic intervals, or</li>
        <li>Unfortunate death, if it occurs earlier.</li>
      </ul>
      <p>Among other things, the contract also provides for the payment of premium periodically to the Corporation by the policyholder. Life insurance is universally acknowledged to be an institution, which eliminates 'risk', substituting certainty for uncertainty and comes to the timely aid of the family in the unfortunate event of death of the breadwinner.</p>
    </div>
    <Footer />
  </div>
  )
}


export default InsuranceInfoScreen


