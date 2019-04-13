import React, { Component } from 'react';

//HOC som sköter alla mina API-anrop.
export default function getUsersFromAPI (WrappedComponent) {
  return  class extends Component {
    state = {
      allUsers: null,
      singleUser: null,
    }

    //Ropar på fetchAllUsers när componenten körs.
    componentDidMount() {
      this.fetchAllUsers();
    }

    //Lägger till en user med POST och sätter ett nytt state('gamla' användare plus den nya användaren).
    addUser = (user, nickname, email) => {
      const newUser = {
      name: user,
      username: nickname,
      email: email,
      address: {
        street: 'Black Farmers Street',
        suite: 'Kalle Ninja',
        city: 'Österlen',
        zipcode: 'mock zip',
        geo: {
          lat: 0,
          lng: 0
        }
      }
    }
      //Det kan råka vara en PUT ist för en POST här.. Hoppas jag inte glömmer att ändra det. Vill inte POSTA upp för många användare när jag testat.
      fetch('http://api.softhouse.rocks/users/11', {
        method: 'PUT',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({
          allUsers: [res, ...prevState.allUsers],
          //Här har jag försökt sätta ett state 'runOrNot' till true, när jag loggar mina states så får den true, sen false, sen true och false igen. Fattar inte riktigt det beteendet.
        }))
      })

    }

    //Hämtar en user baserat på id:t metoden får in som argument.
    fetchSingleUser = (id) => {
      fetch('http://api.softhouse.rocks/users/' + id)
      .then((res) => res.json()
      .then((res) => this.setState({
        singleUser: res,
      })))
    }

    //Hämtar alla users och sätter dom i mitt state.
    fetchAllUsers = () => {
      fetch('http://api.softhouse.rocks/users')
      .then((res) => res.json()
      .then((res) => this.setState({
        allUsers: res,
      })))
    }
    render() {
      if (!this.state.allUsers) {
        return <div>Loading...</div>
      }


      return <WrappedComponent {...this.props} singleUserFunc={this.fetchSingleUser} fetchAllUsers={this.fetchAllUsers} updateUserList={this.addUser} states={this.state}/>
    }
  };
}
