import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dispatchLogOut } from '../actions';
import styled from 'styled-components';

const LogoutElement = styled.li`
    cursor: pointer;
    font-size: 24px;
    letter-spacing: 0.1cm;
`

class Menu extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    
    handleLogOut = () => {
        this.props.dispatchLogOut();
    }

    render() {
        const className = "menu__wrapper";
        return (
            <div className={ this.props.isToggled ? className + " is-toggled" : className }>
                <div className="menu__top">
                    <span className="menu-close" onClick={this.props.closeMenu} />
                </div>
                <ul className="menu__list">
                    <li><Link to="/news">NEWS</Link></li>
                    <li><Link to="/watches">WATCHES</Link></li>
                    <li><Link to="/accessories">ACCESSORIES</Link></li>
                    <li><Link to="/watch-bands">WATCH BANDS</Link></li>
                    {!this.props.isLogin && 
                        <li><Link to="/signin">LOGIN</Link></li>
                    }
                    {this.props.isLogin &&
                        <LogoutElement onClick={this.handleLogOut}>LOGOUT</LogoutElement>
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const isLogin = state.login.isLogin;
    return { isLogin };
}

export default connect(mapStateToProps, { dispatchLogOut })(Menu);