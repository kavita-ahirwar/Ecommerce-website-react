import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
// import beckry from '../../public/images/bakery.png'
import  bakery  from "../../../assests/images/bakery.png";
// import { useState,useEffect } from "react";
// import axios from 'axios';
// import { CDBSidebar,CDBSidebarContent,CDBSidebarFooter, CDBSidebarHeader,CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import './HeadLine.css'
import { Blogs } from "../Blogs";


export function HeadLine() {
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


    return (<>
        <div className="main4 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ "marginTop": "100px" }}>
              <div className="heading">
                <h3 style={{ "marginLeft": "10px", "fontWeight": "bold" }}>
                  Section Headline
                </h3>
              </div>
            </div>
            <div className="col-lg-6" style={{ "marginTop": "100px" }}>
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
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={bakery} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "marginRight": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={bakery} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "marginRight": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={bakery} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "marginRight": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "marginTop": "35px" }}
                  >
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={bakery} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "marginRight": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
   
 </>
    );
}