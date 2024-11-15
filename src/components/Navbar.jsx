import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ jwt, updateJwt }) => {
  const setLinkClass = ({ isActive, isPending }) => {
    let className = 'nav-link';
    if (isActive) {
      className += ' nav-link-active';
    }
    return className;
  };

  return (
    <div className="navbar-wrapper">
      <div>Navbar goes here</div>
      <nav>
        <NavLink to="/" className={setLinkClass}>
          Home
        </NavLink>

        {jwt ? (
          <a
            href="/auth"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              updateJwt(null);
            }}
          >
            Log Out
          </a>
        ) : (
          <NavLink to="/auth" className={setLinkClass}>
            Log in
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
