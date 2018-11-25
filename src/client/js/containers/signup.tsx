import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
var md5 = require('md5');

class Signup extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
        name: '',
        email: '',
        password: ''
    }
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
      this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
      this.setState({ password: e.target.value });
  }

  signUp() {
      axios.post('/api/signup', {
          name: this.state.name,
          email: this.state.email,
          password: md5(this.state.password)
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  
  render() {
      return (
          <div>
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign up</h2>
              <label htmlFor="inputName" className="sr-only">Name</label>
              <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autoFocus />
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
              
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
            </form>
            <div>
              <Link to="/">{'Signin'}</Link>
            </div>
          </div>    
      )
    }
  }

  export default Signup;