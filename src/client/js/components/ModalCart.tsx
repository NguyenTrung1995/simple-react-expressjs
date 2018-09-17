import * as React from 'react';
import FormInput from './FormInput';

import '../../css/organisms/modal-cart.scss';

class ModalCart extends React.Component<any, any> {
    
    constructor(props) {
        super(props);
        this.state =  {
            fullname: '',
            phoneNumber: '',
            email: '',
            address: ''
        }
        this.onChangeFullname = this.onChangeFullname.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
    }

    onChangeFullname(e) {
        this.setState({ fullname: e.target.value });
    }
    onChangePhoneNumber(e) {
        this.setState({ phoneNumber: e.target.value });
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangeAddress(e) {
        this.setState({ address: e.target.value });
    }

    public render() {
        console.log(this.state);
        return (
            <div className="modal-cart">
                <div className="modal-cart--content">
                    <FormInput nameLabel="Full Name" nameInput="Input full name" onChangeValue={this.onChangeFullname}/>
                    <FormInput nameLabel="Phone Number" nameInput="Input phone number" onChangeValue={this.onChangePhoneNumber}/>
                    <FormInput nameLabel="Email" nameInput="Input email" onChangeValue={this.onChangeEmail}/>
                    <FormInput nameLabel="Address" nameInput="Input address" onChangeValue={this.onChangeAddress}/>
                </div>
            </div>
        );
    }
}

export default ModalCart;