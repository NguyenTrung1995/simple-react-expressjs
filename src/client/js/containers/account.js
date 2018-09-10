import * as React from 'react';
import { connect } from 'react-redux';

class Account extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Hello Account</p>
                <p>{this.props.session}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const session = state.login.session;
    return { session }
} 

export default connect(mapStateToProps)(Account);