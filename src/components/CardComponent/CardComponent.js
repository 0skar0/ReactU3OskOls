import React, { Component } from 'react';
import styles from './cardStyle.module.css';
import PropTypes from 'prop-types';

//Card-Component som renderar vad som passas in som children. Innehåller i princip bara en wrapper och ett state.
class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrHide: true,
    }
  }

  //Togglar statet mellan true och false. True så visas children. False så visas ingenting.
  toggleContent = () => {
    this.setState(prevState =>({
      showOrHide: !prevState.showOrHide,
    }))
  }

  render() {
    if (this.props.info === 'showContent') {
      return(
        <div className={`${styles.card} ${this.props.styling}`}>
          <div className="card-body">
            {this.props.children}
              {this.state.showOrHide ? <p>Sign in with something. I don't know.</p> : null}
            <button
            className="btn btn-secondary"
            onClick={this.toggleContent}
            >{this.state.showOrHide ? 'Hide' : 'Show'} Info</button>
          </div>
        </div>
      );
    }
    return (
      <div className={`${styles.card} ${this.props.styling}`}>
        <div className="card-body">
          {this.props.children}
          </div>
      </div>
    )

  }
}

export default CardComponent;

CardComponent.propTypes = {
  styling: PropTypes.string,
  showContent: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
