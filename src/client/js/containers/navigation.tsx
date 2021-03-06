import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navigation extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        axios.get("/api/signout")
            .then((res) => {
                const dispatch = this.props.dispatch;
                dispatch({ type: 'LOG_OUT'});
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <ul>
                <li><Link to="/">Navigating</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/styleguide">Style Guide</Link></li>
                <li><a onClick={this.signOut}>Sign Out</a></li>
                <li><Link to="/cart">Cart({this.props.cartLength})</Link></li>
                { this.props.isLogin===false &&
                    <li><Link to="/signin">Sign In</Link></li>
                }
                { this.props.isLogin &&
                    <li><a onClick={this.signOut}>Sign Out</a></li>
                }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    const isLogin = state.login.isLogin;
    const cartLength = state.cart.length;
    return {isLogin, cartLength};
}

export default connect(mapStateToProps)(Navigation);