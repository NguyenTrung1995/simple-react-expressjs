import * as React from 'react';
import productData from '../api/products.json';
import ProductListItem from './product/product-list-item';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productData: []
        }
    }

    componentDidMount() {
        axios
            .get('/api/fetchdata')
            .then((res) => {
                this.setState({ productData: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
       
        return(
            <div>
                <ProductListItem products={this.state.productData}/>
            </div>
        );
    }
}

export default Home;