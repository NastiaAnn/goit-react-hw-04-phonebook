import { useState } from 'react';
import { ContactList } from './ContactList';
import { Form } from './Form';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1
        style={{
          fontSize: '35px',
          fontWeight: 800,
          marginTop: '0px',
          marginBottom: '30px',
        }}
      >
        Phonebook
      </h1>
      <Form addUserProps={this.formSubmitHandler} />
      <h2
        style={{
          fontSize: '35px',
          fontWeight: 800,
          marginTop: '30px',
        }}
      >
        Contacts
      </h2>
      <Filter value={filter} onChange={this.changeFilter} />
      <ContactList
        contacts={visibleContacts}
        deleteContact={this.deleteContact}
      />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };
//   formSubmitHandler = contactData => {
//     const { name } = contactData;
//     const isDuplicateName = this.state.contacts
//       .map(contact => contact.name.toLowerCase())
//       .includes(name.toLowerCase());

//     if (isDuplicateName) {
//       alert('Contact already exists');
//       return;
//     } else {
//       const newContact = {
//         id: nanoid(),
//         ...contactData,
//       };
//       this.setState(prevState => ({
//         contacts: [newContact, ...prevState.contacts],
//       }));
//     }
//   };

//   changeFilter = event => {
//     const { value } = event.currentTarget;
//     this.setState({ filter: value });
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );

//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '35px',
//             fontWeight: 800,
//             marginTop: '0px',
//             marginBottom: '30px',
//           }}
//         >
//           Phonebook
//         </h1>
//         <Form addUserProps={this.formSubmitHandler} />
//         <h2
//           style={{
//             fontSize: '35px',
//             fontWeight: 800,
//             marginTop: '30px',
//           }}
//         >
//           Contacts
//         </h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
