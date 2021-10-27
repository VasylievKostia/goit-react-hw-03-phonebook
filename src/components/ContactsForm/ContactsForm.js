import { Component } from "react";
import shortid from 'shortid';
import s from '../ContactsForm/ContactsForm.module.css'
export class ContactsForm extends Component {
    state = {
    name: "",
    number: "",
  };
nameInputId = shortid.generate();
numnerInputId = shortid.generate();
  
  handleChange = event => {
    this.setState( {[event.currentTarget.name] : event.currentTarget.value})
  }
  handleSubmit = event => {
    event.preventDefault()
    const obj = {
      name: this.state.name,
      number: this.state.number
    }

      this.props.onFormSubmit(obj)
    this.resetState()
  }
  resetState = () => {
    this.setState({name: '',number: ''})
  }
    
    render() {
        return <section className={s.section}>
        <form onSubmit={this.handleSubmit}>
            
    <label htmlFor={this.nameInputId}> Name
      <input
      id={this.nameInputId}
      type="text"
      name="name"
      value={this.state.name}
      onChange={this.handleChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required/>
      </label>
          <br />
          
      <label htmlFor={this.numnerInputId}>Number
      <input
        id={this.numnerInputId}
        value={this.state.number}
        type="tel"
        name="number"
        onChange={this.handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        /></label>
      <br />
      <button type='submit'> Add Contact</button>
        </form>
        </section>
    }
}