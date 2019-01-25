import * as React from 'react';

class Button extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    public render() {
        const { color, text} = this.props;
        return (
            <button className={"btn btn-"+ color}>{text}</button>
        );
    }
}

export default Button;