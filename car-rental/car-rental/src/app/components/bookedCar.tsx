"use client";

import React, { useEffect, useState } from "react";
import { Card, Button, Spinner, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Interface for Car properties
interface Car {
  id: string; // Matches MockAPI's string-based IDs
  make: string;
  model: string;
  availability: boolean; // Changed to boolean for easier handling
  carImage: string;
  color: string;
  airConditioning: boolean;
}

const ReservedCarsPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch reserved cars from the API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("https://67911642af8442fd7378fb61.mockapi.io/cars");
        if (!res.ok) {
          throw new Error("Failed to fetch cars.");
        }
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to fetch cars. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Free reserved cars by setting availability to true
  const freeCar = async (id: string) => {
    try {
      const res = await fetch(`https://67911642af8442fd7378fb61.mockapi.io/cars/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ availability: true }),
      });

      if (!res.ok) {
        throw new Error("Failed to free the car.");
      }

      // Update the state to reflect the change
      setCars((prevCars) =>
        prevCars.map((car) =>
          car.id === id ? { ...car, availability: true } : car
        )
      );

      alert("Car successfully freed!");
    } catch (err) {
      console.error("Error freeing the car:", err);
      setError("Failed to free the car. Please try again.");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" className="text-primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  // Filter reserved cars
  const reservedCars = cars.filter((car) => !car.availability);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Reserved Cars</h1>
      <Row className="g-4">
        {reservedCars.length > 0 ? (
          reservedCars.map((car) => (
            <Col key={car.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={car.carImage}
                  alt={`${car.make} ${car.model}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>
                    {car.make} {car.model}
                  </Card.Title>
                  <Card.Text>Color: {car.color}</Card.Text>
                  <Card.Text>
                    Air Conditioning: {car.airConditioning ? "Yes" : "No"}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => freeCar(car.id)}
                    disabled={car.availability}
                    className="w-100"
                  >
                    {car.availability ? "Available" : "Free Car"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="text-center">
            <h3 className="text-secondary">No reserved cars at the moment.</h3>
          </div>
        )}
      </Row>
    </div>
  );
};

export default ReservedCarsPage;
