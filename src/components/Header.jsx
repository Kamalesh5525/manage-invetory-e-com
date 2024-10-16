import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('users'); // Optionally clear users
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 bg-primary" >
      
      <div className="container-fluid">
      
        <div className="collapse navbar-collapse justify-content-center d-flex" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light "   to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light "   to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light "   to="/admin">Admin Panel</Link>
            </li>
         
            
            <li className="nav-item">
              <Link className="nav-link text-light "   to="/cart">Cart</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-light "   to="/order-history">Order History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light "   to="/">ProductCatalog</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link text-light    btn btn-link" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
