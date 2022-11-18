import React from 'react';
import Lottie from "lottie-react";
import travel from "../../../assets/Animation/travel.json";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className='container'>
             <> 
            <div className='d-flex flex-column flex-lg-row align-items-lg-center'>
                <header className='m-5 '>
                    <h1 className='fs-1'>Travel <span className='text-success'>More!</span></h1>
                    <h3>Add Stop overs , Pay less & Discover the World </h3>
                    <p>Explore the destination according to your dream. Choose many amazing places around the world. Start exploring today.</p>
                    <Link to='/destinations'><Button className='button-color'>Let's Explore the World</Button></Link>
                </header>
            
            {/* this div section is for Animation */}
                <div className='w-75'>
                    <Lottie animationData={travel}></Lottie>
                </div>
    
          </div>
      </>  
        </div>
    );
};

export default Banner;