import * as React from 'react';

class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        this.increaseItem = this.increaseItem.bind(this);
        this.decreaseItem = this.decreaseItem.bind(this);
    }

    increaseItem() {
        this.setState({ count: this.state.count < this.props.item.quantity ? this.state.count + 1 : this.props.item.quantity});
    }

    decreaseItem() {
        this.setState((state, props) => {
            if (state.count - 1 <= 0) {
                props.removeFromCart(props.item);
            }
            return {
                count: state.count - 1
            }
        });
    }

    render() {
        return (
            <div>
                <span>{this.props.item.title}</span>
                <span>{this.props.item.quantity}</span>
                <button onClick={this.increaseItem}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.decreaseItem}>-</button>
            </div>
        );
    }
}

export default CartItem;