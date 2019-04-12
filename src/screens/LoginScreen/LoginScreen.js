import React, { Component } from 'react';

import CardComponent from '../../components/CardComponent/CardComponent';
import PropTypes from 'prop-types';

//LoginScreen som renderar CardComponent där jag skickar med en sträng.
class LoginScreen extends Component {

  //Metod för att navigera till Dashboard genom att pusha in /dashboard i history.
  navigateToDashboard = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="centerContent">
        <CardComponent info="showContent">
          <input className="form-control mb-2"></input>
          <button
          className="btn btn-success"
          onClick={this.navigateToDashboard}>Login</button>
          <hr/>
        </CardComponent>
      </div>
    )
  }
}

export default LoginScreen;

LoginScreen.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
}
