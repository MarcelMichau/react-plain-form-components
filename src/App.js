import React, { Component } from 'react';

import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import FormRadioGroup from './FormRadioGroup';
import FormDynamicInput from './FormDynamicInput';

const inputOptions = [
  {
    value: 'A',
    text: 'Option A'
  },
  {
    value: 'B',
    text: 'Option B'
  },
  {
    value: 'C',
    text: 'Option C'
  }
];

const radioOptions = [
  {
    labelText: 'Test Option 1',
    value: 'Option 1'
  },
  {
    labelText: 'Test Option 2',
    value: 'Option 2'
  }
];

const otherRadioOptions = [
  {
    labelText: 'Other Test Option 1',
    value: 'Other Option 1'
  },
  {
    labelText: 'Other Test Option 2',
    value: 'Other Option 2'
  }
];

export default class App extends Component {
  intervalId = '';

  constructor(props) {
    super(props);

    this.state = {
      testTextInput: '',
      testTextInput2: '',
      testCheckbox: false,
      testDropdown: 'A',
      dependentOnDropdown: '',
      testSelectedOption: '',
      testOtherSelectedOption: '',
      dynamicValues: [],
      someMoreDynamicValues: []
    }
  }

  componentDidMount() {
    this.loadFormStateFromLocalStorage();
    this.intervalId = setInterval(this.saveFormStateToLocalStorage, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  loadFormStateFromLocalStorage = () => {
    let formData = localStorage.getItem('formState');
    if (formData) {
      this.setState(JSON.parse(formData));
    }
  }

  saveFormStateToLocalStorage = () => {
    localStorage.setItem('formState', JSON.stringify(this.state));
    console.log('Saved state to Local Storage');
  }

  updateInputValue = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Complex Vanilla React Form</h2>
        <form>
          <FormInput
            inputName="testTextInput"
            labelText="Test Text Input"
            value={this.state.testTextInput}
            onChange={this.updateInputValue}
            />
          <FormInput
            inputName="testTextInput2"
            labelText="Test Text Input 2"
            value={this.state.testTextInput2}
            onChange={this.updateInputValue}
            />
          <FormSelect
            inputName="testDropdown"
            labelText="Test Dropdown"
            inputOptions={inputOptions}
            value={this.state.testDropdown}
            onChange={this.updateInputValue}
            />
          {
            this.state.testDropdown === 'C' ?
              <FormInput
                inputName="dependentOnDropdown"
                labelText="Why did you choose Value C?"
                value={this.state.dependentOnDropdown}
                onChange={this.updateInputValue}
                />
              :
              null
          }
          <FormDynamicInput
            inputName="dynamicValues"
            values={this.state.dynamicValues}
            labelText="Test Dynamic Text Input"
            onChange={this.updateInputValue}
            addButtonText="Add Dynamic Field"
            />
          <FormDynamicInput
            inputName="someMoreDynamicValues"
            values={this.state.someMoreDynamicValues}
            labelText="Test More Dynamic Text Input"
            onChange={this.updateInputValue}
            addButtonText="Add Another Dynamic Field"
            />
          <FormCheckbox
            inputName="testCheckbox"
            labelText="Test Checkbox"
            value={this.state.testCheckbox}
            onChange={this.updateInputValue}
            />
          <FormRadioGroup
            inputName="testSelectedOption"
            radioOptions={radioOptions}
            value={this.state.testSelectedOption}
            onChange={this.updateInputValue}
            />
          <FormRadioGroup
            inputName="testOtherSelectedOption"
            radioOptions={otherRadioOptions}
            value={this.state.testOtherSelectedOption}
            onChange={this.updateInputValue}
            />
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <pre style={{ marginTop: '1em' }}>{JSON.stringify(this.state, null, '\t')}</pre>
      </div>
    );
  }
}
