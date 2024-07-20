// import React from "react";
// import styles from "./ContactBox.module.css";

// export const ContactBox=()=>{
// return(
 
//     <footer id="contactbox" className={styles.container}>
//         <h2 className={styles.text}>Get in touch with me!</h2>
//     {/* <form className={styles.contactbox}></form> */}
//             <label htmlFor="">Your Name</label>
//             <input type="text" placeholder="Enter your name" name="name"></input>
//             <label htmlFor="">Your Email</label>
//             <input type="email" onBlur onChange={ 
//                     (e) =>  
//                     setValue(e.target.value)} 
//                  placeholder="Enter your email" name="email"/>
//             <label htmlFor="">Write your message here</label>
//             <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
//             <button type="submit" className="contact-submit">Submit</button>
//             </footer>
// );
// // };
// import { useState } from 'react';
// import './styles.css';
// // import styles from '../ContactBox/ContactBox.module.css';

// // Here we import a helper function that will check if the email is valid
// import { validateEmail } from '../../utils/helper';

// export const ContactBtn=() =>{
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [name,setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

  
//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === 'name') {
//       setName(inputValue);
//     } else if (inputType === 'email') {
//       setEmail(inputValue);
//     } else{
//       setMessage(inputValue'message');
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !userName) {
//       setErrorMessage('Email or username is invalid');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!checkPassword(password)) {
//       setErrorMessage(
//         `Choose a more secure password for the account: ${userName}`
//       );
//       return;
//     }
//     alert(`Hello ${userName}`);

//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setUserName('');
//     setPassword('');
//     setEmail('');
//   };

//   return (
//     <div className="container text-center">
//       <h1>Hello {name}</h1>
//       <form className="form" onSubmit={handleFormSubmit}>
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="email"
//         />
//         <input
//           value={name}
//           name="ame"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="username"
//         />
//         <input
//           value={password}
//           name="password"
//           onChange={handleInputChange}
//           type="password"
//           placeholder="Password"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;

import { useState } from 'react';

import { validateEmail } from '../../utils/helper';
import styles from './ContactBtn.module.css';

export const ContactBtn=()=> {
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "27be7c0b-f664-4161-a8eb-fd8262803e64");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //   }
  // };
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "27be7c0b-f664-4161-a8eb-fd8262803e64");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  
  return (
    <section className={styles.section}>
      <form className={styles.form} id="contact-form" onSubmit={handleSubmit}>
        <div id="contactbox">
        <h2 className={styles.text}>Get in touch with me!</h2>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className={styles.message} htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button onSubmit={onSubmit} type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactBtn;