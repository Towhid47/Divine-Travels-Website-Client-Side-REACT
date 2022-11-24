import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import OurServices from './OurServices/OurServices';
import PopularDestinations from './PopularDestinations/PopularDestinations';

const Home = () => {
    useEffect(() => {
        document.title = 'Divine Travels : Home ';
      }, []);
    return (
        <div>
              <Banner></Banner> 
              <OurServices></OurServices>
              <PopularDestinations></PopularDestinations>
        </div>
    );
};

export default Home;