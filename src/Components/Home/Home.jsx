import React from 'react';
import Banner from './Banner/Banner';
import OurServices from './OurServices/OurServices';
import PopularDestinations from './PopularDestinations/PopularDestinations';

const Home = () => {
    return (
        <div>
              <Banner></Banner> 
              <OurServices></OurServices>
              <PopularDestinations></PopularDestinations>
        </div>
    );
};

export default Home;