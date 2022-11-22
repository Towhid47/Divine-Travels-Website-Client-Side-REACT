import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./DestinationDetails.css";

const DestinationDetails = () => {
  const loadDetails = useLoaderData();
  console.log(loadDetails);

  const { destination_title, days, price, details, image } = loadDetails;

  return (
    <div className="container">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="fs-1">{destination_title}</Card.Title>
          <Card.Text className="fs-4">{details}</Card.Text>
              <Card.Text className="fs-3 fw-semibold text-color">Days: {days}</Card.Text>
              <Card.Text className="fs-3 fw-semibold text-color">Price: {price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DestinationDetails;
