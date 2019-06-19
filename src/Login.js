
import React, { Component } from 'react';
import './App.css';
import 'bootstrap';

const user_list = [{pankaj:'pankaj'},{user:'user'},{quill:'quill'}];
// console.log(user_list.length)

const user_li =  localStorage.getItem('user_list')
    const parse_li = JSON.parse(user_li)
// console.log(parse_li.length)
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      user: [],
      err: false
      
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  componentWillMount(){
    localStorage.setItem('user_list',JSON.stringify(user_list))
    localStorage.setItem('auth',false)
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    // console.log(user_li.length)
    this.setState({
      user: user_li
    })
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    

    // console.log(user_li.length);

    // for( var i=0;i<user_li.length;i++){
    //   console.log(i)
    // }

    parse_li.map(c =>{
        if((this.state.username == Object.keys(c))&&(this.state.password == Object.values(c)) ){
          console.log(this.state.username == Object.keys(c),this.state.password == Object.values(c))
          localStorage.setItem('auth',true)   ;
         window.location = '/todoapp';
        }
        else{
          // alert('user does not exist')
          this.setState({
            error: true
          })
          console.log('user')
        }
    })

      localStorage.setItem('name',this.state.username)
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }



  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="container" >
      <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
        <form onSubmit={this.handleSubmit} className="form-signin">
          
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <div classNameName="form-label-group">
          <label>User Name</label>
          <input type="text" data-test="username" className="form-control" value={this.state.username} onChange={this.handleUserChange} />
          </div>
          <div className="form-label-group">
          <label>Password</label>
          <input type="password" data-test="password"  className="form-control" value={this.state.password} onChange={this.handlePassChange} />
          </div>
          <br/>
          <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        {this.state.err?<div>
            user does not exist
        </div>:null}

        
      </div>
    );
  }
}

export default Login;