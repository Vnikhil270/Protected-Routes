import React, { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authentication } from "../config/commonFunctions";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

function Signup() {
  let navigate = useNavigate()
  const emailReg = /[A-Za-z0-9\._%+-]+@[a-z0-9\.-]+\.[a-z]{1,4}\S$/g;

  const schema = yup
    .object({
      email: yup
        .string()
        .email()
        .required("Email is required.")
        .matches(emailReg, "Email address is not valid"),
      password: yup.string().required("Password is required"),
    })
    .required();

  const [signupState, setSignupState] = useState(fieldsState);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      userName:"",
      email: "",
      password: "",
      confirmPassword:"",
    },
  });

  const handleChange = (e) =>{

    setSignupState({ ...signupState, [e.target.id]: e.target.value });
    setValue(e.target.name, e.target.value);

  }

  const onSubmit = (data) => {
    createAccount(data);
  };

  const navigatePage=()=>{
    navigate("/dashboard")
  }
  const loginPage=()=>{
    navigate("/dashboard")
  }

  const createAccount = (data) => {
    authentication("/api/signup", data, navigatePage, loginPage);

  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}

export default Signup;
