import * as React from 'react';
import Button from '../components/button';
import NavBar from '../components/NavBar';

class StyleGuide extends React.Component {
    public render() {
        return(
            <div>
                <Button color="grey" text="Login"/>
                <Button color="yellow" text="Logout"/>
                <NavBar/>
            </div>
        );
    }
}

export default StyleGuide;