import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CartItem from './cart-item';
import ModalCart from '../../components/ModalCart';

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}

class Cart extends React.Component {
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
        }, 0)
        return (
            <div>
                { 
                    sort(this.props.cart).map((item, index) => 
                        <CartItem key={index}
                                  item={item}
                                  addToCart={this.props.addToCart}
                                  removeFromCart={this.props.removeFromCart}
                                  removeAllFromCart={this.props.removeAllFromCart}
                        />
                    )
                }
                <div>Total Price: {totalPrice}</div>
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
        );
    }
}

function mapStateToProps(state) {
    return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD_ITEM', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE_ITEM', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL_ITEM', payload: item })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);