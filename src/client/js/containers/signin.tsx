import * as React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { fetchSessionUser, handleLogIn } from '../actions';
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
            password: ''
        }
    }

    handleUserNameChange(e) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    componentDidMount() {
        this.props.fetchSessionUser();
    }

    signIn() {
        const user = {
            username: this.state.username,
            password: md5(this.state.password)
        }
        this.props.handleLogIn(user);
        // this.setState({ username: '', password: '' });
    }

    render() {
        const checkValidInput = this.state.username !== '' && this.state.password !== '';
        return (
            this.props.isLogin ? <Redirect to="/" /> :
            <form className="form-signin">
                <h2 className="form-signin-heading">Đăng nhập</h2>
                <label htmlFor="inputEmail" className="sr-only">Nhập địa chỉ email
                </label>
                <input type="text" value={this.state.username} onChange={this.handleUserNameChange} id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Mật khẩu" required />
                <button disabled={!checkValidInput} className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Đăng nhập</button>
                { this.props.isFailed &&
                    <label>Username or password incorrectly</label>
                }
            </form>
        );
    }
}

function mapStateToProps(state) {
    const {isLogin, isFailed} = state.login;
    return { isLogin, isFailed };
}

export default connect(mapStateToProps, { fetchSessionUser, handleLogIn })(Signin);