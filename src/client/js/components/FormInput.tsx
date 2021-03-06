import * as React from 'react';

interface Props {
    nameLabel: string,
    nameInput: string,
    onChangeValue: (e) => void,
    type?: string
}
class FormInput extends React.Component<Props, any> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="form-input">
                <label>{this.props.nameLabel}</label>
                <input type={this.props.type === "password" ? "password" : "text"} placeholder={this.props.nameInput} onChange={this.props.onChangeValue}></input>
            </div>
        );
    }
}

export default FormInput;