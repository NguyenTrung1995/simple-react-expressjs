import * as React from 'react';
import axios from 'axios';
// import '../../css/product/product-detail.scss';
import { images } from '../common';

class DetailProduct extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        axios
            .get('/api/fetchdata/' + this.props.match.params.product_name)
            .then((res) => {
                console.log(res.data);
                this.setState({ product: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="product-detail"> 
                <h2>{this.state.product.name}</h2>
                <img src={images[this.state.product.img]} alt={this.state.product.alt}/>
            </div>
        );
    }
}

export default DetailProduct;