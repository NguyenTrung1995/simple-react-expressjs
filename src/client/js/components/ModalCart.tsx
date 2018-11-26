import * as React from 'react';
import FormInput from './FormInput';

// import '../../css/organisms/modal-cart.scss';
import Button from './Button';

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

    public onChangeFullname(e) {
        this.setState({ fullname: e.target.value });
    }
    public onChangePhoneNumber(e) {
        this.setState({ phoneNumber: e.target.value });
    }
    public onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    public onChangeAddress(e) {
        this.setState({ address: e.target.value });
    }

    public callbackFn = () => {
        this.props.orderFunction(this.state);
    }

    public render() {
        return (
            <div className={ !this.props.isCheckOutModal ? "modal-cart hidden-modal" : "modal-cart"}>
                <div className="modal-cart--content">
                    <span className="close" onClick={this.props.closeCheckOutModal}>&times;</span> <br/>
                    <div className="modal-cart--content-form">
                        <div className="modal-cart--content-form--left">
                            <FormInput nameLabel="Full Name" nameInput="Input full name" onChangeValue={this.onChangeFullname}/>
                            <FormInput nameLabel="Phone" nameInput="Input phone number" onChangeValue={this.onChangePhoneNumber}/>
                            <FormInput nameLabel="Email" nameInput="Input email" onChangeValue={this.onChangeEmail}/>
                            <FormInput nameLabel="Address" nameInput="Input address" onChangeValue={this.onChangeAddress}/>
                        </div>
                        <div className="modal-cart--content-form--right">
                            {
                                this.props.cart.map((item, index) => {
                                    return <p key={index}>{item.title} x {item.quantity}</p>
                                })
                            }
                            <p className="modal-cart--total__price">Total Price: {this.props.totalPrice}</p>
                        </div>
                    </div>
                    <button className="btn btn-green" onClick={this.callbackFn}>Check out</button>
                </div>
            </div>
        );
    }
}

export default ModalCart;