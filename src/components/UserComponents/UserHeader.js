import logo from "../../images/lic-logo.png"; 
import {Link} from 'react-router-dom';
import profile_img from "../../images/profile.png";
const UserHeader = () => {
  return (
    <div >
      <nav id="navbar-example2" className="navbar navbar-light bg-light">
        <Link to="/"><img src={logo} alt="Logo" width="150px" height="100px"/></Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <img className = "customer-profile-img-card dropdown-toggle" src={profile_img} alt="profile_img"/>
          </li> 
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link to="#" className="dropdown-item" >Update Profile</Link></li>
              <li><Link to="#" className="dropdown-item" >Logout</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#mdo">About Us</a>
          </li>  
          <li className="nav-item">
            <Link to="/insurance-info" className="nav-link">Know your Life Insurance</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">Contact us</Link>
          </li>    
        </ul>
      </nav>
    </div>
  )
}

UserHeader.defaultProps = {
  title: '',
}

export default UserHeader
