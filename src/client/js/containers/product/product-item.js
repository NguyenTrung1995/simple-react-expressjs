import * as React from 'react';
import '../../../css/product/product.scss';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, price } = this.props.product;
        const isEnabled = this.props.cart.filter(item => item.id === this.props.product.id).length === 0 ? false : true;
        return (
            <div className="product-item">
                <h4>{title}</h4>
                <img src={'../../../img/01.jpg'} />
                <div className="product-item-container">
                    <p>Price: {price}</p>
                    <button disabled={isEnabled} onClick={() => this.props.addToCart(this.props.product)}>
                        {
                            isEnabled ? 'Added to cart' : 'Add to cart' 
                        }
                    </button>
                    { isEnabled &&
                        <button onClick={() => this.props.removeAllFromCart(this.props.product)}>X</button>
                    }
                </div>
            </div>
        );
    }
}

export default ProductItem;