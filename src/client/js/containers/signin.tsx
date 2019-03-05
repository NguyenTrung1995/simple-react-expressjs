import * as React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
var md5 = require('md5');

class Signin extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            username: '',
            password: '',
            errLogin: false
        }
    }

    handleUserNameChange(e) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    signIn() {
        axios.post('/api/signin', {
            username: this.state.username,
            password: md5(this.state.password)
          })
          .then((res) => {
            console.log(res.data);
            if (res.data) {
                const dispatch = this.props.dispatch;
                dispatch({ type: 'LOG_IN' , session: res.data});
            }
            else {
                this.setState({ errLogin: true })
            }
          })
          .catch((err) => {
                console.log(err);
          });
    }

    render() {
        return (
            this.props.isLogin ? <Redirect to="/" /> :
            <form className="form-signin">
                <h2 className="form-signin-heading">Đăng nhập</h2>
                <label htmlFor="inputEmail" className="sr-only">Nhập địa chỉ email
                </label>
                <input type="text" onChange={this.handleUserNameChange} id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Mật khẩu" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Đăng nhập</button>
                { this.state.errLogin &&
                    <label>Username or password incorrectly</label>
                }
            </form>
        );
    }
}

function mapStateToProps(state) {
    const isLogin = state.login.isLogin;
    return { isLogin };
}

export default connect(mapStateToProps)(Signin);