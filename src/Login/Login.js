import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './LoginComponent.css';

import { FaCartShopping } from "react-icons/fa6";


const Login = (props) => {
  const [ErrorMsg, SetErrorMsg] = useState("");
  const [FinelUserName] = useState("rahul");
  const [FinelPassword] = useState("rahul@2021");

  console.log(ErrorMsg);

  const handleLogin = async () => {
    const data = {
      username: FinelUserName,
      password: FinelPassword,
    };

    const url = "https://apis.ccbp.in/login";

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      const Code = await response.json();

      if (response.ok) {
        CookSetup(Code.jwt_token);

        const { history } = props;
        history.push("/Shop");
      } else {
        MakeError(Code.error_msg);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const MakeError = (Wrong) => {
    SetErrorMsg(Wrong);
  };

  const CookSetup = (Token) => {
    Cookies.set("Value", Token, { expires: 90, path: "/" });
    localStorage.setItem("Tokens", Token);
  };

  return (
    <div className="containering">
  <div className='ShopTittle'> 
         <h1 className='Title' >Sidd's Hub </h1>
         <p>SiddMart - Elevate your online shopping experience with us. Discover a curated selection of high-quality products, seamless navigation, and exclusive deals. Your go-to destination for convenience and style</p>
        <button className='login-button'  onClick={handleLogin}>
          Tap to enter my hub <FaCartShopping/>
        </button>

        </div>


       
 
    
      
    </div>
  );
};

export default Login;
