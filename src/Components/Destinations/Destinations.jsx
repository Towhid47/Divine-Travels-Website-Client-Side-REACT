import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import DestinationCard from '../DestinationCard/DestinationCard';
import './Destinations.css';

const Destinations = () => {

    useEffect(() => {
        document.title = 'Divine Travels : Destinations';
      }, []);

    const destinations = useLoaderData();
    


    return (
        <div className='cards-style container'>
            {
                destinations.map(destination=> <DestinationCard key={destination._id} destination={destination}>

                </DestinationCard>)
            }
        </div>
    );
};

export default Destinations;