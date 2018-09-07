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
                <p>{this.props.state.session}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { state }
} 

export default connect(mapStateToProps)(Account);