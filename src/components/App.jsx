
import 'bulma/css/bulma.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhonebookItem } from './PhonebookItem/PhonebookItem';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',

  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    if (this.state.contacts.some((contact) => contact.name === name)) {
      Notify.warning(`A contact named "${name}" already exists. `)

    } else {
      const newContact = {
        name: name,
        number: number,
        id: nanoid(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };
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
          <PhonebookItem
            name={this.state.name}
            number={this.state.number}
            onInputChange={this.onInputChange}
            handleSubmit={this.handleSubmit}
          />
          <Filter
            onChange={this.onFilterContact}
            filterList={filtered}
          />
          <Contacts
            contacts={filtered}
            onDeleteContact={this.onDeleteContact}
          />
        </form >

      </div >
    )
  }
}

