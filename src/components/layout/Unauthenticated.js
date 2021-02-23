import React, {useState} from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Login from "../Login";
import Register from "../Register";
import Home from "../Home";


const Unauthenticated = () => {
  return <>
    <Header/>
    <Switch>
      <Route path="/login" component={() => <Login/>}/>
      <Route path="/register" component={() => <Register/>}/>
      <Route path="/" component={() => <Home/>}/>
    </Switch>
  </>
};

export default Unauthenticated;

