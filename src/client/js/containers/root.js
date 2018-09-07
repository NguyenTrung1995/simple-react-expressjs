import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const dirname = 'http://localhost:3000';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Navigating</h1>
            </div>
        );
    }

    componentWillMount() {
        axios.get('/api/getInfo')
             .then(res => {
                 if (res.data) {
                    const dispatch = this.props.dispatch;
                    dispatch({ type: 'LOG_IN' , session: res.data});
                    window.location.assign(dirname + '/home');
                    console.log(this.props.session);
                 }
                 else {
                    window.location.assign(dirname + '/signin');
                 }
             })
             .catch(err => {
                 console.log(err);
             })
    }
}

function mapStateToProps(state) {
    const session = state.session;
    console.log(session);
    return { session };
}

export default connect(mapStateToProps)(Root);