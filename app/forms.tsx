"use client";

import React, { useState } from "react";

type Props = {};

const Forms = (props: Props) => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");
  const onUsernameChage = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setusername(value);
  };
  const onEmaileChage = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setEmailError("");

    setEmail(value);
  };
  const onPasswordChage = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setPassword(value);
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setFormError("All fileds are required");
    }
    if (!email.includes("@")) {
      setEmailError("email is required");
    }
    console.log(username, email, password);
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <input
        value={username}
        onChange={onUsernameChage}
        type="text"
        placeholder="Username"
      />
      <input
        onChange={onEmaileChage}
        value={email}
        type="email"
        placeholder="Email"
      />
      {emailError}
      <input
        onChange={onPasswordChage}
        value={password}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default Forms;
