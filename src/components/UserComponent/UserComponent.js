import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getUsersFromAPI from '../../HOCS/withHTTPRequests';

//Funktion som tar emot tre props; color, userStates och users. Returnerar (genom map-metoden) ett li-element för varje users som tas emot. Beroende på om color är true eller false får li-elementet antingen en blå-ish eller grön-ish färg. Beroende på om userState är true elr false renderas två olika listor, en med 'true' users eller en med 'false' users.

function UserComponent(props) {
  let color = props.color;
  const trueColor = '#000099';
  const falseColor = '#009933';

  const [users, setAllUsers] = useState();

  useEffect(() => {
    setAllUsers(props.states.allUsers)
  })

  if (!users) {
    return <p>W8</p>
  }

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
}
