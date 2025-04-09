import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Interface for the car properties
interface Car {
  id: string;
  make: string;
  model: string;
  color: string;
  seatCapacity: string;
  transmission: string;
  airConditioning: string;
  mileage: string;
  License: string; // Corrected typo
  carImage: string;
}

// Props for the CarList component
interface CarListProps {
  cars: Car[]; // Array of car objects
  onDelete: (id: string) => void; // Function to delete a car
}

const CarList: React.FC<CarListProps> = ({ cars, onDelete }) => {
  return (
    <div className="container">
      {/* Show a message if there are no cars */}
      {cars.length === 0 ? (
        <h3 className="text-center my-4 text-muted">No cars available. Add a new car!</h3>
      ) : (
        <Row className="g-4 justify-content-center">
          {cars.map((car) => (
            <Col key={car.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
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
                  <Card.Text>Seats: {car.seatCapacity}</Card.Text>
                  <Card.Text>Transmission: {car.transmission}</Card.Text>
                  <Card.Text>Air Conditioning: {car.airConditioning}</Card.Text>
                  <Card.Text>Mileage: {car.mileage}</Card.Text>
                  <Card.Text>License: {car.License}</Card.Text>

                  {/* Delete Button */}
                  <Button
                    variant="danger"
                    onClick={() => onDelete(car.id)} // Trigger delete with the car's id
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default CarList;
