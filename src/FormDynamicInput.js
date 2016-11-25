import React, { Component } from 'react';
import uuid from 'uuid';

export default class FormDynamicInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: props.values
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.values === nextProps.values)
            return;

        this.setState({
            values: nextProps.values
        });
    }

    updateDynamicValue = (id, collectionName, event) => {
        event.persist();
        this.setState((prevState) => ({
            values: prevState.values.map(item => {
                return item.id !== id ? item : Object.assign({}, item, {
                    [event.target.name]: event.target.value
                });
            })
        }), () => this.props.onChange(collectionName, this.state.values));
    };

    addDynamicItem = (collectionName) => {
        this.setState((prevState) => ({
            values: prevState.values.concat([{
                id: uuid(),
                value: ''
            }])
        }), () => this.props.onChange(collectionName, this.state.values));
    };

    removeDynamicItem = (id, collectionName, event) => {
        this.setState((prevState) => {
            let indexToRemove = prevState.values.findIndex(x => x.id === id);
            return {
                values: [...prevState.values.slice(0, indexToRemove), ...prevState.values.slice(indexToRemove + 1)]
            }
        }, () => this.props.onChange(collectionName, this.state.values));
    };

    render() {
        return (
            <div>
                {
                    this.props.values.map((item, index) => (
                        <div key={item.id}>
                            <div className="form-group">
                                <label>{this.props.labelText} {index + 1}</label>
                                <div className="input-group">
                                    <input className="form-control" name="value" value={item.value} onChange={this.updateDynamicValue.bind(this, item.id, this.props.inputName)} />
                                    <span className="input-group-btn">
                                        <button className="btn btn-danger" onClick={this.removeDynamicItem.bind(this, item.id, this.props.inputName)}>Remove</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={this.addDynamicItem.bind(this, this.props.inputName)}>{this.props.addButtonText}</button>
                </div>
            </div>
        );
    }
}