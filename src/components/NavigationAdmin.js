import {Link} from 'react-router-dom';

const NavigationAdmin = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow bg-warning">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Policy
                </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link to="/admin/add_policy" className="dropdown-item" >Add New Policy</Link></li>
                    <li><Link to="/admin/show_policies" className="dropdown-item" >Withdraw Policy</Link></li>
                 </ul>
              </li>
              <li className="nav-item">
                <Link to="/admin/add_new_manager" className="nav-link">Add New Manager</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/list_cust" className="nav-link" >List Of PolicyHolders</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/list_managers" className="nav-link" >List Of Managers</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/list_agent" className="nav-link" >List Of Agents</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationAdmin