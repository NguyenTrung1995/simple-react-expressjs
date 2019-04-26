import * as React from 'react';
import { Link } from 'react-router-dom';
import {images} from '../../common';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';

const Container = styled.div`
    .btn {
        &:hover {
            color: #f0f8ff;
        }
    }
`;

const Btn = styled(Button)`
    width: 100px;
`;

const ProductItem = props => {
    const { name, price, img, alt } = props.product;
    const isEnabled = props.cart.some(item => item.id === props.product.id);
    return (
        <Container className="product-item">
            <h4>{name}</h4>
            <Link to={"/" + alt}>
                <img src={images[img]} />
            </Link>
            <div className="product-item-container">
                <p>Price: {price}</p>
                <Btn 
                    variant="contained"
                    color="secondary"
                    disabled={isEnabled}
                    onClick={() => props.addToCart(props.product)}
                    className='btn'
                >
                {
                    isEnabled ? 'Added to cart' : 'Add to cart' 
                }
                </Btn>
                { isEnabled &&
                    <Fab size="small"
                        color="secondary"
                        aria-label="Add"
                        onClick={() => props.removeAllFromCart(props.product)}
                        className='btn'
                    >
                        <ClearIcon />
                    </Fab>
                    // <button onClick={() => props.removeAllFromCart(props.product)}>X</button>
                }
            </div>
        </Container>
    )
}

export default ProductItem;