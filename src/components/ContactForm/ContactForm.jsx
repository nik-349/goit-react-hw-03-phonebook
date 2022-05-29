import PropType from "prop-types";
import React, { Component } from "react";
import form from './Form.module.css';

 class ContactForm extends Component{
    state = {
        name: '',
        number: ''
      }
    
    
    changeFormSubmit = (event) => {
        event.preventDefault()
        this.reset()
        this.props.onSubmit(this.state)
    }


    handleOnChangeInput = (name) => {
        return (event) => {
            const { target } = event;
            this.setState(() => ({
                [name]: target.value
            }))
        }
    }

    
    reset = (e) => {
        this.setState({ name: '', number: '' })
        
    }
    
    render() {
        const { name, number } = this.state;
        
        return (
        
        <>
            <form  className={form.form__visualization} onSubmit={this.changeFormSubmit}>
                <p className={form.name__input}>Name</p>
                <input className={form.input__info}
                        onChange={this.handleOnChangeInput('name')}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <p className={form.name__input}>Number</p>
                <input className={form.input__info}
                    onChange={this.handleOnChangeInput('number')}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                    <button className={form.button__add} type='submit' >Add contact</button>
                    
            </form>

                </>
        )
    }
}

ContactForm.propType = {
    onSubmit: PropType.func.isRequired,
    
}
export default ContactForm