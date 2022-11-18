import booking from '../../../assets/custom icons/booking.png';
import hotel from '../../../assets/custom icons/hotelbooking.png';
import visa from '../../../assets/custom icons/visa.png';
import dollar from '../../../assets/custom icons/dollar.png';
import tourPackage from '../../../assets/custom icons/package.png';
import ticket from '../../../assets/custom icons/ticket.png';
import care from '../../../assets/custom icons/care.png';
import insurance from '../../../assets/custom icons/insurance.png';
import special from '../../../assets/custom icons/special.png';
import meet from '../../../assets/custom icons/meet.png';
import flight from '../../../assets/custom icons/flight.png';
import pick from '../../../assets/custom icons/pick.png';

import React from 'react';
import './OurServices.css';

const OurServices = () => {
    return (
       <div className='my-5 mx-auto'>
              <div className='mx-auto'>
                 <h1 className=''>What We Do ?</h1>
              </div>

              <div className='mt-2 services container'>
                    <div className='p-2'>
                            <img src={booking} className="w-25" alt=""></img>
                            <h3 className='service-name mt-2'>Online Booking Service</h3>
                            <p>Online booking service through our OTA portal Tlntrip will have multi GDS connectivity and API</p>
                    </div>
                    <div className='p-2'>
                           <img className='w-25' src={ticket} alt="" />
                            <h3 className='service-name mt-2'>Ticketing</h3>
                            <p>We provide 24/7 ticketing service 365 days.</p>
                    </div>
                    <div className='p-2'>
                           <img className='w-50' src={tourPackage} alt="" />
                            <h3 className='service-name mt-2' >Tour Package</h3>
                            <p>Our experience will allow you to customize package accordingly to your need.</p>
                    </div>
                    <div className='p-2'>
                            <img className='w-25' src={hotel} alt=""></img>
                            <h3 className='service-name mt-2'>Hotel Booking</h3>
                            <p>Your 360 hotel booking provider.</p>
                    </div>
                    <div className='p-2'>
                            <img className='w-25' src={visa} alt="" />
                            <h3 className='service-name mt-2' >Visa Assistance</h3>
                            <p>We authorize Singapore, Malaysia , Indonesia , Thailand visa and are able to assist all binds of our visa service.</p>
                    </div>
                    <div className='p-2'>
                            <img className='w-25' src={dollar} alt="" />
                            <h3 className='service-name mt-2'>Foreign Dollar Endosement</h3>
                            <p>Travel service for your at doorstep.</p>
                    </div>
              </div>





        <div className='my-5 offer'>
              <div className='mx-auto'>
                 <h1 className=''>What We Offer ?</h1>
              </div>

              <div className='mt-4 services container'>
                    <div className='p-2'>
                            <img src={flight} className="w-25" alt=""></img>
                            <h3 className='service-name mt-2'>Chartered Flight</h3>
                            <p>We can arrange charted flight for your business and medical travel</p>
                    </div>
                    <div className='p-2'>
                           <img className='w-25' src={insurance} alt="" />
                            <h3 className='service-name mt-2'>Insurance Service</h3>
                            <p>We provide you health and baggage insurance to your travel need</p>
                    </div>
                    <div className='p-2'>
                           <img className='w-25' src={care} alt="" />
                            <h3 className='service-name mt-2' >24/7 Customer Care Service</h3>
                            <p>Our friendly customer service is there for your 24/7 and 365 days</p>
                    </div>
                    <div className='p-2'>
                            <img className='w-25' src={pick} alt=""></img>
                            <h3 className='service-name mt-2'>Visa pick and drop Support</h3>
                            <p>We have pick and drop visa supportive for our corporate customer.</p>
                    </div>
                    <div className='p-2'>
                            <img className='w-25' src={meet} alt="" />
                            <h3 className='service-name mt-2' >Airport meet & greet</h3>
                            <p>Airport meet and greet is a personal VIP service providing by professional greeter to accompany travelers through the airport.</p>
                    </div>
                    <div className='p-2'>
                            <img className='w-25' src={special} alt="" />
                            <h3 className='service-name mt-2'>Special Service Request</h3>
                            <p>We can provide you with the requirement of wheelchair or special service.</p>
                    </div>
              </div>
          </div>   
       </div>
    );
};

export default OurServices;