import * as React from 'react';
// import '../../css/molecules/navbarvertical-group.scss';
import NavBarVertical from './NavBarVertical';

class NavBarVerticalGroup extends React.Component {
    public render() {
        return (
            <ul className="navbarvertical-group">
                <NavBarVertical />
                <NavBarVertical />
            </ul>
        );
    }
}

export default NavBarVerticalGroup;