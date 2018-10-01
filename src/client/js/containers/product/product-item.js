import * as React from 'react';
import { Redirect } from 'react-router';
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
        this.viewDetailProduct = this.viewDetailProduct.bind(this);
    }

    viewDetailProduct () {
        return (
            // <Redirect to={"/product/" + this.props.product.img} />
            <Redirect to="/haha"/>
        );
    }

    render() {
        const { title, price, img } = this.props.product;
        const isEnabled = this.props.cart.filter(item => item.id === this.props.product.id).length === 0 ? false : true;
        return (
            <a className="product-item" href={"/product/" + this.props.product.img}>
                <h4>{title}</h4>
                <img src={images[img]} />
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
            </a>
        );
    }
}

export default ProductItem;