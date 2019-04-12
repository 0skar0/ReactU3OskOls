import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import DashBoardScreen from './screens/DashBoardScreen/DashBoardScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import UserScreen from './screens/UserScreen/UserScreen';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBarComponent/>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/dashboard" component={DashBoardScreen} />
        <Route path="/user/:id" component={UserScreen}/>
        <Route path="/user" exact component={UserScreen}/>
      </Router>
    );
  }
}

export default App;
