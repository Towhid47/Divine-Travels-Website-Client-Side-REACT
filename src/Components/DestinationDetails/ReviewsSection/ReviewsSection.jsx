import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/auth.context";

const ReviewsSection = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.AddReview.value;
    const userReview = {user, review };
    console.log(userReview);
  };

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
      <div className="my-5"></div>
      {/*///////////////// Show Reviews Section End //////////////////////////////// */}
    </div>
  );
};

export default ReviewsSection;
