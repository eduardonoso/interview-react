import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AppContext from "../AppContext";


const HeaderAuth = () => {

  const appContext = useContext(AppContext);

  const handleLogout = () => {
    appContext.setUserToken();
  };

  return <div className="header" style={{display: 'flex'}}>
    <h3>Sunrise Interview</h3>
    <div className="headerLinks">
      <Link to="/tasks">Tasks</Link>
      <Link to="/logout" onClick={handleLogout}>Logout</Link>
    </div>
  </div>
};

export default HeaderAuth;
