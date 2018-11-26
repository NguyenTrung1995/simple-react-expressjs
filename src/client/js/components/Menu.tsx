import * as React from 'react';
// import '../../css/menu.scss';
import { Link } from 'react-router-dom';

class Menu extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const menu_list = ['NEWS', 'WATCHES', 'ACCESSORIES', 'WATCH BANDS'];
        const className = "menu__wrapper";
        return (
            <div className={ this.props.isToggled ? className + " is-toggled" : className }>
                <div className="menu__top">
                    <span className="menu-close" onClick={this.props.closeMenu}>Close</span>
                </div>
                <ul className="menu__list">
                    {
                        menu_list.map((value, index) => {
                            return <li key={index}><Link to="#">{value}</Link></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Menu;