import * as React from 'react';
import '../../css/menu.scss';

class Menu extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const menu_list = ['NEWS', 'WATCHES', 'ACCESSORIES', 'WATCH BANDS'];
        const className = "menu__wrapper";
        return (
            <div className={ this.props.isToggled ? className + " is-toggled" : className }>
                <span className="menu-close" onClick={() => this.props.closeMenu}></span>
                <ul className="menu__list">
                    {
                        menu_list.map((value, index) => {
                            <li key={index}>{value}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Menu;