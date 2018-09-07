import * as React from 'react';
import Button from '../components/button';
import NavBar from '../components/NavBar';
import NavBarVertical from '../components/NavBarVertical';
import NavBarVerticalGroup from '../components/NavBarVerticalGroup';

class StyleGuide extends React.Component {
    public render() {
        return(
            <div>
                <Button color="grey" text="Login"/>
                <Button color="yellow" text="Logout"/>
                <NavBar />
                <NavBarVerticalGroup/>
            </div>
        );
    }
}

export default StyleGuide;