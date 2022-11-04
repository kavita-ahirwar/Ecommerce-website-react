import { React } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCart } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "./HeaderSecond.css";

export function HeaderSecond() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      style={{ marginTop: "20px" }}
    >
      <Container>
        <Navbar.Brand href="" className="fresh">
          Freshnesecoms
        </Navbar.Brand>
        <Navbar aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="me-auto"></Nav>
        <InputGroup className="drop">
          <DropdownButton
            variant="outline-secondary"
            title="All Categries"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="">Separated link</Dropdown.Item>
          </DropdownButton>
          <Form.Control
            aria-label="Text input with dropdown button"
            placeholder="Search Products, categories ..."
          />
        </InputGroup>
        <Nav className="nav1">
          <Nav.Link href="" className="link">
            <span style={{ height: "500px" }}>
              <BsFillPersonFill />
            </span>
          </Nav.Link>
          <Nav.Link eventKey={2} href="" className="link">
            <span>
              <BsCart />
            </span>
          </Nav.Link>
        </Nav>
        
      </Container>
    </Navbar>
  );
}
