import React, { useEffect } from 'react';
import './Services.css';

import booking from '../../assets/custom icons/booking.png';
import hotel from '../../assets/custom icons/hotelbooking.png';
import visa from '../../assets/custom icons/visa.png';
import dollar from '../../assets/custom icons/dollar.png';
import tourPackage from '../../assets/custom icons/package.png';
import ticket from '../../assets/custom icons/ticket.png';


const Services = () => {
        useEffect(() => {
                document.title = 'Divine Travels : Services';
              }, []);
    return (
        <div className='mt-3'>
            <div className='text-center title p-5'>
                <h1>Our Services</h1>
                <p>Divine Travels follow standard iteration process for achieve maximum output in less timestamp</p>
            </div>

            <div className='mt-3 services container'>
                    <div className='p-2 service-items'>
                            <img src={booking} className="w-25" alt=""></img>
                            <h3 className='service-name mt-2'>Online Booking Service</h3>
                            <p>Online booking service through our OTA portal Tlntrip will have multi GDS connectivity and API</p>
                    </div>
                    <div className='p-2 service-items'>
                           <img className='w-25' src={ticket} alt="" />
                            <h3 className='service-name mt-2'>Ticketing</h3>
                            <p>We provide 24/7 ticketing service 365 days.</p>
                    </div>
                    <div className='p-2 service-items'>
                           <img className='w-50' src={tourPackage} alt="" />
                            <h3 className='service-name mt-2' >Tour Package</h3>
                            <p>Our experience will allow you to customize package accordingly to your need.</p>
                    </div>
                    <div className='p-2 service-items'>
                            <img className='w-25' src={hotel} alt=""></img>
                            <h3 className='service-name mt-2'>Hotel Booking</h3>
                            <p>Your 360 hotel booking provider.</p>
                    </div>
                    <div className='p-2 service-items'>
                            <img className='w-25' src={visa} alt="" />
                            <h3 className='service-name mt-2' >Visa Assistance</h3>
                            <p>We authorize Singapore, Malaysia , Indonesia , Thailand visa and are able to assist all binds of our visa service.</p>
                    </div>
                    <div className='p-2 service-items'>
                            <img className='w-25' src={dollar} alt="" />
                            <h3 className='service-name mt-2'>Foreign Dollar Endosement</h3>
                            <p>Travel service for your at doorstep.</p>
                    </div>
              </div>
       </div>
    );
};

export default Services;