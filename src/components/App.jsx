import { Component } from 'react';
import shortid from 'shortid';

// import { ContactForm } from './Form/Form';
// import { Formik } from 'formik';
import { ContactsList } from '../Contacts/Contacts';
import { Form, Label, Field, FormSubmit } from './Form/Form.styled';
import { Title } from './Layout/Layout.styled';
import GlobalStyle from 'GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  contactId = () => {
    return shortid.generate();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: this.contactId(), name: name }]
    }))
    
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name, contacts } = this.state;
    console.log(this.state.contacts)
    return (
      <Layout>
        <Title>Phonebook</Title>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Field
              value={name}
              placeholder="Enter a name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </Label>
          <FormSubmit type="submit">Add contact</FormSubmit>
        </Form>
        <Title>Contacts</Title>
        <ContactsList contacts={contacts} />
        <GlobalStyle />
      </Layout>
    );
  }
}
