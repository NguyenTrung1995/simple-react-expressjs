import * as React from 'react';
import Button from '../components/button';
import NavBar from '../components/NavBar';
import NavBarVerticalGroup from '../components/NavBarVerticalGroup';
import ModalCart from '../components/ModalCart';

class StyleGuide extends React.Component {
    public render() {
        return(
            <div>
                <Button color="red" text="Login"/>
                <Button color="white" text="Logout"/>
                <NavBar />
                <NavBarVerticalGroup/>
                <ModalCart />
            </div>
        );
    }
}

export default StyleGuide;