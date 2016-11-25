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

    updateRadioValue = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    };

    render() {
        return (
            <div className="form-group">
                {
                    this.props.radioOptions.map((option, index) => (
                        <label key={index} className="radio-inline">
                            <input type="radio" name={this.props.inputName} value={option.value} checked={this.state.value === option.value} onChange={this.updateRadioValue} />
                            {option.labelText}
                        </label>
                    ))
                }
            </div>
        );
    }
}