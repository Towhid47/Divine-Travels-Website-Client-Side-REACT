import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DestinationCard from '../DestinationCard/DestinationCard';
import './Destinations.css';

const Destinations = () => {

    const destinations = useLoaderData();
    


    return (
        <div className='cards-style ms-5'>
            {
                destinations.map(destination=> <DestinationCard key={destination._id} destination={destination}>

                </DestinationCard>)
            }
        </div>
    );
};

export default Destinations;