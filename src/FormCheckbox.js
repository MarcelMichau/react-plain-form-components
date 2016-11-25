import React, { Component } from 'react';

export default class FormCheckbox extends Component {
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

    updateCheckboxValue = (event) => {
        this.props.onChange(event.target.name, event.target.checked);
    };

    render() {
        return (
            <div className="form-group">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name={this.props.inputName} checked={this.state.value} onChange={this.updateCheckboxValue} />
                        {this.props.labelText}
                    </label>
                </div>
            </div>
        );
    }
}