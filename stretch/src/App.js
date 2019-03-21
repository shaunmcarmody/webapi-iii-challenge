import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import User from './components/User';
import UserList from './components/UserList';

const App = () => (
  <div className="App">
    <Route exact path="/" component={UserList} />
    <Route exact path={`/:id/posts`} component={props => <User {...props} /> } />
  </div>
)

export default App;
