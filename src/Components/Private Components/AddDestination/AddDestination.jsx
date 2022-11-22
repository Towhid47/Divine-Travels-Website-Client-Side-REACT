import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddDestination = () => {

   const handleAddDestination =(event) =>{
    event.preventDefault();
    const destination_title = event.target.name.value;
    const image = event.target.image.value;
    const price = event.target.price.value;
    const days = event.target.days.value;
    const details = event.target.description.value;

    const destination= {destination_title, image, price, days, details};
    console.log(destination);

    fetch('http://localhost:5000/destinations',{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body : JSON.stringify(destination)
    })
    .then(res => res.json())
    .then (data => {
        console.log(data);
    })
   }



  return (
    <div className="d-flex justify-content-center">
      <div className="container  shadow-lg p-3 mb-5 bg-body rounded">
        <h1 className="text-color">Add Destination</h1>
        <Form onSubmit={handleAddDestination} className="text-start">
          <Form.Group className="mb-3">
            <Form.Label className="text-color fs-4 fw-semibold">Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Place Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-color fs-4 fw-semibold">image</Form.Label>
            <Form.Control name="image" type="text" placeholder="Enter image url to show the picture of place" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-color fs-4 fw-semibold">Price</Form.Label>
            <Form.Control name="price" type="text" placeholder="Enter Expenses for the Tour in this Place" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-color fs-4 fw-semibold">Days</Form.Label>
            <Form.Control name="days" type="text" placeholder="Enter Days to stay in this Place" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-color fs-4 fw-semibold">Description</Form.Label>
            <Form.Control name="description" type="text" className="p-5" placeholder="Enter Description of this Place" />
          </Form.Group>
          
          <div className="text-center">
            <Button className="button-color" type="submit">
                Add Destination
            </Button>
          </div>
         
        </Form>
      </div>
    </div>
  );
};

export default AddDestination;
