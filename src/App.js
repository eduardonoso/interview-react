import React, {useState,useEffect} from "react";
import Header from "./components/layout/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import AppContext from './components/AppContext';
import Authenticated from "./components/layout/Authenticated";
import Unauthenticated from "./components/layout/Unauthenticated";
import {userToken as userTokenStatic} from "./utils/token.js";

function App() {

  const [userToken, setUserToken] = useState();

  const appStore = {
    userToken: userToken,
    setUserToken
  };

  return (
    <AppContext.Provider value={appStore}>
      <div className="App">
        <Router>
          {userToken ? <Authenticated/> : <Unauthenticated/>}
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
