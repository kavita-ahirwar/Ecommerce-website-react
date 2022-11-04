import { React } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import beckry from "../../../../assests/images/bakery.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function GridCard() {
  const baseURL = "https://freshness12.herokuapp.com/product-category/bakery";

  const [post, setPost] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get(baseURL);
    setPost(result.data);
    console.log(result.data);
  };

  return (
    <>
      {/* <div className="container mt-5" style={{ marginLeft: "300px" }}>
        <div className="row">
          <div className="col-9">
            
            <div className="row" style={{ marginLeft: "20px" }}>
              {post.map((m) => (
                <div key={m["_id"]} className="col-4 mt-5">
                  <Card style={{ width: "15rem", height: "23rem" }}>
                    <Card.Img
                      variant="top"
                      src={m?.image}
                      style={{ width: "240px", height: "180px" }}
                    />
                    <Card.Body>
                      <Card.Title className="title1 mt-2">
                        {m?.title}
                      </Card.Title>
                      <Card.Text className="description1 mt-2">
                        {m?.discription}
                      </Card.Text>
                      <Button variant="light" className="USDButton1 mt-4">
                        {m?.price} USD
                      </Button>
                      <Button className="buyNow mt-4">Buy Now</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))} */}

      <div className="container">
        <div className="row" style={{ marginLeft: "400px" }}>
          <div className="col-lg-12">
            <div className="row mt-5">
              {post.map((m) => (
                <div key={m["_id"]} className="col-4 mt-5">
                  <Card style={{ width: "16rem", height: "24rem" }}>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "238px",
                        height: "160px",
                        textAlign: "center",
                        marginTop: "5px",
                        marginLeft: "7px",
                        marginRight: "10px",
                      }}
                      src={m?.image}
                    />
                    <Card.Body>
                      <Card.Title
                        className="title"
                        style={{ fontWeight: "bold" }}
                      >
                        {m?.title}
                      </Card.Title>
                      <Card.Text className="description">
                        {m?.discription}
                      </Card.Text>
                      <Button variant="none" className="USDButton">
                        <h6
                          className="price"
                          style={{ width: "65px", marginTop: "35px" }}
                        >
                          0.28 USD
                        </h6>
                        {m?.price} USD
                      </Button>
                      <Button className="buyNow" variant="success">
                        Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
              {/* </div>
        </div> */}

              {/* <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
                    >
                      1.48 USD
                    </Button>
                    <Button className="" variant="success">
                      {" "}
                      Buy Now{" "}
                    </Button>
                  </Card.Body>
                </Card>
              </div> */}
              {/* 
              <div className="col-lg-4">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "18rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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

              <div className="col-lg-4 mt-5">
                <Card
                  style={{ width: "17rem", marginTop: "50px", height: "22rem" }}
                >
                  <Card.Img variant="top" src={beckry} alt="beckry" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      Product Title
                    </Card.Title>
                    <Card.Text>
                      Space for a small product description{" "}
                    </Card.Text>
                    <Button
                      variant="Light"
                      className="USDButton "
                      style={{ marginRight: "10px" }}
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
