import * as React from 'react';
import ProductItem from './product-item';
import { connect } from 'react-redux';

class ProductListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product-list-item">
                {
                    this.props.products.map( product =>
                    <ProductItem key={product.id} 
                                 product={product} 
                                 addToCart={this.props.addToCart}
                    /> )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.cart);
    return { cart: state.cart }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD_ITEM', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE_ITEM', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);