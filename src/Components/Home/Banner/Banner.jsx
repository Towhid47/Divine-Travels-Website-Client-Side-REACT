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
                <header className='mx-5'>
                    <h1 className='fs-1'>Travel More!</h1>
                    <h3>Add Stop overs , Pay less & Discover the World </h3>
                    <p>Find the right destination for you. Choose from many exiting places. Engage with tourists from diffrent places. Start exploring today. Over 10+ exiting destinations..</p>
                    <Link to='/destinations'><Button>Let's Explore the World</Button></Link>
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