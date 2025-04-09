"use client";
import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';

const NavigationBar = ({ setIsLoggedIn, setCurrentPage }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <Navbar bg="primary" variant="light" expand="md" className="fw-bold">
      <Container>
        <Navbar.Brand href="#" aria-label="Company Logo">
          <img src="/images/logoo.jpg" width={70} height={70} alt="Company Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handlePageChange('HomePage')} aria-label="Navigate to HomePage">
              HomePage
            </Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Cars')} aria-label="Navigate to Cars">
              Cars
            </Nav.Link>
            <Nav.Link onClick={() => handlePageChange('BookedCars')} aria-label="Navigate to Booked Cars">
              Booked Cars
            </Nav.Link>
            <Nav.Link onClick={() => handlePageChange('AvailableCar')} aria-label="Navigate to Available Cars">
              Available Cars
            </Nav.Link>
            {/* Wrapped the Logout button in a Nav.Item for correct semantics */}
            <Nav.Item>
              <Button variant="light" onClick={handleLogout} aria-label="Logout">
                Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;




