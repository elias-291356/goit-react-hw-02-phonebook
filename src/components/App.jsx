
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
    // name: name,
    // number: number,
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
  onFilterContact = (event) => {
    const inputFilterValue = event.target.value;
    this.setState({ filter: inputFilterValue });
  }

  render() {
    const filtered = this.state.contacts.filter((contact) => {
      return (
        contact.name
          .toLowerCase()
          .includes(this.state.filter.trim().toLowerCase()) ||
        contact.number.includes(this.state.filter)
      );
    })
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
              filterList={filtered}
            />
            <Contacts
              contacts={filtered}
              onDeleteContact={this.onDeleteContact}
            />
          </ul>
        </form>
      </div>
    )
  }
}

