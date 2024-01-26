import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CiDeliveryTruck } from 'react-icons/ci';
import './Address.css';


const AddressDetails = () => {
  const [display, setDisplay] = useState('');
  const [adreAddress, setAddress] = useState(false);
  const [countings, setCountings] = useState(0);

  const form = useRef();

 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountings((prevCount) => prevCount + 1);

      if (countings === 3) {
        clearInterval(intervalId);
        setAddress(false);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [countings]); // useEffect dependency to avoid unnecessary re-renders
  const RemoveLocally = () => {
    setDisplay("inline")
  }
  
  const sendEmail = async (e) => {
    e.preventDefault();
    setDisplay('none');
    try {
      const result = await emailjs.sendForm(
        'service_n5w6pck',
        'template_9c0aj98',
        form.current,
        'RuOh4MuvJuV8MsSJY'
      );

localStorage.setItem("Save", 'service_n5w6pck')
      console.log(result.text);
   
      setAddress(true);
      // Reset the form only after the email has been sent successfully
      e.target.reset();
      setCountings(0)
    } catch (error) {
      console.error(error.text);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div>
     
      
      <form ref={form} onSubmit={sendEmail} className="Email" style={{ display: display }}>
        <h3 className='Animi'>
          <span className='typing-text'>Share Address to Deliver...</span>
          <CiDeliveryTruck className='delivery-icon' />
        </h3>
        <label>Name </label>
        <div>
          <input type="text" name="from_name" placeholder="Enter Your Name" required />
        </div>

        <label>Email</label>
        <div>
          <input type="email" name="to_name" placeholder="Enter Your Mail" required />
        </div>

        <div>
          <label>Contact&Adress </label>
          <textarea name="message" placeholder="Enter Your Address Along With Contact " required />
        </div>

        <input type="submit" value="Send" className="Resume" />
      </form>

      {adreAddress && <h3 className='AddAddress'>Address Added Successfully..</h3>}
  
    </div>
  );
};

export default AddressDetails;
