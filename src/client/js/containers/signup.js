import * as React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
    render() {
        return (
          <div>
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign up</h2>
              <label htmlFor="inputName" className="sr-only">Name</label>
              <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autoFocus />
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
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