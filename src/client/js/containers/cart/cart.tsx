import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CartItem from './cart-item';
import ModalCart from '../../components/ModalCart';
import '../../../css/organisms/cart.scss';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class Cart extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            isCheckOutModal: false
        }
        this.openCheckOutModal = this.openCheckOutModal.bind(this);
        this.closeCheckOutModal = this.closeCheckOutModal.bind(this);
    }

    orderFunction = (orderInfor) => {
        axios.post('/api/order', {
                name: orderInfor.fullname,
                phone: orderInfor.phoneNumber,
                email: orderInfor.email,
                address: orderInfor.address,
                package: [...this.props.cart]
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    openCheckOutModal = () => {
        this.setState({ isCheckOutModal: true })
    }

    closeCheckOutModal = () => {
        this.setState({ isCheckOutModal: false })
    }

    render() {
        const totalPrice = this.props.cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.quantity * currentItem.price;
        }, 0);
        const classNameCart = "mini-cart";
        const cartItems = this.props.cart.sort((a, b) => a.id - b.id);
        return (
            <div className={this.props.isToggleCart ? classNameCart + " isToggleCart" : classNameCart}>
                <div className="mini-cart__top">
                    <span className="cart-close" onClick={this.props.closeCart}></span>
                    <p className="mini-cart__top--title">YOUR CART</p>
                    <span className="mini-cart-icon" onClick={this.props.closeCart}>
                        <span className="mini-cart-icon__quantity"></span>
                    </span>
                </div>
                <div className="mini-cart__body">
                    { 
                        cartItems.map((item, index) => 
                            <CartItem key={index}
                                    item={item}
                                    addToCart={this.props.actions.addToCart}
                                    removeFromCart={this.props.actions.removeFromCart}
                                    removeAllFromCart={this.props.actions.removeAllFromCart}
                            />
                        )
                    }
                </div>
                <div className="mini-cart__footer">
                    <div>Total Price: ${totalPrice}</div>
                    <div>
                        <button className="btn btn-green" onClick={this.openCheckOutModal}>Check out</button>
                        { this.state.isCheckOutModal &&
                            <ModalCart
                                cart={this.props.cart}
                                totalPrice = {totalPrice}
                                orderFunction={this.orderFunction}
                                closeCheckOutModal = {this.closeCheckOutModal}
                                isCheckOutModal = {this.state.isCheckOutModal}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);