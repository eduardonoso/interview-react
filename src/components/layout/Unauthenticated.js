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
import TaskList from "../TaskList";
import Body from "./Body";
import Clock from "../Clock";


const Unauthenticated = () => {
  return <>
    <Header/>
    <Body>
      <Switch>
        <Route path="/login" component={() => <Login/>}/>
        <Route path="/register" component={() => <Register/>}/>
        <Route path="/tasks" component={() => <TaskList/>}/>
        <Route path="/clock" component={() => <Clock/>}/>
        <Route path="/" component={() => <Home/>}/>
      </Switch>
    </Body>
  </>
};

export default Unauthenticated;

