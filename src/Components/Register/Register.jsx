import React from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/Animation/registration.json";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import google from "../../assets/custom icons/google.png";
import './Register.css';

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault();
    }





  return (
    <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center container">
      <div className="w-100 w-lg-50">
        <Lottie animationData={registerAnimation}></Lottie>
      </div>

      {/* //////////////////////////Registration Form/////////////////// */}
      <div className="w-100 w-lg-50">
        <div>
            <h1 className="text-center">Create A New Account</h1>
        </div>
        <Form onSubmit={handleRegister} className="mt-4 form-style">
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="fw-semibold fs-3">
              Enter Your Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              className="border border-dark border-2"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-semibold fs-3">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="border border-dark border-2"
              required
            />
            <Form.Text className="text-danger"></Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicProfilePic">
            <Form.Label className="fw-semibold fs-3">Profile Picture URL (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Profile Picture Link"
              className="border border-dark border-2"
            />
            <Form.Text className="text-danger"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-semibold fs-3">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Strong Password"
              className="border border-dark border-2"
              required
            />
          </Form.Group>

          <p className="my-2 fw-semibold">
            Already Have an Account ?{" "}
            <span>
              <Link to="../login"> LOG IN </Link>
            </span>
          </p>

          <input type="submit" className="btn text-light w-100 button-color" value="Sign Up">
          </input>

          <div className="my-4 text-center">
            <p className="fw-semibold">----Signup with social Accounts----</p>
            <Button className="btn btn-light" title="Signup with Google">
              <img src={google} className="" alt="" />
            </Button>{" "}
            {"  "}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
