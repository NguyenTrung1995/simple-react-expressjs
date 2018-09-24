import * as React from 'react';
import Button from '../components/button';
import NavBar from '../components/NavBar';
import NavBarVerticalGroup from '../components/NavBarVerticalGroup';

class StyleGuide extends React.Component<any, any> {
    public render() {
        return(
            <div>
                <Button color="red" text="Login"/>
                <Button color="white" text="Logout"/>
                <NavBar />
                <NavBarVerticalGroup/>
            </div>
        );
    }
}

export default StyleGuide;