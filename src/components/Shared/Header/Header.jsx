import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../logos/Group 1329.png";
import "./Header.css";
const Header = () => {
    const {user, handleSignOut} = useAuth()
    return (
      <nav>
      <Navbar expand='lg'>
        <div className='container'>
          
          <img src={logo} alt="" className="header-logo img-fluid"/>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className='ms-auto fw-bold'>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="*">
                Donation
              </Nav.Link>
              <Nav.Link as={NavLink} to='/myEvents'>
                Events
              </Nav.Link>
              <Nav.Link as={NavLink} to="*">
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to='/login'>
                {
                  user.email? <span className="navbar-btn" onClick={handleSignOut}>Logout</span>
                   : <span className="navbar-btn">Login</span>
                }
              </Nav.Link>
              
              <Nav.Link as={NavLink} to='/admin'>
                <span className="navbar-btn">Admin</span>
              </Nav.Link>
               <Nav.Link>
               <span className="user-name">
               {user.displayName}
               </span>
               </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      </nav>
    );
};

export default Header;