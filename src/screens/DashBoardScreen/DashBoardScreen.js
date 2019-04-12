import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dashboardcomponent from '../../components/DashboardComponent/DashboardComponent';

// Renderar DashboardComponent kort och gott.
class DashBoardScreen extends Component {
  render() {
    return (
      <Dashboardcomponent/>
    )
  }
}

export default DashBoardScreen;

DashBoardScreen.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
}
