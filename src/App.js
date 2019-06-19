import React from 'react';
import ToDoApp from './ToDoApp';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router,Route,browserHistory } from 'react-router-dom';
import AuthRoute from './AuthRoute';

function App() {
  return (
    <div className="App">
        <Router>
        <div>
          <Route exact path="/" component={Login} />
          <AuthRoute  path="/todoapp"  component={ToDoApp} />
        </div>
        </Router>
    </div>
  );
}

export default App;
