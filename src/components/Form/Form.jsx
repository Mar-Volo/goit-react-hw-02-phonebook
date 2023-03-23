// import { Component } from 'react';
// // import PropTypes from 'prop-types';
// import { Formik } from 'formik';
// import { Form, Label, Field, FormSubmit } from './Form.styled';
// export class ContactForm extends Component {
//   state = {
//     name: '',
//     };
    

//   handleSubmit = evt => {
//     evt.preventDefault();
//       this.props.onSubmit(this.state);
//       this.reset();
//   };

//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//     };
    
//     reset = () => {
//         this.setState({name: ''})
//     }

//   render() {
//     const { name } = this.state;
//     return (
//       <Formik initialValues={{ name: '' }}>
//         <Form autoComplete="off" onSubmit={this.handleSubmit}>
//           <Label>
//             Name
//             <Field
//               placeholder="Enter a name"
//               value={name}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//             />
//           </Label>
//           <FormSubmit type="submit">Add contact</FormSubmit>
//         </Form>
//       </Formik>
//     );
//   }
// }
