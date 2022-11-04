import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import bakery from "../../../assests/images/bakery.png";
import "./Blogs.css";

export function Blogs() {
  return (
    <div className="main5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <div className="heading">
              <h3 style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Read our Blog posts
              </h3>
            </div>
          </div>
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <div className="butn">
              <Button className="btn m-lg-2" variant="none">
                Go to Blog
                <BsChevronRight style={{ color: "#6A983C" }} />
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-5">
            <Button
              className="btn mt-2"
              variant="outline-success"
              style={{ fontSize: "15px" }}
            >
              Dinner tips
            </Button>
            <Card
              style={{
                width: "25rem",
                marginTop: "130px",
                backgroundColor: "black",
                backgroundImage: "linear-gradient(white, black)",
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: "20px" }}>
                  {" "}
                  Our chef tips for a great and tasty dinner ready in 20minutes
                </Card.Text>
                <div className="">
                  <div
                    className="border border-success rounded-circle"
                    style={{
                      width: 40,
                      height: 40,
                      margin: 30,
                      background: "white",
                    }}
                  >
                    <div className="h-100 d-flex justify-content-center align-items-center"></div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 mt-5">
            <Card style={{ width: "19rem" }}>
              <Card.Img variant="top" src={bakery} alt="beckry" />
              <Card.Body>
                <Button
                  variant="Light"
                  className="USDButton "
                  style={{ marginRight: "10px", color: "green" }}
                >
                  Vegetable
                </Button>
                <Card.Text className="mt-2">
                  Which vegetable your family will love and want’s eat each day
                </Card.Text>
                <h6>Author 15. 6. 2020</h6>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 mt-5">
            <div className="head1">
              <h5>Salat is kinda good start to your morning routines</h5>
              <p>Author 15. 6. 2020</p>
            </div>
            <div className="head2 mt-5">
              <h5>Salat is kinda good start to your morning routines</h5>
              <p>Author 15. 6. 2020</p>
            </div>
            <div className="head3 mt-5">
              <h5>Salat is kinda good start to your morning routines</h5>
              <p>Author 15. 6. 2020</p>
            </div>
          </div>
          <div className="col-lg-2 mt-5">
            <Card
              style={{ width: "5rem", height: "5rem", marginLeft: "80px" }}
            ></Card>
            <br />
            <Card
              style={{ width: "5rem", height: "5rem", marginLeft: "80px" }}
            ></Card>
            <br />
            <Card
              style={{ width: "5rem", height: "5rem", marginLeft: "80px" }}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
