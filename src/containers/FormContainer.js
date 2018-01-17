import React, { Component } from 'react'
import TextField from '../components/TextField'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      firstName: '',
      lastName: '',
      streetAddress: '',
      cityName: '',
      stateName: '',
      zipCode: '',
      phoneNumber: '',
      eMail: '',
      fields: [
        ["firstName", "First Name"],
        ["lastName", "Last Name"],
        ["streetAddress", "Street Address"],
        ["cityName", "City Name"],
        ["stateName", "State Name"],
        ["zipCode", "Zip Code"],
        ["phoneNumber", "Phone Number"],
        ["eMail", "eMail"]
      ]

    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      firstName: '',
      lastName: '',
      streetAddress: '',
      cityName: '',
      stateName: '',
      zipCode: '',
      phoneNumber: '',
      eMail: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      streetAddress: this.state.streetAddress,
      cityName: this.state.cityName,
      stateName: this.state.stateName,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
      eMail: this.state.eMail
    };
      console.log(this.state)
      this.handleClearForm(event);
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }


  render() {
    let listOfFields;

    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
      <h1>Shipping Address</h1>
        <TextField
          content={this.state.firstName}
          label='First Name'
          name='firstName'
          handlerFunction={this.handleChange}
        />
        <TextField
          content={this.state.lastName}
          label='Last Name'
          name='lastName'
          handlerFunction={this.handleChange}
        />
        <TextField
          content={this.state.streetAddress}
          label='Street Address'
          name='streetAddress'
          handlerFunction={this.handleChange}
        />
        <TextField
          content={this.state.cityName}
          label='City'
          name='cityName'
          handlerFunction={this.handleChange}
        />
        <TextField
          content={this.state.stateName}
          label='State'
          name='stateName'
          handlerFunction={this.handleChange}
        />
        <TextField
          content={this.state.zipCode}
          label='Zip Code'
          name='zipCode'
          handlerFunction={this.handleChange}
        />
        <TextField
          content={this.state.phoneNumber}
          label='Phone Number'
          name='phoneNumber'
          handlerFunction={this.handleChange}
        />
        <TextField
          content={this.state.eMail}
          label='eMail'
          name='eMail'
          handlerFunction={this.handleChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer
