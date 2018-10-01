import * as React from 'react';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item); 
    });
    return images;
}

const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));

class DetailProduct extends React.Component<any, any> {
    render() {
        console.log('haha');
        return (
            <div>
                <img src={images[this.props.item.img]}/>
            </div>
        );
    }
}

export default DetailProduct;