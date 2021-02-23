import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AppContext from "../AppContext";


const Header = () => {

  return <div className="header" style={{display: 'flex'}}>
    <h3>Sunrise Integration React Assessment</h3>
    <div className="headerLinks">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </div>
};

export default Header;
