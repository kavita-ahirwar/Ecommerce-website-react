import { React } from "react";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { Button, Card } from "react-bootstrap";
import "./SideBar.css";
import Form from "react-bootstrap/Form";
import { AiFillStar } from "react-icons/ai";
// import {AiOutlineStar} from 'react-icons/ai'
// import ProgressBar from "react-bootstrap/ProgressBar";
import { Slider } from "@mui/material";
// import {BsSuitHeart} from 'react-icons/bs';
// import { BsChevronRight } from "react-icons/bs";
// import backry from "../../../assests/images/bakery.png";


export function SideBar() {
  return (
    <>
      <div className="container parent">
        <div className="row">
          <div className="col-lg-3">
            <CDBSidebar style={{ backgroundColor: "white" }}>
              <CDBSidebarFooter>
                <div className="row">
                  <div className="col-lg-12 mt-5 " style={{ color: "black" }}>
                    <h4 className="head1 ">Categories</h4>
                    <div className="div mt-4">
                      <p className="head2">
                        Category name
                        <Button className="bttun" variant="light">
                          320
                        </Button>
                      </p>
                      <p className="head2">
                        Category name
                        <Button className="bttun" variant="light">
                          112
                        </Button>
                      </p>
                      <p className="head2">
                        Category name
                        <Button className="bttun" variant="light">
                          32{" "}
                        </Button>
                      </p>
                      <p className="head2">
                        Category name
                        <Button className="bttun" variant="light">
                          48
                        </Button>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mt-5">
                    <div className="brand">
                      <h3>Brands</h3>
                    </div>
                    <Form>
                      <div className=" text mt-4">
                        <Form.Check>
                          <Form.Check.Input />
                          <Form.Check.Label style={{ marginLeft: "15px" }}>
                            {"Filtre by brand item"}
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            {"Filtre by brand item"}
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            {"Filtre by brand item"}
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            {"Filtre by brand item"}
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            {"Filtre by brand item"}
                          </Form.Check.Label>
                        </Form.Check>
                      </div>
                    </Form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mt-5">
                    <div className="brand">
                      <h3>Rating</h3>
                    </div>
                    <Form>
                      <div className=" text mt-4">
                        <Form.Check>
                          <Form.Check.Input />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", color: "#FDBC15" }}
                          >
                            <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                            <AiFillStar /> <AiFillStar />
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar />
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar /> <AiFillStar />
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar /> <AiFillStar /> <AiFillStar />
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                          <Form.Check.Input style={{ marginTop: "22px" }} />
                          <Form.Check.Label
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                          >
                            <AiFillStar style={{ color: "#FDBC15" }} />{" "}
                            <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                            <AiFillStar />
                          </Form.Check.Label>
                        </Form.Check>
                      </div>
                    </Form>
                  </div>
                </div>

                <div className="col-lg-12 mt-5 " style={{ color: "black" }}>
                  <h4 className="head1 ">Price</h4>
                  <div className="div mt-4">
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      style={{
                        width: "200px",
                        marginLeft: "15px",
                        color: "#6A983C",
                      }}
                    />
                    <div className="div mt-3">
                      <Button variant="none" style={{ fontWeight: "bold" }}>
                        Min
                      </Button>
                      <Button
                        variant="none"
                        style={{ marginLeft: "80px", fontWeight: "bold" }}
                      >
                        {" "}
                        Max
                      </Button>
                    </div>
                    <div className="head2">
                      <Button className="btnnnn" variant="light">
                        0
                      </Button>&nbsp;
                      <Button
                        className="btnnnn"
                        variant="light"
                        
                      >
                        000
                      </Button>
                    </div>
                    <div className="head2 mt-5">
                      <Button className="btnnn" variant="success">
                        Apply
                      </Button>
                      <Button
                        className=""
                        variant="none"
                        style={{ marginLeft: "50px", fontSize: "20px" }}
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </CDBSidebarFooter>
            </CDBSidebar>
          </div>
        </div>
        {/* <div className="row">
        <div className="col-lg-4">
        <div className="div">
        <p></p>
        </div>
        </div>
        </div> */}
      </div>
    </>
  );
}
