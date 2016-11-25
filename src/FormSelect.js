import React, { Component } from 'react';

export default class FormSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value === nextProps.value)
            return;

        this.setState({
            value: nextProps.value
        });
    }

    updateSelectValue = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    };

    render() {
        return (
            <div className="form-group">
                <label>{this.props.labelText}</label>
                <select className="form-control" name={this.props.inputName} value={this.state.value} onChange={this.updateSelectValue}>
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