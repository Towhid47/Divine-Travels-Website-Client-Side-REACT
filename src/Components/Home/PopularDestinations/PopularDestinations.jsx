import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DestinationCard from "../../DestinationCard/DestinationCard";
import "./PopularDestinations.css";
const PopularDestinations = () => {
  const [popularDestinationCards, setPopularDestinationCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((res) => res.json())
      .then((data) => setPopularDestinationCards(data));
  }, []);

  console.log(popularDestinationCards);

  return (
    <div className="my-5 container">
      <h1 className="mb-4">Popular Destinations</h1>
      <div className="cards-style">
        {popularDestinationCards.slice(3, 6).map((popularDestinationCard) => (
          <DestinationCard
            key={popularDestinationCard._id}
            destination={popularDestinationCard}
          ></DestinationCard>
        ))}
      </div>
      <div className="text-center my-4"><Link to="/destinations"><Button className="w-50 button-color">See All</Button></Link></div>
    </div>
  );
};

export default PopularDestinations;
