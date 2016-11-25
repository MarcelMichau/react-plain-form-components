import React, { Component } from 'react';

export default class FormInput extends Component {
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

    updateInputValue = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    };

    render() {
        return (
            <div className="form-group">
                <label>{this.props.labelText}</label>
                <input className="form-control" name={this.props.inputName} value={this.state.value} onChange={this.updateInputValue} />
            </div>
        );
    }
}