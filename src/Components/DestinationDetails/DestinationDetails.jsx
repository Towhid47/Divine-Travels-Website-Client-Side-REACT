import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./DestinationDetails.css";
import ReviewsSection from "./ReviewsSection/ReviewsSection";

const DestinationDetails = () => {
  const loadDetails = useLoaderData();

  const { destination_title, days, price, details, image , _id  } = loadDetails;


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

      {/* //////////////////Reviews Section /////////////////////////// */}
      <ReviewsSection destinationId={_id}></ReviewsSection>
    </div>
  );
};

export default DestinationDetails;
