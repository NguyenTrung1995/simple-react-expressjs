import * as React from 'react';
import ProductItem from './product-item';
import { connect } from 'react-redux';

class ProductListItem extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product-list-item">
                {
                    this.props.products.map((product, index) =>
                    <ProductItem key={index} 
                                 product={product} 
                                 addToCart={this.props.addToCart}
                                 removeAllFromCart={this.props.removeAllFromCart}
                                 cart={this.props.cart}
                    /> )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cart: state.cart }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD_ITEM', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL_ITEM', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);