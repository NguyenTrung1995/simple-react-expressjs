import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.scss';
import Menu from './Menu';

class Header extends React.Component<any, any> {
    
    constructor(props) {
        super(props);
        this.state = {
            isToggleMenu: false
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
    public openMenu() {
        this.setState({ isToggleMenu: true })
    }

    public closeMenu() {
        this.setState({ isToggleMenu: false })
    }

    render() {
        return (
            <div className="header__container">
                <div className="header__top">
                    <span className="header__icon-menu" onClick={this.openMenu}></span>
                    <Link to="/" className="header__title">Daniel Wellington</Link>
                    <span className="header__icon-cart"></span>
                    <Menu
                        isToggled={this.state.isToggleMenu}
                        closeMenu={this.closeMenu}
                    />
                </div>
            </div>
        );
    }
}

export default Header;