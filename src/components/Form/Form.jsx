import React, { Component } from 'react';
import { ContactsForm, FormLabel, FormText, SubmitButton } from './styled';
import PropTypes from 'prop-types';

export class Form extends Component {
  static propTypes = {
    addUserProps: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addUserProps({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <ContactsForm onSubmit={this.handleFormSubmit}>
        <FormLabel>
          Name
          <FormText
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormText
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </FormLabel>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactsForm>
    );
  }
}
