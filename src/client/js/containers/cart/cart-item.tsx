import * as React from 'react';
// import '../../../css/organisms/cart-item.scss';
import { images } from '../../common';

class CartItem extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.increaseItem = this.increaseItem.bind(this);
    }

    increaseItem () {
        this.props.item.inventory > this.props.item.quantity ? this.props.addToCart(this.props.item) : this.props.item.inventory;
    }

    render() {
        return (
            <div className="cart-item">
                <div className="cart-item--img">
                    <img src={images[this.props.item.img]} />
                </div>
                <div className="cart-item--detail">
                    <div className="cart-item--detail__title">
                        <a href="#" className="cart-item--detail__title_a">{this.props.item.title}</a>
                        <button onClick={() => this.props.removeAllFromCart(this.props.item)}>X</button>
                    </div>
                    <span>{this.props.item.quantity} x ${this.props.item.price}</span>
                    <div className="cart-item--detail__btn">
                        <button onClick={this.increaseItem}>+</button>
                        <span>{this.props.item.quantity}</span>
                        <button onClick={() => this.props.removeFromCart(this.props.item)}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;