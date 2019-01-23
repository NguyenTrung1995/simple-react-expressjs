import * as React from 'react';
import ProductListItem from './product/product-list-item';
import axios from 'axios';

class Home extends React.Component<any, any> {

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
                this.setState({ productData: res.data.products})
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