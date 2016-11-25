import React, { Component } from 'react';

export default class FormCheckbox extends Component {
    updateCheckboxValue = (event) => {
        this.props.onChange(event.target.name, event.target.checked);
    };

    render() {
        return (
            <div className="form-group">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name={this.props.inputName} checked={this.props.value} onChange={this.updateCheckboxValue} />
                        {this.props.labelText}
                    </label>
                </div>
            </div>
        );
    }
}