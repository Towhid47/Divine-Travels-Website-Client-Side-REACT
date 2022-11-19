import React, { useContext } from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/Animation/registration.json";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/custom icons/google.png";
import './Register.css';
import { AuthContext } from "../../Context/auth.context";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {

  const navigate = useNavigate();

    const {googleSignIn, register } = useContext(AuthContext);


    



  /////////////////////////////////////////////////
  ///       Handle Name, Email , Password
  ////////////////////////////////////////////////
  
  const handleRegisterSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        e.target.reset();

      /////// Calling register function which is declared in auth.context.js to perform Sign Up Authentication (create a new user)
        register(email,password)
        .then( result =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registration Successful',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/login')
        } )
        .catch(error => error.message)



    }


    
     

       








    //////////////////////////////////////////////////
    //        Handle Google Sign In 
    /////////////////////////////////////////////////
     
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () =>{
        googleSignIn(googleProvider)
        .then(result => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Google Sign In Complete',
              showConfirmButton: false,
              timer: 1500
            })
       })
       .catch(error => error.message);
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
        <Form onSubmit={handleRegisterSubmit} className="mt-4 form-style">
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="fw-semibold fs-3">
              Enter Your Name
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
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
              name="email"
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
              name="photoURL"
              placeholder="Profile Picture Link"
              className="border border-dark border-2"
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

          <input type="submit" className="btn text-light w-100 button-color" value="Sign Up">
          </input>

          <div className="my-4 text-center">
            <p className="fw-semibold">----Signup with social Accounts----</p>
            <Button onClick={handleGoogleSignIn} className="btn btn-light" title="Signup with Google">
              <img src={google} className="" alt="" />
            </Button>{" "}
            {"  "}
          </div>
          <p className="my-2 fw-semibold">
            Already Have an Account ?{" "}
            <span>
              <Link to="../login" className="text-decoration-none fw-bold"> LOG IN </Link>
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
