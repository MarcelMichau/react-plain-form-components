import React, { Component } from 'react';

export default class FormInput extends Component {
    constructor(props) {
        super(props);
    }

    updateInputValue = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    };

    render() {
        return (
            <div className="form-group">
                <label>{this.props.labelText}</label>
                <input className="form-control" name={this.props.inputName} value={this.props.value} onChange={this.updateInputValue} />
            </div>
        );
    }
}