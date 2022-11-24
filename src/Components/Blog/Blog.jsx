import Accordion from "react-bootstrap/Accordion";
import React from "react";

function Blog() {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL & NoSQL</Accordion.Header>
          <Accordion.Body className="text-start fs-5">
             <ol>
                <li>Definition</li>
                 <ul>
                    <li>SQL - SQL databases are primarily called RDBMS or Relational Databases</li>
                    <li>NOSQL - NoSQL databases are primarily called as Non-relational or distributed database</li>
                </ul>  

                <li>Type</li>
                <ul>
                    <li>SQL - SQL databases are table based databases</li>
                    <li>NOSQL - NoSQL databases can be document based, key-value pairs, graph databases</li>
                </ul> 
             </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is JWT and How does it work?</Accordion.Header>
          <Accordion.Body className="text-start fs-5">
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
          <Accordion.Body className="text-start fs-5">
            <ul>
                <li>JavaScript --->  JavaScript is a programming language.</li>
                <li>NodeJS -----> NodeJS is a runtime for JavaScript. Using NodeJS we can run JS code on the servers.</li>
            </ul>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
          <Accordion.Body className="text-start fs-5">
           <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Blog;
