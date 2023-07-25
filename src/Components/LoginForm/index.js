"use client";
import React, { useState } from "react";
import Input from "../InputCom";
import Button from "../Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../app/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 
  const handleLogin = async () => {
    setLoading(true);
    console.log("Login");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        Password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();
      console.log("userData", userData);

      

      navigate("/profile");
      // Navigate to the profile page
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <Input
        state={email}
        setState={setEmail}
        placeholder="Email"
        type="email"
        required={true}
      />
      <Input
        state={Password}
        setState={setPassword}
        placeholder="Password"
        type="password"
        required={true}
      />

      <Button
        text={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
    </div>
  );
}

export default LoginForm;
