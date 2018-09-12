import * as React from 'react';
import '../../../css/product/product.scss';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.clickAddToCart = this.clickAddToCart.bind(this);
        this.state = {
            isClick: false
        }
    }

    clickAddToCart() {
        this.setState({ isClick: true });
        this.props.addToCart(this.props.product);
    }

    render() {
        const { title, price, quantity } = this.props.product;
        return (
            <div className="product-item">
                <h3>{title}</h3>
                <div className="product-item-container">
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <button disabled={this.state.isClick} onClick={this.clickAddToCart}>Add to cart</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;