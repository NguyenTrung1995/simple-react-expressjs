import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/product/product.scss';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item); 
    });
    return images;
}

const images = importAll(require.context('../../../img', false, /\.(png|jpe?g|svg)$/));

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, price, img, alt } = this.props.product;
        const isEnabled = this.props.cart.filter(item => item.id === this.props.product.id).length === 0 ? false : true;
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