import Footer from "../components/Footer"
import Header from "../components/Header"
import Navigation from "../components/Navigation"

const AboutUsScreen = () => {
  return(
      <div >
          <Header/>
          <Navigation/>
          <div className="about_us_container">
            <h4 style={{textAlign: "center"}}>About Us</h4>
            <p>
            Every day we wake up to the fact that more than 250 million lives are part of our family called LIC.
            </p>
            <p>
            We are humbled by the magnitude of the responsibility we carry and realise the lives that are associated with us are very valuable indeed.
            </p>
            <p>
            Though this journey started over six decades ago, we are still conscious of the fact that, while insurance may be a business for us, being part of millions of lives every day for the past 61 years has been a process called TRUST.
            </p>
            <p style={{color: "navy"}}>
            <strong>A true saga Of Trust.</strong>
            </p>
          </div>
          <Footer/>
      </div>
  )
}

export default AboutUsScreen