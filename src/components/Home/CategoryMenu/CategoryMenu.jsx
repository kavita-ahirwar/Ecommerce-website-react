import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import { SideNav } from "../SideNav";

export function CategoryMenu() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-5 ">
              <h4 style={{ fontWeight: "bold" }}>Category menu</h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Bakery</h6>
                <h6>Fruit and vegetables</h6>
                <h6>Meat and fish</h6>
                <h6>Drinks</h6>
                <h6>Kitchen</h6>
              </u>
              <Button className="btn m-lg-2 " variant="outline-secondary">
                More categories
                <BsChevronRight />
              </Button>
            </div>
            <div className="col-lg-4 mt-5">
              <Card style={{ height: "14rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Text style={{ color: "#6A983C" }}>
                    Banner subfocus
                  </Card.Text>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Space for heading
                  </Card.Title>
                  <Button
                    className="col-lg-4 mt-5"
                    variant="outline-success"
                    style={{ width: "200px" }}
                  >
                    Read recepies
                    <BsChevronRight />
                  </Button>{" "}
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Body>
                  <Card.Text style={{ color: "#6A983C" }}>
                    Banner subfocus
                  </Card.Text>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Space for heading
                  </Card.Title>
                  <Button
                    className="col-lg-4 mt-5"
                    variant="outline-success"
                    style={{ width: "200px" }}
                  >
                    Read recepies
                    <BsChevronRight />
                  </Button>{" "}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
