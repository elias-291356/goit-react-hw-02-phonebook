
import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhonebookItem } from './PhonebookItem/PhonebookItem';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      name: name,
      number: number,
      id: nanoid()
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
    this.setState({ name: '', number: '' })
  }
  onDeleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }
  onFilterContact = (filterText) => {
    const lowerCaseFilter = filterText.toLowerCase();
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        const lowerCaseName = contact.name.toLowerCase();
        return lowerCaseName.includes(lowerCaseFilter);
      })
    });
  }
  render() {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
        <form onSubmit={this.handleSubmit} className='box ' >
          <h2 className="subtitle is-1">Phonebook</h2>
          <ul className="listForm" >
            <PhonebookItem
              name={this.state.name}
              number={this.state.number}
              onInputChange={this.onInputChange}
            />

            <Filter
              onChange={this.onFilterContact}
            />
            <Contacts
              contacts={this.state.contacts}
              onDeleteContact={this.onDeleteContact}
            />
          </ul>
        </form>
      </div>
    )
  }
}


