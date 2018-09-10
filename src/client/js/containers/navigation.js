import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navigation extends React.Component {
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
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/styleguide">Style Guide</Link></li>
                <li>{ this.props.isLogin === false ? <Link to="/signin">Sign In</Link> : <a onClick={this.signOut}>Sign Out</a> }</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    const isLogin = state.login.isLogin;
    return {isLogin};
}

export default connect(mapStateToProps)(Navigation);