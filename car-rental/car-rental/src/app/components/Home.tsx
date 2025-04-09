"use client";

import React from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const HomePage: React.FC = () => {
  return (
    <div className="bg-light">
      <div className="text-center bg-primary text-light py-4">
        <h1 className="fw-bold">Your Trusted Destination for Dream Cars</h1>
      </div>

      {/* Search Form */}
      <Container className="my-4">
        <Form className="row g-3">
          <Form.Group className="col-md-4">
            <Form.Label htmlFor="location" className="text-primary fw-bold">
              Location
            </Form.Label>
            <Form.Control type="text" id="location" placeholder="Search Places" />
          </Form.Group>
          <Form.Group className="col-md-3">
            <Form.Label htmlFor="pickupDate" className="text-primary fw-bold">
              Pick-Up Date
            </Form.Label>
            <Form.Control type="date" id="pickupDate" />
          </Form.Group>
          <Form.Group className="col-md-3">
            <Form.Label htmlFor="returnDate" className="text-primary fw-bold">
              Return Date
            </Form.Label>
            <Form.Control type="date" id="returnDate" />
          </Form.Group>
          <div className="col-md-2 d-flex align-items-end">
            <Button type="submit" className="btn btn-primary w-100">
              Submit
            </Button>
          </div>
        </Form>
      </Container>

      {/* About Section */}
      <Container className="py-4">
        <div className="bg-primary text-light p-4 rounded">
          <h2 className="fw-semibold mb-3">Why Choose CarVilla?</h2>
          <p>
            At <strong>CarVilla</strong>, we believe every journey begins with the right car. Whether you're looking for comfort, style, or performance, CarVilla is here to make your dream car a reality.
          </p>
          <p>
            From sleek sedans and rugged SUVs to fuel-efficient hybrids and luxurious sports cars, our inventory caters to every taste and budget. With a commitment to exceptional service and customer satisfaction, we ensure a seamless car selection process with detailed insights, transparent pricing, and a smooth booking experience.
          </p>
          <p>
            Discover why countless car enthusiasts and first-time buyers trust CarVilla to deliver quality, reliability, and unmatched value.
          </p>
        </div>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-4">
        <h2 className="text-primary text-center fw-bold mb-4">What Our Customers Say</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body className="bg-primary bg-opacity-50 text-light">
                <Card.Text>
                  Great service! The car was in excellent condition and the rental process was smooth.
                </Card.Text>
                <Card.Title className="fw-bold">John Doe</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body className="bg-primary bg-opacity-50 text-light">
                <Card.Text>
                  I have been using this car rental company for years and they never disappoint.
                </Card.Text>
                <Card.Title className="fw-bold">Jane Smith</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body className="bg-primary bg-opacity-50 text-light">
                <Card.Text>
                  Friendly staff and great selection of cars. Highly recommend!
                </Card.Text>
                <Card.Title className="fw-bold">Michael Johnson</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
