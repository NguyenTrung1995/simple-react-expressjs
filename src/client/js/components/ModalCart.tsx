import * as React from 'react';
import FormInput from './FormInput';

import '../../css/organisms/modal-cart.scss';

class ModalCart extends React.Component {
    public render() {
        return (
            <div className="modal-cart">
                <div className="modal-cart--content">
                    <FormInput nameLabel="Full Name" nameInput="Input full name"/>
                    <FormInput nameLabel="Phone Number" nameInput="Input phone number"/>
                    <FormInput nameLabel="Email" nameInput="Input email"/>
                    <FormInput nameLabel="Address" nameInput="Input address"/>
                </div>
            </div>
        );
    }
}

export default ModalCart;