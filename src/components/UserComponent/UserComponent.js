import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getUsersFromAPI from '../../HOCS/withHTTPRequests';

//Funktion som tar emot ett antal props. Returnerar (genom map-metoden) ett li-element för varje users som tas emot. Beroende på om color är true eller false får li-elementet antingen en blå-ish eller grön-ish färg.
function UserComponent(props) {
  let color = props.color;
  const trueColor = '#000099';
  const falseColor = '#009933';

  const [users, setAllUsers] = useState();


  //lägger till ett state för mina users med hooken useEffect. Här var min tanke att när den får nya props från min HOC så skulle den automatiskt köra en uppdatering och den nya användaren läggas till direkt. Men icke..
  useEffect(() => {
    setAllUsers(props.states.allUsers)
  })

  if (!users) {
    return <p>Loading...</p>
  }

  //Hade tänkt en liten fuling i stil med detta. Men lyckades inte få runOrNot till true (läs i HOC).
  // if (props.states.runOrNot) {
  //   props.fetchAllUsers();
  // }


    return (
      <div>
        <ul style={{padding: 0}}>
          {users.map((user, i) =>
            <Link
              to={`/user/${users[i].id}`}
              key={i}
              className="list-group-item"
              style={{color: color ? trueColor : falseColor}}>
              {user.name}
            </Link>
          )}

        </ul>
      </div>
    )
}

export default getUsersFromAPI(UserComponent);

UserComponent.propTypes = {
  users: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.number,
  isActive: PropTypes.bool,
  color: PropTypes.bool,
  userStates: PropTypes.bool,
  singleUserFunc: PropTypes.func,
  updateUserList: PropTypes.func,
  states: PropTypes.object,
}
