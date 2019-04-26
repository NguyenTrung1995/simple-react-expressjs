import * as React from 'react';
import axios from 'axios';
import { images } from '../common';

class DetailProduct extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
        this.fetchData = this.fetchData.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.product.alt === undefined) {
            return true;
        }
        if (nextState.product.alt === this.state.product.alt) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        // this.fetchData();
    }

    componentDidUpdate() {
        // this.fetchData();
    }

    fetchData() {
        axios
        .get('/api/fetchdata/' + this.props.match.params.product_name)
        .then((res) => {
            this.setState({ product: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        console.log('hihi');
        return (
            <div className="product-detail"> 
                <h2>{this.state.product.name}</h2>
                <img src={images[this.state.product.img]} alt={this.state.product.alt}/>
            </div>
        );
    }
}

export default DetailProduct;