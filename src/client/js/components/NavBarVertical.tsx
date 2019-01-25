import * as React from 'react';

class NavBarVertical extends React.Component {
    public render() {
        return (
            <li className="navbarvertical">
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </li>
        );
    }
}

export default NavBarVertical;