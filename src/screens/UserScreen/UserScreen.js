import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './userWrapperStyle.module.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import getUsersFromAPI from '../../HOCS/withHTTPRequests';


//UserScreen som renderar min CardComponent med ett id. Om inget id passas med redirectas man till LoginScreen ("/").
function UserScreen(props) {

  const { match } = props;

  if (!match.params.id) {
    return (
      <Redirect from="/user" to="/" />
    )
  }

    const [user, setUser] = useState({});
    const [showOrHide, toggleAddress] = useState(false);

    let userID = props.match.params.id;

    //ropar på min fetchSingleUser i HOC med ett ID från params.
    useEffect(() => {
      props.singleUserFunc(userID);
    }, [])

    //sätter mitt userstate med singleUser från HOC.
    useEffect(() => {
      setUser(props.states.singleUser);
    })

    if (!user) {
      return <div>VÄNTA</div>
    }

    return (
      <div className="centerContent" style={{marginTop: '2rem'}}>
        <CardComponent>
          <div className={styles.userWrapper}>
            <i className="fas fa-user fa-6x"></i>
            <h5>{user.username}</h5>
            <p className="text-secondary">{user.name}</p>
            <p>{user.email}</p>
            { showOrHide ? <span>
              <p>{user.address.city}</p>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
            </span> : null}

            <button
              className="btn btn-info" style={{marginTop: '10px'}}
              onClick={() => toggleAddress(!showOrHide)}
            >{showOrHide ? 'Hide' : "Show"} Address</button>
          </div>
        </CardComponent>
      </div>
    )
  }

export default getUsersFromAPI(UserScreen);

UserScreen.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
}
