import * as React from 'react';
import axios from 'axios';
import '../../css/signin.scss';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

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
        axios.post('/api/signin', {
            email: this.state.email,
            password: this.state.password
          })
          .then((res) => {
            if (res.data) {
                const dispatch = this.props.dispatch;
                dispatch({ type: 'LOG_IN' , session: res.data});
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
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Mật khẩu" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Đăng nhập</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    const isLogin = state.login.isLogin;
    return { isLogin };
}

export default connect(mapStateToProps)(Signin);