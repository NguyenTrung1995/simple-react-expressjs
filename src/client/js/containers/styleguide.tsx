import * as React from 'react';
import Button from '../components/button';
import NavBar from '../components/NavBar';
import ButtonUI from '@material-ui/core/Button';
import DropDown from '../components/DropDown';

class StyleGuide extends React.Component<any, any> {
    public render() {
        return(
            <div>
                <Button color="red" text="Login"/>
                <Button color="white" text="Logout"/>
                <ButtonUI variant="contained" color="primary">Hello World</ButtonUI>
                <NavBar />
                <DropDown />
            </div>
        );
    }
}

export default StyleGuide;