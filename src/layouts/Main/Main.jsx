import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navigationbar from '../../Components/Navigationbar/Navigationbar';

const Main = () => {
    return (
        <div>
             <Navigationbar></Navigationbar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;