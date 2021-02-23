import React, {useState} from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import TaskList from "../TaskList";
import HeaderAuth from "./HeaderAuth";
import Body from "./Body";
import LoggedIn from "../LoggedIn";
import Clock from "../Clock";

const Authenticated = () => {
  return <>
    <HeaderAuth/>
    <Body>
      <Switch>
        <Route path="/tasks" component={() => <TaskList/>}/>
        <Route path="/clock" component={() => <Clock/>}/>
        <Route path="/login" component={() => <LoggedIn/>}/>
        <Route path="/register" component={() => <LoggedIn/>}/>
      </Switch>
    </Body>
  </>
};

export default Authenticated;
