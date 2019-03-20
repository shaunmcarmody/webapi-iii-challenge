import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/users/')
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
        <div className="App">
            {
                this.state.users.map(user => (
                  <div key={user.id}>
                    <Link to={`${user.id}/posts`} id={user.id} >{user.name}</Link>
                  </div>
                ))
            }
        </div>
    )
  }
}

export default UserList;
  