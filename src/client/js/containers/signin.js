import * as React from 'react';
import axios from 'axios';
import '../../css/signin.scss';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    signIn() {
        console.log(this.state.email, this.state.password);
        axios.post('/api/signin', {
            email: this.state.email,
            password: this.state.password
          })
          .then(function (res) {
            if (res.data) {
                window.location.assign('http://localhost:3000/home');
            }
            else {
                window.location.assign('http://localhost:3000/');
            }
          })
          .catch(function (err) {
                console.log(err);
          });
    }

    render() {
        return (
            <form className="form-signin">
                <h2 className="form-signin-heading">Đăng nhập</h2>
                <label htmlFor="inputEmail" className="sr-only">Nhập địa chỉ email
                </label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Mật khẩu" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Đăng nhập</button>
            </form>
        );
    }
}

export default Signin;