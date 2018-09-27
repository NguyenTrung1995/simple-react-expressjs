import * as React from 'react';
import Button from '../components/button';
import NavBar from '../components/NavBar';
import NavBarVerticalGroup from '../components/NavBarVerticalGroup';
import ButtonUI from '@material-ui/core/Button';

class StyleGuide extends React.Component<any, any> {
    public render() {
        return(
            <div>
                <Button color="red" text="Login"/>
                <Button color="white" text="Logout"/>
                <ButtonUI variant="contained" color="primary">Hello World</ButtonUI>
                <NavBar />
                <NavBarVerticalGroup/>
            </div>
        );
    }
}

export default StyleGuide;