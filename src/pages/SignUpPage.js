import React from "react";

import Signup from "../components/SignUp";
import Header from "../components/header";
import Navbar from "../components/Navbar";

export default function SignupPage() {
  return (
    <>
    <Navbar/>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <Signup />
    </>
  );
}
