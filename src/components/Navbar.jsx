import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ jwt, updateJwt }) => {
  return (
    <div className="navbar-wrapper">
      <div>Navbar goes here</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">Log in</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
