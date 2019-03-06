import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Cart from '../containers/cart/cart';
import { connect } from 'react-redux';

class Header extends React.Component<any, any> {
    
    constructor(props) {
        super(props);
        this.state = {
            isToggleMenu: false,
            isToggleCart: false
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.openCart = this.openCart.bind(this);
        this.closeCart = this.closeCart.bind(this);
    }
    
    public openMenu() {
        this.setState({ isToggleMenu: true })
    }

    public closeMenu() {
        this.setState({ isToggleMenu: false })
    }

    public openCart() {
        this.setState({ isToggleCart: true })
    }

    public closeCart() {
        this.setState({ isToggleCart: false })
    }

    render() {
        return (
            <div className="header__container">
                <div className="header__top">
                    <span className="header__icon-menu" onClick={this.openMenu}></span>
                    {/* <Link to="/" className="header__title">Daniel Wellington</Link> */}
                    <Link to="/" className="header__title">{this.props.session ? this.props.session : 'undefined'}</Link>
                    <span className="header__icon-cart" onClick={this.openCart}></span>
                    <Menu
                        isToggled={this.state.isToggleMenu}
                        closeMenu={this.closeMenu}
                    />
                    <Cart
                        isToggleCart={this.state.isToggleCart}
                        closeCart={this.closeCart}
                    />
                    <div className={this.state.isToggleCart ? "page--overlay enableOverlay" : "page--overlay"}></div>                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    session: state.login.session
})

export default connect(mapStateToProps)(Header);