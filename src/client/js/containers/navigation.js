import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li><Link to="/">Navigating</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/styleguide">Style Guide</Link></li>
                <li>{ !this.props.session ? <Link to="/signin">Signin</Link> : <Link to="/signout">Sign out</Link> }</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    const session = state.login.session;
    return {session};
}

export default connect(mapStateToProps)(Navigation);