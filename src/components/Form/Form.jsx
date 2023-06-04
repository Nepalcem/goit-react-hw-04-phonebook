import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyled } from './Form.styled';
import { FaPlus } from 'react-icons/fa';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    } else {
      setNumber(e.currentTarget.value);
    }
  };

  // submitHandler = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.setState(prevState => ({ ...prevState, name: '', number: '' }));
  // };

  return (
    <FormStyled>
      <h1>PhoneBook</h1>
      <div className="form__inputs">
        <label>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            autoComplete="off"
          />
        </label>

        <label>
          <p>Phone:</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
            autoComplete="off"
          />
        </label>

        <button type="submit">
          <FaPlus></FaPlus> Add Contact
        </button>
      </div>
    </FormStyled>
  );
};

export default Form;
// export default class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   submitHandler = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState(prevState => ({ ...prevState, name: '', number: '' }));
//   };

//   render() {
//     return (
//       <FormStyled onSubmit={this.submitHandler}>
//         <h1>PhoneBook</h1>
//         <div className="form__inputs">
//           <label>
//             <p>Name:</p>
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//               value={this.state.name}
//               autoComplete="off"
//             />
//           </label>

//           <label>
//             <p>Phone:</p>
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//               value={this.state.number}
//               autoComplete="off"
//             />
//           </label>

//           <button type="submit">
//             <FaPlus></FaPlus> Add Contact
//           </button>
//         </div>
//       </FormStyled>
//     );
//   }
// }

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
