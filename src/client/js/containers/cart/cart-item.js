import * as React from 'react';

class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.increaseItem = this.increaseItem.bind(this);
    }

    increaseItem () {
        this.props.item.inventory > this.props.item.quantity ? this.props.addToCart(this.props.item) : this.props.item.inventory;
    }

    render() {
        return (
            <div>
                <span>{this.props.item.title}</span>
                <span>{this.props.item.inventory}</span>
                <button onClick={this.increaseItem}>+</button>
                <span>{this.props.item.quantity}</span>
                <button onClick={() => this.props.removeFromCart(this.props.item)}>-</button>
                <button onClick={() => this.props.removeAllFromCart(this.props.item)}>Remove All</button>
            </div>
        );
    }
}

export default CartItem;