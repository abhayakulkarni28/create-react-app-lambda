import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div >
    
      <nav  className="navbar navbar-expand-lg navbar-light shadow bg-warning">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
                </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link to="/products/insurance-plans" className="dropdown-item" >Insurance Plans</Link></li>
                    <li><Link to="/products/health-plans" className="dropdown-item" >Health Plans</Link></li>
                 </ul>
              </li>
              <li className="nav-item">
                <Link to="/locators" className="nav-link" >Locators</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation