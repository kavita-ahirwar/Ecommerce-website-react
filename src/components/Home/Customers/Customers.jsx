import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
// import beckry from '../../public/images/bakery.png'
import { beckry, mk } from "../../../assests/images/bakery.png";
import { useState,useEffect } from "react";
import axios from 'axios';
import './Customers.css'
import { CDBSidebar,CDBSidebarContent,CDBSidebarFooter, CDBSidebarHeader,CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';



export function Customers() {
  // const baseURL = "https://freshness12.herokuapp.com/user/userdata";
  // const [post, setPost] = React.useState([]);
  // useEffect(() => {
  //   loadProducts();
  // }, []);
  // const loadProducts = async () => {
  //   const result = await axios.get(baseURL);
  //   setPost(result.data);
  //   console.log(result.data);
  // };


    return (
    <div>
         <div className="main3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 " style={{ "marginTop": "100px" }}>
              <div className="heading">
                <h3 style={{ "marginLeft": "10px", "fontWeight": "bold" }}>
                  Our customers says
                </h3>
              </div>
            </div>
            <div className="col-lg-6 " style={{ "marginTop": "100px" }}>
              <div className="butn">
                <Button className="btn m-lg-2" variant="none">
                  Button
                  <BsChevronRight style={{ color: "#6A983C" }} />
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "textAlign": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you need
                    by writiing a text here “
                  </Card.Text>
                  <Card.Title style={{ "textAlign": "center" }}>
                   Name and Surname
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "textAlign": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you need
                    by writiing a text here “
                  </Card.Text>
                  <Card.Title style={{ "textAlign": "center" }}>
                    Name and Surname
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "textAlign": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you need
                    by writiing a text here “
                  </Card.Text>
                  <Card.Title style={{ "textAlign": "center" }}>
                    Name and Surname
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "textAlign": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you
                    needby writiing a text here “
                  </Card.Text>
                  <Card.Title style={{ "textAlign": "center" }}>
                   Name and Surname
                  </Card.Title>
                </Card.Body>
              </Card>
              {/* <div
          className="border border-success rounded-circle"
          style={{ width: 50, height: 50, margin: 50 }}>
          <div className="h-100 d-flex justify-content-center align-items-center"></div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>     
   

  );
}
