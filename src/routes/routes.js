import { createBrowserRouter, Link } from "react-router-dom";
import error from '../assets/Animation/errror404.json';
import Lottie from "lottie-react";
import Blog from "../Components/Blog/Blog";
import Destinations from "../Components/Destinations/Destinations";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Main from "../layouts/Main/Main";
import { Button } from "react-bootstrap";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,

        children: [
            {
                path:'/', element: <Home></Home>
            },
            {
                path:'/destinations', element: <Destinations></Destinations>
            },
            {
                path:'/services' , element: <Services></Services>
            },
            {
                path:'/blog' , element: <Blog></Blog>
            },
        ]
    },
    {
        path:'/*',
        element:<>
                <div className="d-flex justify-content-center"> <Lottie className="w-75" animationData={error}></Lottie></div>
                <div className="text-center mt-2"><Link to='/'><Button>Go Back To Homepage</Button></Link></div>
                </>
    }
])