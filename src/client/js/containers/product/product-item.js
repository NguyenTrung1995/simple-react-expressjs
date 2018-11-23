import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/product/product.scss';
import {images} from '../../common';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, price, img, alt } = this.props.product;
        const isEnabled = this.props.cart.some(item => item.id === this.props.product.id);
        return (
            <div className="product-item">
                <h4>{title}</h4>
                <Link to={"/" + alt}>
                    <img src={images[img]} />
                </Link>
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