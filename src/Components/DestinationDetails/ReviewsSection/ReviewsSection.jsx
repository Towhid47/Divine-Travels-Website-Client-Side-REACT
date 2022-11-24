import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/auth.context";
import "./ReviewsSection.css";
const ReviewsSection = ({ destinationId }) => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.AddReview.value;
    const userReview = { user, review, destinationId };

    fetch(`https://divine-travels-server.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Review Added",
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
      });
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://divine-travels-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-5">
      <h1 className="my-3">
        <u>Reviews</u>
      </h1>
      {/*//////////////// Add Review Section Start ////////////////////////////////*/}
      <div className="container bg-dark rounded-3 border border-dark  p-4">
        <Form onSubmit={handleAddReview}>
          <h4 className="text-info fs-2">Enter Your Review</h4>
          <label for="Enter Review" className="form-label"></label>
          <textarea
            name="AddReview"
            placeholder="Enter Review Here...."
            className="form-control border border-secondary border-2"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
          <div>
            {user?.email ? (
              <Button
                type="submit"
                className="my-3 text-light btn button-color"
              >
                Add your Review
              </Button>
            ) : (
              <Link to="../login">
                <Button className="my-3 text-light button-color">
                  Login to Add Review
                </Button>
              </Link>
            )}
          </div>
        </Form>
      </div>
      {/*/////////////////Add Review Section End ////////////////////////////////// */}

      {/*///////////////// Show Reviews Section Start ////////////////////////////// */}
      <div className=" container m-5"></div>
      <div className=" m-3 border border-secondary border-1  rounded-3">
        <div>
          {reviews.map((review) => (
            <div className="m-5 button-color border border-secondary border-2 rounded-3 p-4">
              <div className="d-flex ">
                <div className="div-size">
                  <img
                    className="w-100 rounded-circle"
                    src={review.user.photoURL}
                    alt=""
                  ></img>
                </div>
                <div className="div-size">
                  <h3 className="m-2 fw-bold">{review.user.displayName}</h3>
                  <h5 className="m-2">{review.user.email}</h5>
                </div>
              </div>
              <div>
                <p className="m-5 fs-2 text-light">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*///////////////// Show Reviews Section End //////////////////////////////// */}
    </div>
  );
};

export default ReviewsSection;
