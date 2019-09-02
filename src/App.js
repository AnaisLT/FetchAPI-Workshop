import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
    }
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => this.setState({ users: data, isLoading: false }))
    .catch(error => this.setSate({ error }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Random Users</h1>
        {users.map((user) => {
          const { id, name, username, email } = user
          return <div key={id}>
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p> 
          </div>
        })}
      </div>
    );
  }
}

export default App;
