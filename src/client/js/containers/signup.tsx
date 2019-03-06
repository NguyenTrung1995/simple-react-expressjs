import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormInput from '../components/FormInput';
import styled from 'styled-components';
var md5 = require('md5');

const SignUpContainer = styled.div`
  text-align: center;

  .form-input {
    justify-content: center;
    align-items: center;

    label {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }

  button {
    margin-top: 10px;
  }
`

const StatusDescription = styled.p<{status?: string}>`
  text-align: center;
  color: ${props => props.status === 'success' ? 'green' : props.status === 'error' ? 'red' : 'blue'};
`

class Signup extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
        username: '',
        // email: '',
        password: '',
        isRegistered: false,
        isLoading: false,
        hasErrored: false
    }
  }
  handleNameChange(e) {
    this.setState({ username: e.target.value });
  }

  // handleEmailChange(e) {
  //     this.setState({ email: e.target.value });
  // }

  handlePasswordChange(e) {
      this.setState({ password: e.target.value });
  }

  signUp() {
    this.setState({isLoading: true});
    setTimeout(() => {
      axios.post('/api/signup', {
        username: this.state.username,
        // email: this.state.email,
        password: md5(this.state.password)
      })
      .then(res => {
        if (res.data === 'Succeed') {
          this.setState({isRegistered: true, isLoading: false, hasErrored: false})
        }
        else {
          this.setState({hasErrored: true, isLoading: false});
        }
      })
      .catch(error => {
        this.setState({hasErrored: true});
      });
    }, 1000)
  }
  
  render() {
    if (this.state.isLoading) {
      return (<StatusDescription>Loading...</StatusDescription>)
    }
    if (this.state.isRegistered) {
      return (<StatusDescription status="success">Register account successfully!</StatusDescription>)
    }
    if (this.state.hasErrored) {
      return (<StatusDescription status="error">Error register(Maybe username has exist.)</StatusDescription>)
    }
    return (
      <SignUpContainer>
          <FormInput nameLabel="Username" nameInput="Username" onChangeValue={this.handleNameChange}/>
          <FormInput type="password" nameLabel="Password" nameInput="Password" onChangeValue={this.handlePasswordChange}/>
          <button onClick={this.signUp}>Sign Up</button>
      </SignUpContainer>    
    );
  }
}

  export default Signup;