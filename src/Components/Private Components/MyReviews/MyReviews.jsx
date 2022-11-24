import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReviews = () => {

    useEffect(() => {
        document.title = 'Divine Travels : My Reviews';
      }, []);

    const loadReviews = useLoaderData();
    console.log(loadReviews);

    return (
        <div className='container'>
            <div className=" m-3 border border-secondary border-1  rounded-3">
                <div>
              {
                 loadReviews.map(review => <div className="m-5 button-color border border-secondary border-2 rounded-3 p-4">
                    <div className="d-flex ">
                        <div className="div-size">
                        <img className='w-100 rounded-circle' src={review.user.photoURL} alt=""></img>
                        </div>   
                        <div className="div-size">
                            <h3 className="m-2 fw-bold">{review.user.displayName}</h3>
                            <h5 className="m-2">{review.user.email}</h5>
                        </div>
                    </div>
                    <div>
                        <p className="m-5 fs-2 text-light">{review.review}</p>
                    </div>
                    
                 
                 </div>)
              }
                </div> 
             </div>   
        </div>
    );
};

export default MyReviews;