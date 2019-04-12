import React, { Component } from 'react';

export default function getUsersFromAPI (WrappedComponent) {
  return  class extends Component {
    state = {
      allUsers: null,
      singleUser: null,
    }

    componentDidMount() {
      this.fetchAllUsers();
    }

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
      fetch('http://api.softhouse.rocks/users/11', {
        method: 'PUT',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then((res) => res.json())
      .then(res => {
        this.setState(prevState =>({
          allUsers: [...prevState.allUsers, res],
        }))
      } )
      console.log(this.state.allUsers);
    }

    fetchSingleUser = (id) => {
      fetch('http://api.softhouse.rocks/users/' + id)
      .then((res) => res.json()
      .then((res) => this.setState({
        singleUser: res,
      })))
    }

    fetchAllUsers = () => {
      fetch('http://api.softhouse.rocks/users')
      .then((res) => res.json()
      .then((res) => this.setState({
        allUsers: res,
      })))
    }
    render() {
      console.log(this.state.allUsers);
      if (!this.state.allUsers) {
        return <div>VÄNTA FÖR FAN</div>
      }


      return <WrappedComponent {...this.props} singleUserFunc={this.fetchSingleUser} updateUserList={this.addUser} states={this.state}/>
    }
  };
}
