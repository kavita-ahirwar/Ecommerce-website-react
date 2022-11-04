import { React } from "react";
import "./FruitNav.css";
import { Button } from "react-bootstrap";
import { RiLayoutGridLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function FruitNav(props) {
  console.log(props);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2">
            <p className="para">
              Homepage<a className="fruit">/ Fruit and vegetables</a>
            </p>
          </div>
        </div>
      </div>

      <Navbar bg="none" variant="none">
        <Container>
          <Navbar.Brand className="vegetable">
            Fruit and vegetables
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link className="buttons">
              {" "}
              <Button
                variant="light"
                onClick={() => props.changeView(true)}
                className={props.active ? "dark" : "light"}
              >
                <RiLayoutGridLine className="btnn " />
                Grid View
              </Button>
              &nbsp;
            </Nav.Link>
            <Nav.Link className="buttons">
              {" "}
              <Button
                variant="light"
                onClick={() => props.changeView(false)}
                className={props.active ? "light" : "dark"}
              >
                <BsList style={{ fontSize: "30px" }} />
                List View
              </Button>
              &nbsp;
            </Nav.Link>
            <Nav.Link className="buttons">
              <Button
                variant="none"
                className="butn"
                style={{ color: "#6A983C", fontSize: "17px" }}
              >
                117 Products
              </Button>
              &nbsp;
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
