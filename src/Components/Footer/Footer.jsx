import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Logo/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className='bg-black text-center text-light p-5 mt-5'>
            <div className='p-5 mt-5'>
                <img src={img} alt="" />
                <h1 className='footer-title'>Divine Travels</h1>
                <p className='footer-text'>Add Stop overs , Pay less & Discover the World
Explore the destination according to your dream. Choose many amazing places around the world. Start exploring today.</p>
            </div>
            <div className='text-light mt-2'><hr /></div>
            <div className='text-light '>
                <p>Office 41 , Shehbaz Building </p>
                <p>Sultanate of Oman</p>
            </div>
            <div className='d-lg-flex justify-content-between'>
                  <p className='text-start fs-5'>&copy; Copyright 2022. All rights Reserved</p>  
                  <div>
                      <Link to='./destinations' className='fs-5 text-decoration-none text-color'>Destinations</Link>
                      <Link to='./blog' className='fs-5 text-decoration-none text-color ms-5'>blog</Link>
                  </div>
            </div>
        </div>
    );
};

export default Footer;