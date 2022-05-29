import React, { Component } from "react";
import { nanoid } from 'nanoid'
import style from "./index.module.css"

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";




export class App extends Component{

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }


  hasAlready = ({ name, number }) => {
    const { contacts } = this.state;
    const hasAlready = contacts.filter(cont => cont.name === name).map(e => e.name).includes(name)
    return hasAlready ? alert(`${name} is already in contacts`) : this.submitFormHandler({ name, number })
  };  
  
  submitFormHandler = ({ name, number }) => {
    const contact = {
    id: nanoid(),
    name: name,
    number: number,
}
        this.setState((prevState) => ({
    contacts: [...prevState.contacts, contact]
        }))
    
  }

  handleFilter = (value) => {
    this.setState(() => ({
      filter: value.target.value,
    }))
  };



  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };
  
  deleteContact = (contactId) => {

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  render() {
    return (
      <div className="container">
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={this.hasAlready} />
        <h2 className={style.title}>Contacts</h2>
        <Filter filterChangeInput={this.handleFilter} />
        <ContactList filterContact={this.filteredContacts()
        } deleteContact={this.deleteContact}/>
      </div>

    )
  }
}
