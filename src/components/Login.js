import { useEffect, useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_BASE_URL, API_KEY } from "../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authentication } from "../config/commonFunctions";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
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

  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = (data) => {
    authenticateUser(data);
  };

  const navigatePage=()=>{
    navigate("/dashboard")
  }

  const authenticateUser = async (data) => {
    authentication("/api/login", data, navigatePage);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
