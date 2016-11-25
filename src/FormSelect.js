import React, { Component } from 'react';

export default class FormSelect extends Component {
    updateSelectValue = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    };

    render() {
        return (
            <div className="form-group">
                <label>{this.props.labelText}</label>
                <select className="form-control" name={this.props.inputName} value={this.props.value} onChange={this.updateSelectValue}>
                {
                    this.props.inputOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.text}</option>
                    ))
                }
                </select>
            </div>
        );
    }
}