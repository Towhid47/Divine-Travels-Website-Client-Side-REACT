import { createBrowserRouter, Link } from "react-router-dom";
import error from '../assets/Animation/errror404.json';
import Lottie from "lottie-react";
import Blog from "../Components/Blog/Blog";
import Destinations from "../Components/Destinations/Destinations";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Main from "../layouts/Main/Main";
import { Button } from "react-bootstrap";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import MyReviews from "../Components/Private Components/MyReviews/MyReviews";
import AddDestination from "../Components/Private Components/AddDestination/AddDestination";
import DestinationDetails from "../Components/DestinationDetails/DestinationDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,

        children: [
            {
                path:'/', element: <Home></Home>
            },
            {
                path:'/destinations', element: <Destinations></Destinations> ,  loader: () => fetch("http://localhost:5000/destinations"),
            },
            {
                path:'/destinations/:id' , element: <DestinationDetails></DestinationDetails> , loader: ({params}) => fetch(`http://localhost:5000/destinations/${params.id}`) 
            },
            {
                path:'/services' , element: <Services></Services>
            },
            {
                path:'/blog' , element: <Blog></Blog>
            },
            {
                path:'/login' , element:<Login></Login>
            },
            {
                path:'/register', element:<Register></Register>
            },
            {
                path:'/myreviews',
                element: <PrivateRoute>
                      <MyReviews></MyReviews>
                </PrivateRoute>
            },
            {
                path:'/add-destination',
                element: <PrivateRoute>
                      <AddDestination></AddDestination>
                </PrivateRoute>
            },
        ]
    },
    {
        path:'/*',
        element:<>
                <div className="d-flex justify-content-center"> <Lottie className="w-75" animationData={error}></Lottie></div>
                <div className="text-center mt-2"><Link to='/'><Button className="button-color">Go Back To Homepage</Button></Link></div>
                </>
    }
])