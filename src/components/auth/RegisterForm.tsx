"use client";
import SocialIcons from "@/Common/SocialIcons";
import { Href } from "@/utils/Constant";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { accountLoginAction, accountRegisterAction } from "@/store/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

const RegisterForm = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [formValues, setFormValues] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@gmail.com",
    password: "JohnDoe!123456789",
  });
  const dispatch = useDispatch<AppDispatch>();
  const { firstname, lastname, email, password } = formValues;
  const router = useRouter();
  const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const formSubmitHandle = async (event: FormEvent) => {
    event.preventDefault();
    // if (email === "Test@gmail.com" && password === "Test@123") {
    //   Cookies.set("token", JSON.stringify(true));
    //   router.push("/dashboard");
    //   toast.success("login successful");
    // } else {
    //   alert("wrong email");
    // }
    console.log(formValues);
    dispatch(accountRegisterAction(formValues));
    // .then((result) => {
    //   const token = localStorage.getItem("token");
    //   console.log("token: ", token);
    //   console.log("result: ", result);
    //   if (token) {
    //     router.push("/dashboard");
    //     toast.success("Login successful");
    //   } else {
    //     toast.error("Login failed: " + result.payload);
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error logging in:", error);
    // });
    // const token = localStorage.getItem("token");
    // console.log("token: ", token);
    // if (token) {
    //   Cookies.set("token", token);
    //   router.push("/dashboard");
    //   toast.success("login successful");
    // } else {
    //   toast.error("wrong email");
    // }
  };

  return (
    <form className="theme-form" onSubmit={formSubmitHandle}>
      <h4>Create your account</h4>
      <p>Enter your personal details to create account</p>
      <div className="form-group">
        <label className="col-form-label form-label-title  pt-0">
          Your Name
        </label>
        <div className="row g-2">
          <div className="col-6">
            <input
              type="text"
              required
              placeholder="First name"
              value={firstname}
              name="firstname"
              className="form-control"
              onChange={handleUserValue}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              required
              placeholder="Last name"
              value={lastname}
              className="form-control"
              onChange={handleUserValue}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="col-form-label form-label-title">Email Address</label>
        <input
          type="email"
          required
          placeholder="Test@gmail.com"
          value={email}
          name="email"
          className="form-control"
          onChange={handleUserValue}
        />
      </div>
      <div className="form-group">
        <label className="col-form-label form-label-title">Password</label>
        <div className="form-input position-relative">
          <input
            type={showPassWord ? "text" : "password"}
            placeholder="*********"
            onChange={handleUserValue}
            value={password}
            name="login[password]"
            required
            className="form-control"
          />
          <div className="show-hide">
            <span
              onClick={() => setShowPassWord(!showPassWord)}
              className={!showPassWord ? "show" : ""}
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-0">
        <div className="checkbox p-0">
          <label className="d-block" htmlFor="checkbox2">
            <input
              className="checkbox_animated"
              id="checkbox2"
              type="checkbox"
            />
            Agree with
            <a className="ms-2" href={Href}>
              Privacy Policy
            </a>
          </label>
        </div>
        <button className="btn btn-primary btn-block w-100" type="submit">
          Create Account
        </button>
      </div>
      <h6 className="text-muted mt-4 or">Or signup with</h6>
      <SocialIcons />
      <p className="mt-4 mb-0">
        Already have an account?
        <Link className="ms-2" href="/login">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
