"use client";
import React, { useState, useEffect } from "react";
import CarList from "./carlist"; // Ensure this path points to the correct CarList component
import AddCars from "./cars"; // Ensure this path points to the correct AddCars component
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the Car interface to structure car data
interface Car {
  id: string;
  make: string;
  model: string;
  color: string;
  seatCapacity: string;
  transmission: string;
  airConditioning: string;
  mileage: string;
  Liscense: string;
  carImage: string;
}

const Cars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]); // State to hold the list of cars

  // Fetch cars when the component mounts
  useEffect(() => {
    fetchCars();
  }, []);

  // Fetch cars from the API
  const fetchCars = async () => {
    try {
      const res = await fetch("https://67911642af8442fd7378fb61.mockapi.io/cars");
      if (!res.ok) {
        throw new Error("Failed to fetch cars");
      }
      const data: Car[] = await res.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  // Delete a car by ID
  const handleDeleteCars = async (id: string) => {
    try {
      const res = await fetch(`https://67911642af8442fd7378fb61.mockapi.io/cars/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete car");
      }
      fetchCars(); // Refresh car list after deletion
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div className="bg-light">
      <Container>
        {/* Add Cars Form */}
        <Row>
          <Col>
            <h2 className="my-4 text-dark text-center">Add New Cars</h2>
            <AddCars onCarAdded={fetchCars} /> {/* Ensure onCarAdded is correctly passed */}
          </Col>
        </Row>

        {/* Display Car List */}
        <Row>
          <Col>
            <h1 className="my-4 text-dark fw-bold text-center">Car List</h1>
            <CarList cars={cars} onDelete={handleDeleteCars} /> {/* Pass props correctly */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cars;

