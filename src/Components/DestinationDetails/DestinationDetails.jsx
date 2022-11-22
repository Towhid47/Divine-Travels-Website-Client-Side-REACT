import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import './DestinationDetails.css';

const DestinationDetails = () => {
  const loadDetails = useLoaderData();
  console.log(loadDetails);

  const { destination_title, days, price, details, image } = loadDetails;

  return (
    <div className="container">
      <Card className="bg-dark card-size text-white">
        <div className="img-gradient"><Card.Img className="w-100 " src={image} alt={destination_title} /></div>
        <Card.ImgOverlay>
          <div className="d-flex justify-content-center align-items-center flex-column fs-3">
            <Card.Title className="fs-1">{destination_title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Card.Text className="fw-bold text-light button-color p-2 rounded-3">Days: {days}</Card.Text>
            <Card.Text className="fw-bold text-light button-color p-2 rounded-3">Price: {price}</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default DestinationDetails;
