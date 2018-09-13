import * as React from 'react';
import { connect } from 'react-redux';
import CartItem from './cart-item';

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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