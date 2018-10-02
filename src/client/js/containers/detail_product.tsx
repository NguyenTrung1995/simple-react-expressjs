import * as React from 'react';
import axios from 'axios';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item); 
    });
    return images;
}

const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));

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
            <div>
                <h2>{this.state.product.title}</h2>
                <img src={images[this.state.product.img]}/>
            </div>
        );
    }
}

export default DetailProduct;