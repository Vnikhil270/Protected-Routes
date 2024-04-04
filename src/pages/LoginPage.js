import React from "react";
import Login from "../components/Login";
import Header from "../components/header";
import Navbar from "../components/Navbar";

function LoginPage() {
  return (
    <>
    <Navbar/>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  );
}

export default LoginPage;
