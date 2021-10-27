import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import shortid from 'shortid';
import { ContactList } from './components/ContactList/ContactList.js';
import { ContactsForm } from './components/ContactsForm/ContactsForm'
import Filter  from "./components/Filter/Filter";


class App extends Component {
  state = {
  contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: '',
  }
  componentDidMount() {
    console.log('mount')
    const localData = JSON.parse(localStorage.getItem('data'))
   if (localData) {
      this.setState({ contacts: localData });
    }
  }
  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('data', JSON.stringify(this.state.contacts))
    }

  }
  componentWillUnmount() {
    console.log('unmount')
  }





    addNewContact = ({ name, number }) => {
    if (!this.state.contacts.find((contact) => contact.name === name)) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: shortid.generate() }],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
    };
  deleteContact = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((elem) => elem.id !== e.target.id),
    }));
  };
  
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  onFormSubmit = (obj) => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, obj]
      }
    })
  }


renderContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  render() {
    console.log('render')
    return (
  
  <div className="App">
        <h1>PhoneBook</h1>
        <ContactsForm onFormSubmit={this.addNewContact} />
        <h2>Contacts</h2>
      
        
        <Filter value={this.state.filter} changeFilter={this.changeFilter}/>
        <ContactList
          onDeleteContacts={this.deleteContact}
           contacts={this.renderContacts()}
        />
    </div>
  );
  }
  
}

export default App;
