import Footer from "../components/Footer"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import contact_img from "../images/contact.jpg"
const ContactUsScreen = () => {
    return(
        <div >
            <Header/>
            <Navigation/>
            <table id="contact-table" className="container table align-middle">
                <tr>
                    <td colspan="2">
                        <img src={contact_img} alt="contact_img" height="0%" width ="100%"/>
                    </td>
                </tr>
                <tr>
                    <td>     
                        <div className="text-justify">
                        <h4>Contact Us</h4> 
                            The Manager - Customer Care,<br/>
                            LIC Life Insurance Corporation Of India ,<br/>
                            <strong>Email :</strong> support@lic.in<br/>
                            <strong>Call  :</strong>  1-800-275-900
                        </div>   
                    </td>
                    <td>  
                        <div className="text-justify" >
                            <br></br>
                            <h4>Need Help ? </h4> 
                            Do you have any questions? <br/>
                            Please do not hesitate to contact us directly. <br/>
                            <strong>Monday to Saturday : 08.00 a.m. to 08.00 p.m. <br/></strong>
                            Our team will come back to you <br/>
                            within a matter of hours to help you.
                            
                        </div>   
                    </td>
                </tr>
               
            </table>
            <Footer/>
        </div>
    )
}

export default ContactUsScreen