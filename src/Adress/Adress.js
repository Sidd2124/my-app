

import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';


import { CiDeliveryTruck } from "react-icons/ci";

import './Address.css';

const AddressDetails = () => {
  // Use destructuring to directly get 'history' from 'props'

  const [Displey,SetDisplay]=useState('')

  // Ref for the form element
  const form = useRef();

  // Function to send email
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Use async/await for better readability and error handling
      const result = await emailjs.sendForm(
        'service_n5w6pck',
        'template_9c0aj98',
        form.current,
        'RuOh4MuvJuV8MsSJY'
      );

      console.log(result.text);
      SetDisplay("none")
      // Reset the form only after the email has been sent successfully
      e.target.reset();

      // Alert and redirect after successful email send
      alert('Adress Saved Successfully');
   
    
    } catch (error) {
      console.error(error.text);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="Email" style={{ display: Displey }}
    >
     <h3 className='Animi'>
      <span className='typing-text'>Share Address to Deliver...</span>
      <CiDeliveryTruck className='delivery-icon' />
    </h3>
      <label>Name :</label>
      <div>
        <input type="text" name="from_name" placeholder="Enter Your Name" required />
      </div>

      <label>Contact Number</label>
      <div>
        <input type="tel" name="to_name" pattern="[0-9]{10}" placeholder="Enter Your Contact Number" required />
   
      </div>

      <label>Address </label>
      <div>
        <textarea name="message" placeholder="Enter Your Adress including PinCode" required />
      </div>

      <input type="submit" value="Send" className="Resume" />
      
    </form>
  );
};

export default AddressDetails;