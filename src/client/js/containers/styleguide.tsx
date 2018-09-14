import * as React from 'react';
import Button from '../components/button';
import NavBar from '../components/NavBar';
import NavBarVertical from '../components/NavBarVertical';
import NavBarVerticalGroup from '../components/NavBarVerticalGroup';
import FormInput from '../components/FormInput';
import ModalCart from '../components/ModalCart';

class StyleGuide extends React.Component {
    public render() {
        return(
            <div>
                <Button color="grey" text="Login"/>
                <Button color="yellow" text="Logout"/>
                <NavBar />
                <NavBarVerticalGroup/>
                <FormInput nameLabel="Full Name" nameInput="Input full name"/>
                <ModalCart />
            </div>
        );
    }
}

export default StyleGuide;