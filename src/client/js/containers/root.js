import * as React from 'react';
import axios from 'axios';
const dirname = 'http://localhost:3000';

class Root extends React.Component {
    render() {
        return(
            <div>
                <h1>Navigating</h1>
            </div>
        );
    }

    componentDidMount() {
        axios.get('/api/getInfo')
             .then(res => {
                 if (res.data) {
                    window.location.assign(dirname + '/home');
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

export default Root;