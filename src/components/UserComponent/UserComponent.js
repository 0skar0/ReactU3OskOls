import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


//Funktion som tar emot ett två props; users och color. Returnerar (genom map-metoden) ett li-element för varje users som tas emot. Beroende på om color är true eller false får li-elementet antingen en blå-ish eller grön-ish färg.
function UserComponent(props) {
  let color = props.color;
  const trueColor = '#000099';
  const falseColor = '#009933';

  if (!props.users) {
    return <p>Loading...</p>
  }

    return (
      <div>
        <ul style={{padding: 0}}>
          {props.users.map((user, i) =>
            <Link
              to={`/user/${props.users[i].id}`}
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

export default UserComponent;

UserComponent.propTypes = {
  users: PropTypes.array,
  color: PropTypes.bool,
}
