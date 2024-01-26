import React, { useState } from 'react';


import Cookies from 'js-cookie';
import './LoginComponent.css';


import videoSource from './Bramhi.mp4'
const Login = (props) => {
  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");

  const [ErrorMsg, SetErrorMsg] = useState("");
  const [FinelUserName, SetFinelUserName] = useState("rahul");
  const [FinelPassword, SetFinelPassword] = useState("rahul@2021");

  console.log(UserName);
  console.log(Password);

  const Login = async () => {
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
    localStorage.setItem("Tokens",Token)
  };

  return (
    <div >
   
      
          <video autoPlay  className="background-video">
  <source src={videoSource} type="video/mp4" />
</video>

      <button className="login-button" onClick={Login}>
        Tap to Shop..(అంటే నొక్కితే షాపింగ్ కి వెళ్దాము అని)
      </button>
      <p className="Error">{ErrorMsg}</p>
    </div>
  );
};

export default Login;