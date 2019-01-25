import * as React from 'react';

class FormInput extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="form-input">
                <label>{this.props.nameLabel}</label>
                <input type="text" placeholder={this.props.nameInput} onChange={this.props.onChangeValue}></input>
            </div>
        );
    }
}

export default FormInput;