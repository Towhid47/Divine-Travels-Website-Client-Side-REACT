import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './DestinationCard';

const DestinationCard = ({destination}) => {
    console.log(destination);
   const {destination_title, days, details, image, price, _id} = destination;
  return (
    <div>
      <Card style={{ width: "100%" , height:"100%" }}>
       <PhotoProvider>
             <PhotoView src={image}>
                  <Card.Img variant="top" src={image} />
             </PhotoView>
       </PhotoProvider> 
        <Card.Body className="shadow p-4 bg-body rounded border-0">
          <Card.Title className="fs-2">{destination_title}</Card.Title>
          <Card.Text>
            {details.substring(0,99)+"..."}
          </Card.Text>
          <div className="d-flex justify-content-around">
                <Card.Text className="fw-bold fs-5">
                price : {price}
                </Card.Text>
                <Card.Text className="fw-bold fs-5">
                Days : {days}
                </Card.Text>
          </div>
          <Link to={`/destinations/${_id}`}>
              <Button className="button-color w-100 mt-4">Know Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DestinationCard;
