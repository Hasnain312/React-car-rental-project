"use client";

import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import HomePage from "./Home";
import NavbarComponent from "./header";
import Page from "./Car"; // Correct import for the Page component
import ReservedCarsPage from "./bookedCar";
import AvailableCarPage from "./availableCar";

const UserLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Start with login state as false
  const [currentPage, setCurrentPage] = useState("HomePage"); // Default to HomePage

  // Handle login submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((name === "hasnain" && password === "12345") || (name === "user" && password === "user12")) {
      console.log("Login successful");
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  // Toggle password visibility
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case "HomePage":
        return <HomePage />;
      case "Cars":
        return <Page />;
      case "BookedCars":
        return <ReservedCarsPage />;
      case "AvailableCar":
        return <AvailableCarPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="image">
      {!isLoggedIn ? (
        <Container className="col-sm-4 p-5 bg-primary bg-opacity-25">
          <h3 className="text-center fw-bold p-3 shadow-sm border text-light bg-primary">LOGIN</h3>
          {error && <Alert variant="danger" className="text-center">{error}</Alert>}
          <Form className="container" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginUsername">
              <Form.Label className="fw-bold text-light">Name:</Form.Label>
              <Form.Control
                type="text"
                className="bg-primary text-light"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label className="fw-bold text-light">Password:</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  className="bg-primary text-light"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="input-group-text bg-primary">
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-light"
                    onClick={handleShowPassword}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>
            </Form.Group>
            <Button type="submit" className="btn-primary w-50 d-flex justify-content-center m-auto mb-3">
              Login
            </Button>
          </Form>
        </Container>
      ) : (
        <div>
          <NavbarComponent setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />
          {renderPage()}
        </div>
      )}
    </div>
  );
};

export default UserLogin;
