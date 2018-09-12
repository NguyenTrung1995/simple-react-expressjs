import * as React from 'react';
import productData from '../api/products.json';
import ProductListItem from './product/product-list-item';

class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>Home Page</h1>
                <ProductListItem products={productData}/>
            </div>
        );
    }
}

export default Home;