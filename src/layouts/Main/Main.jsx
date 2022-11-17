import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../../Components/Navigationbar/Navigationbar';

const Main = () => {
    return (
        <div>
             <Navigationbar></Navigationbar>
             <Outlet></Outlet>
        </div>
    );
};

export default Main;