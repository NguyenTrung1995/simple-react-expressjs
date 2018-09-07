import * as React from 'react';
import '../../css/navbar.scss';

class NavBar extends React.Component {
    public render() {
        return (
            <ul className="navbar">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        );
    }
}

export default NavBar;