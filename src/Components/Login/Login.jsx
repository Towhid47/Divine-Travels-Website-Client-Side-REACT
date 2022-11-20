import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animation/login.json";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/custom icons/google.png";
import "./Login.css";
import { AuthContext } from "../../Context/auth.context";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { logIn, googleSignIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    e.target.reset();

    ////// Calling logIn function which is declared in auth.context.js to perform Sign In Authentication
    logIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log In Complete",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => error.message);
  };

  //////////////////////////////////////////////////
  //        Handle Google Sign In
  /////////////////////////////////////////////////

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Google Sign In Complete",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => error.message);
  };

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
                name="email"
                required
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold fs-3">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                className="border border-dark border-2"
                required
              />
            </Form.Group>

            <input
              type="submit"
              className="w-100 btn text-light button-color"
              value="Sign In"
            ></input>

            <div className="my-4 text-center">
              <p className="fw-semibold">----Signin with social Accounts----</p>
              <Button onClick={handleGoogleSignIn} className="btn btn-light" title="SignIn with Google">
                <img src={google} className="" alt="" />
              </Button>{" "}
              {"  "}
            </div>

            <p className="my-2 fw-semibold">
              Are you New Here ?{" "}
              <span>
                <Link to="../register" className="text-decoration-none fw-bold">
                  {" "}
                  Create A new Account{" "}
                </Link>
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
