import React, {useState} from "react";
import {
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';

import AppContext from './components/AppContext';
import Authenticated from "./components/layout/Authenticated";
import Unauthenticated from "./components/layout/Unauthenticated";
import {userToken as USER_TOKEN} from "./utils/token.js";

function App() {

  const [userToken, setUserToken] = useState();

  const appContext = {
    userToken: userToken,
    setUserToken
  };

  return (
    <AppContext.Provider value={appContext}>
      <div className="App">
        <Router>
          {userToken ? <Authenticated/> : <Unauthenticated/>}
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
