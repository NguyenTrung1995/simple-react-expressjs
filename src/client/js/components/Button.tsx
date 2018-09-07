import * as React from 'react';
import '../../css/button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    public render() {
        const { color, text } = this.props;
        return (
            <button className={"btn--login btn--login-" + color}>{text}</button>
        );
    }
}

export default Button;