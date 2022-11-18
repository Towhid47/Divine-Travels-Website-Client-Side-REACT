import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animation/login.json";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import google from "../../assets/custom icons/google.png";
import "./Login.css";

const Login = () => {

    const handleSignIn = (e) =>{
        e.preventDefault();
    }





  return (
    <div>
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center container">
        <div className="w-100 w-lg-50">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>

        {/* //////////////////////////Login Form/////////////////// */}
        <div className="w-100 w-lg-50">
          <div>
            <h1 className="text-center">Log In</h1>
          </div>
          <Form onSubmit={handleSignIn} className="mt-4 form-style">

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold fs-3">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="border border-dark border-2"
                required
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold fs-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                className="border border-dark border-2"
                required
              />
            </Form.Group>

            <p className="my-2 fw-semibold">
              Don't Have an Account ?{" "}
              <span>
                <Link to="../register"> Create A new Account </Link>
              </span>
            </p>

            <input type="submit" className="w-100 btn text-light button-color" value="Sign In">
            </input>

            <div className="my-4 text-center">
              <p className="fw-semibold">----Signin with social Accounts----</p>
              <Button className="btn btn-light" title="SignIn with Google">
                <img src={google} className="" alt="" />
              </Button>{" "}
              {"  "}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
