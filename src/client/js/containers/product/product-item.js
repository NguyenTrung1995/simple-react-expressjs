import * as React from 'react';
import '../../../css/product/product.scss';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, price, quantity } = this.props.product;
        return (
            <div className="product-item">
                <h3>{title}</h3>
                <div className="product-item-container">
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <button onClick={() => this.props.addToCart(this.props.product)}>Add to cart</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;