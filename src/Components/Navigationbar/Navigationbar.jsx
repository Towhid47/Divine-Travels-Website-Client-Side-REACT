import React, { useContext } from 'react';
import './Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo/logo.png'
import { AuthContext } from '../../Context/auth.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


const Navigationbar = () => {

    const {user, log_out } = useContext(AuthContext);
    console.log(user);


    //////// Handle Log Out //////////
    const handleLogOut = () =>{
        log_out()
        .then(()=>{
            Swal.fire("Logged Out Successfully")
        })
        .catch(error => error.message);
    }


    return (
        <div>
            <div>
               <Navbar  expand="lg">
                            <Container>
                                <Navbar.Brand href="/" className="" id='logo-font'><img src={logo} alt=""></img></Navbar.Brand>
                                <Navbar.Brand href="/" className='navbar-title fs-1' id='logo-font'>Divine Travels</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <NavLink className={`m-4 fw-bold fs-4  navbar-item  ${({ isActive }) => isActive ? "active": undefined}`} to="/">Home</NavLink>
                                    <NavLink className="m-4 fw-bold fs-4 navbar-item" to="/destinations">Destinations</NavLink>
                                    <NavLink className="m-4 fw-bold fs-4 navbar-item" to="/services">Services</NavLink>
                                    <NavLink className="m-4 fw-bold fs-4 navbar-item" to="/blog">Blog</NavLink>
                                   

                         {/* ////////////// Nav item Toggle when LogIn & LogOut ////////////////////////////////////////// */}
                                 {
                                      (user?.email)  ? 
                                           <> <Link className="m-4 fw-bold text-decoration-none text-black fs-4  navbar-item"><div onClick={handleLogOut} className=' fs-4'>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></div></Link>                                              
                                              <Link to="" title={user.displayName}><img className='w-50 rounded-circle' src={user.photoURL} alt=""></img></Link>  
                                           </>  
                                          :  
                                            <>   <NavLink className="m-4 fw-bold text-black text-decoration-none fs-4 navbar-item" to="/login">Login</NavLink>
                                                 <NavLink className="m-4 fw-bold fs-4 navbar-item" to="/register">Register</NavLink>
                                            </>

                                 }           

                                </Nav>

                                </Navbar.Collapse>
                            </Container>
                </Navbar>
        
      
                                    
                                



        </div>
        </div>
    );
};

export default Navigationbar;