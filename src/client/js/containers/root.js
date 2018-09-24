import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // this.props.session ? <Redirect to="/home" /> : <Redirect to="/signin" />
            <Redirect to="/home" />
        );
    }
}

function mapStateToProps(state) {
    const session = state.login.session;
    return {session};
}

export default connect(mapStateToProps)(Root);