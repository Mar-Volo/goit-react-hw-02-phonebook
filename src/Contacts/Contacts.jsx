// import PropTypes from 'prop-types';
// import shortid from 'shortid';
import { Contacts, Contact } from './Contacts.styled';

export const ContactsList = ({ contacts }) => (
 
    <Contacts>
      {contacts.map(({ id, name }) => (
        <Contact id={id}>{name}</Contact>
      ))}
    </Contacts>
  
);
