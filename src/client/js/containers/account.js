import * as React from 'react';
import { connect } from 'react-redux';

class Account extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.session ? 
                    <div>Welcome {this.props.session}</div>
                    :
                    <div>Account Empty</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const session = state.login.session;
    return { session }
} 

export default connect(mapStateToProps)(Account);