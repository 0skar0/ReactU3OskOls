import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getUsersFromAPI from '../../HOCS/withHTTPRequests';
import CardComponent from '../CardComponent/CardComponent';
import UserComponent from '../UserComponent/UserComponent';
import styles from './dashboardStyle.module.css';

//Komponent som hanterar fyra states, emailToConcat, usernameToConcat, color och userToConcat. color passas till UserComponent. Övriga states är för mina inputfält. Komponenten renderar CardComponent och UserComponent.
class DashboardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: true,
      userToConcat: [''],
      usernameToConcat: [''],
      emailToConcat: [''],
    }
  }

  //Togglar color mellan true och false, som sedan passas ner till UserComponent och hanteras.
  toggleColorFunc = () => {
    this.setState(prevState =>  ({
      color: !prevState.color,
    }));
  }


  //Hanterar inputfälten beroende på dess 'name' ist för att skriva en handleChange för varje input.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    return(
      <div className={styles.wrapper}>
        <div className={styles.dashboard}>
          <CardComponent>
            <UserComponent
              color={this.state.color}
            />
            <button
              style={{width: '100%'}}
              className="btn btn-info"
              onClick={this.toggleColorFunc}
            >Toggle Colors</button>
          </CardComponent>

          <CardComponent styling={styles.manageUserWrapper}>
            <div className={styles.buttonWrapper}>
              <input
                type="text"
                name="userToConcat"
                value={this.state.userToConcat}
                onChange={this.handleChange}
                className="form-control mb-2"
              placeholder="Name">
              </input>
              <input
                type="text"
                name="usernameToConcat"
                value={this.state.usernameToConcat}
                onChange={this.handleChange}
                className="form-control mb-2"
              placeholder="Nickname">
              </input>
              <input
                type="email"
                name="emailToConcat"
                value={this.state.emailToConcat}
                onChange={this.handleChange}
                className="form-control mb-2"
              placeholder="Email">
              </input>

              <button
                className="btn btn-success mb-2"
                onClick={() => this.props.updateUserList(this.state.userToConcat, this.state.usernameToConcat, this.state.emailToConcat)}
              >Add User</button>
              <button
                className="btn btn-danger"
                onClick={() => this.removeUser()}
              >Remove User</button>
            </div>
          </CardComponent>
        </div>
      </div>
    )
  }
}

export default getUsersFromAPI(DashboardComponent);

DashboardComponent.propTypes = {
  singleUserFunc: PropTypes.func,
  updateUserList: PropTypes.func,
  states: PropTypes.object,
}
