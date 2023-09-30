import { Component } from "react";
import { nanoid } from 'nanoid'
import 'bulma/css/bulma.css';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }
  // onInputChange = event => {
  //   const { number, name, value } = event.target
  //   this.setState({ [name]: value, [number]: value })
  // };
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

  handleChange = (event) => {
    const { filter } = this.state;
    this.setState({ filter: '' })
  }



  render() {
    return (

      <form onSubmit={this.handleSubmit} className='box ' >
        <h2 className="subtitle is-1">Phonebook</h2>
        <ul className="listForm" >
          <li>
            <label label className="label" >Name</label>
            <input
              placeholder="Your name"
              className="input is-success"
              type="text"
              name="name"
              maxlength="20"
              required
              value={this.state.name}
              onChange={this.onInputChange}
            />
            <label label className="label">Number</label>
            <input
              placeholder="+380"
              className="input is-success"
              type="number"
              name="number"
              maxlength="20"
              required
              value={this.state.number}
              onChange={this.onInputChange}
            />
            <button className="button is-primary"
              type="submit"  >Add contact</button>
          </li>
        </ul>

        <form className="ListContactsForm"  >
          <h2 className="subtitle is-1">Contacts</h2>
          <label className="label" >Find contact by name</label>
          <input
            class="input is-success"
            type="tel"
            name="filter"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <ul>
            <li className="subtitle is-4" >Nellie Steele</li>
          </ul>

        </form>
      </form>


    )
  }

}