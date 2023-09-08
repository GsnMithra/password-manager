"use client";

import { Raleway } from "next/font/google";
import stylesSign from "../styles/signup.module.css";
import Link from "next/link";
import { useState } from "react";
import { createUser } from "../../server/serverActions";

const rale = Raleway({
  weight: ["600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const styleContainer = {
  height: "450px !important",
};

export default function SignUp() {
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");
  const [confirmPassword, setConfirmPassword] = useState ("");

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert ("Passwords do not match");
            return;
        }

        console.log ('hi')
        createUser (username, password);
    }

  return (
    <main className={stylesSign.main}>
      <div className={`${stylesSign.container} ${stylesSign.container}`}>
        <div className={stylesSign.headingText}>
          <h1 className={rale.className}>Password Manager</h1>
        </div>

        <div className={stylesSign.operations}>
          <form className={stylesSign.form}>
            <input
              type="text"
              placeholder="Username"
              className={`${stylesSign.input} ${rale.className}`}
              onChange={(e) => setUsername (e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={`${stylesSign.input} ${rale.className}`}
              onChange={(e) => setPassword (e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={`${stylesSign.input} ${rale.className}`}
              onChange={(e) => setConfirmPassword (e.target.value)}
            />
          </form>
        </div>
        <div className={stylesSign.navigate}>
          <Link href="/">
            <button className={stylesSign.button}>Back</button>
          </Link>
          <Link href="/">
            <button className={stylesSign.button} onClick={handleSubmit}>Submit</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
