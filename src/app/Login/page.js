"use client";
import React, { useState } from "react";
import SignUpForm from "../../Components/SignupForm";
import LoginForm from "../../Components/LoginForm";
function Login() {
  const [flag, setFlag] = useState(false);

  return (
    <div>
     
      <div className="input-wrapper">
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignUpForm /> : <LoginForm />}
        {!flag ? (
          <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
            Click here if you already have an account. Login.
          </p>
        ) : (
          <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
            If you don't have an account ? click here to SignUp
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;