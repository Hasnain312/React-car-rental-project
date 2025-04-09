"use client";

import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

const AddCars: React.FC<{ onCarAdded: () => void }> = ({ onCarAdded }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [seatCapacity, setSeatCapacity] = useState("");
  const [transmission, setTransmission] = useState("Manual");
  const [airConditioning, setAirConditioning] = useState("Yes");
  const [mileage, setMileage] = useState("");
  const [availability, setAvailability] = useState("Yes");
  const [carImage, setCarImage] = useState("");

  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newCar = {
      make,
      model,
      color,
      seatCapacity,
      transmission,
      airConditioning,
      mileage,
      availability,
      carImage,
    };

    try {
      await fetch("https://67911642af8442fd7378fb61.mockapi.io/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
      });

      onCarAdded(); // Refresh the list of cars after adding
      router.push("/"); // Redirect to the home page after submission
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <Card className="p-4 shadow-lg" style={{ width: "50rem", borderRadius: "15px" }}>
        <h1 className="text-center fw-bold mb-4 bg-primary" style={{ color: "#343a40" }}>CarVilla: Add a New Car</h1>
        <Form onSubmit={handleSubmit}>
          <div className="row bg-primary">
            {/* First column */}
            <div className="col-6 ">
              <Form.Group controlId="make" className="mb-3 " >
                <Form.Label className="fw-bold text-light">Manufacturer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the car's manufacturer"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="model" className="mb-3">
                <Form.Label className="fw-bold text-light">Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the car's model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="color" className="mb-3">
                <Form.Label className="fw-bold text-light">Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the car's color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="seatCapacity" className="mb-3">
                <Form.Label className="fw-bold text-light">Seat Capacity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the car's seat capacity"
                  value={seatCapacity}
                  onChange={(e) => setSeatCapacity(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="mileage" className="mb-3">
                <Form.Label className="fw-bold text-light">Mileage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the car's mileage"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                />
              </Form.Group>
            </div>

            {/* Second column */}
            <div className="col-6">
              <Form.Group controlId="transmission" className="mb-3">
                <Form.Label className="fw-bold text-light">Transmission</Form.Label>
                <Form.Select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="airConditioning" className="mb-3">
                <Form.Label className="fw-bold text-light">Air Conditioning</Form.Label>
                <Form.Select value={airConditioning} onChange={(e) => setAirConditioning(e.target.value)}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="availability" className="mb-3">
                <Form.Label className="fw-bold text-light">Availability</Form.Label>
                <Form.Select value={availability} onChange={(e) => setAvailability(e.target.value)}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="carImage" className="mb-3">
                <Form.Label className="fw-bold text-light">Car Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter car image URL"
                  value={carImage}
                  onChange={(e) => setCarImage(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Button variant= "primary" type="submit" className="px-5 py-2" >
              Add Car
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddCars;
