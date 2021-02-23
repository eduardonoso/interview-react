import React, {useState} from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import TaskList from "../TaskList";
import HeaderAuth from "./HeaderAuth";

const Authenticated = () => {
  return <>
    <HeaderAuth/>
    <Switch>
      <Route path="/tasks" component={() => <TaskList/>}/>
    </Switch>
  </>
};

export default Authenticated;
