import React from 'react';
import {Link} from 'react-router-dom';
import './App.css'

const username = localStorage.getItem('name')

class TodoHeader extends React.Component {

  logout = () => {
    localStorage.clear();
    // this.history.push("/");
  }
    render () {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ToDo App</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="row">
        <div className="col-4"></div>
        <div className="col-4" style={{paddingLeft:"20%"}}></div>
        <div className="col-4" style={{paddingLeft:"20%"}}>{username}&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/'>
        <span className="glyphicon glyphicon-off" aria-hidden="true" onClick={this.logout} ></span>
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{paddingLeft:"50%"}}>Logout</button> */}
        </Link></div>
            
        </div>
        </div>
      </nav>
      );
    }
  }

export default TodoHeader