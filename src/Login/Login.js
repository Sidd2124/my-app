import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './LoginComponent.css';


const Login = (props) => {
  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  const [showPassword, SetshowPassword] = useState(true);
  const [ErrorMsg, SetErrorMsg] = useState("");
  const [FinelUserName, SetFinelUserName] = useState("");
  const [FinelPassword, SetFinelPassword] = useState("");

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

        console.log(Code.error_msg);
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

  const handlePasswordToggle = () => {
    SetshowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h3>Sidd Store Welcome's You...🤝</h3>
      <input
        className="login-input"
        type="text"
        placeholder="Enter UserName"
        onChange={(e) => {
          SetUserName(e.target.value);
          if (e.target.value === "Sidd") {
            SetFinelUserName("rahul");
          }
        }}
      />
      <input
        className="login-input"
        type={showPassword ? "password" : "Text"}
        placeholder="Enter Password"
        onChange={(e) => {
          SetPassword(e.target.value);
          if (e.target.value === "Sidd2124") {
            SetFinelPassword("rahul@2021");
          }
        }}
      />
      {showPassword ? (
        <button onClick={handlePasswordToggle}>Show</button>  
      ) : (
     <button onClick={handlePasswordToggle} >Hide</button>
      )}
      <button className="login-button" onClick={Login}>
        Log In
      </button>
      <p className="Error">{ErrorMsg}</p>
    </div>
  );
};

export default Login;
