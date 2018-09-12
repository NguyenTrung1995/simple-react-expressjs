import * as React from 'react';
import { connect } from 'react-redux';
import CartItem from './cart-item';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { 
                    this.props.cart.map((item, index) => 
                        <CartItem key={index} item={item} removeFromCart={this.props.removeFromCart}/>
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.cart);
    return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE_ITEM', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);