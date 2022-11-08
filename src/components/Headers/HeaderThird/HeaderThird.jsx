import { React } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "./HeaderThird.css";
import { NavLink } from "react-bootstrap";



export function HeaderThird() {
  return (
    // <div className="navbar3">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ margin: "20px" }}
      >
        <Container>
          {/* <Navbar.Toggle href="" >Bakery</Navbar.Toggle> */}
          <Navbar aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Bakery
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/inventory">Inventory</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Fruit and vegetables
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Meat and fish
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Drinks
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Kitchen
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Special nutrition
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Baby
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Pharmacy
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    // </div>
  );
}
