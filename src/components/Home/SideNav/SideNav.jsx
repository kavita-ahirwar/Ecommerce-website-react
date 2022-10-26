import { CDBSidebar, CDBSidebarFooter } from "cdbreact"
import { Button, Card } from "react-bootstrap"
import { BsChevronRight } from "react-icons/bs"
import  beckry  from "../../../assests/images/bakery.png";

export function SideNav(){
    return (
    <div className="container">
        {/* side navbar code */}
      {/* <CDBSidebar> */}

      <div className="row mt-5"  >
        <CDBSidebar style={{'backgroundColor':'white'}}>
      <CDBSidebarFooter>
            <h4 style={{ "fontWeight": "bold", 'color':'black' ,'marginTop':'50px'}}>Best selling products </h4>
            <u style={{ color: "#6A983C" }}>
              <h6>Kitchen</h6>
              <h6>Meat and fish</h6>
              <h6>Special nutrition</h6>
              <h6>Pharmacy</h6>
              <h6>Baby</h6>
            </u>
            <Button
              className="btn mt-2"
              variant="outline-secondary"
              style={{ "marginLeft": "10px" }}
            >
              More categories
              <BsChevronRight />
            </Button>{" "}
        
            <h4 style={{ "fontWeight": "bold" ,'color':'black' ,'marginTop':'250px'}}>Best selling products </h4>
            <u style={{ color: "#6A983C" }}>
              <h6>Kitchen</h6>
              <h6>Meat and fish</h6>
              <h6>Special nutrition</h6>
              <h6>Pharmacy</h6>
              <h6>Baby</h6>
            </u>
            <Button className="btn mt-2" variant="outline-secondary" style={{ "marginLeft": "10px" }}>More categories<BsChevronRight /></Button>{" "}
      </CDBSidebarFooter>
      </CDBSidebar>

     {/* {
         post.map((m)=>{   */}
          <div key={['_id']} className="col-lg-3">
          <Card style={{ width: "18rem",'marginTop':'50px','height':'22rem' }}>
            <Card.Img variant="top" src={beckry} alt="beckry" />
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
{/* 
         })
     } */}

       {/* <div className="col-lg-3">
          <Card style={{ width: "17rem",'margin-top':'50px','height':'22rem' }}>
              <Card.Img variant="top" src={beckry} alt="beckry" />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Product Title
                </Card.Title>
                <Card.Text>Space for a small product description </Card.Text>
                <Button
                  variant="Light"
                  className="USDButton "
                  style={{ "margin-right": "10px" }}
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
   
            <div className="col-lg-3">
            <Card style={{ width: "17rem",'margin-top':'50px','height':'22rem' }}>
              <Card.Img variant="top" src={beckry} alt="beckry" />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Product Title
                </Card.Title>
                <Card.Text>Space for a small product description </Card.Text>
                <Button
                  variant="Light"
                  className="USDButton "
                  style={{ "margin-right": "10px" }}
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


          <div className="col-lg-3">
            <Card style={{ width: "18rem",'margin-top':'50px','height':'22rem' }}>
              <Card.Img variant="top" src={beckry} alt="beckry" />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Product Title
                </Card.Title>
                <Card.Text>Space for a small product description </Card.Text>
                <Button
                  variant="Light"
                  className="USDButton "
                  style={{ "margin-right": "10px" }}
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
            
      </div>
      
      {/* </CDBSidebar> */}

      {/* {[1,2,3].map()} */}

{/* no side bar */}

      {/* <div className="main1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-3">
              <h4 style={{ "font-weight": "bold" }}>Best selling products </h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Kitchen</h6>
                <h6>Meat and fish</h6>
                <h6>Special nutrition</h6>
                <h6>Pharmacy</h6>
                <h6>Baby</h6>
              </u>
              <Button
                className="btn mt-5"
                variant="outline-secondary"
                style={{ "margin-left": "10px" }}
              >
                More categories
                <BsChevronRight />
              </Button>{" "}
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
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
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={mk} alt="mk" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
    
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-3">
              <h4 style={{ "font-weight": "bold" }}>Best from Farmers </h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Carrots</h6>
                <h6>Tomatoes</h6>
                <h6>Potatoes</h6>
                <h6>Chicken</h6>
                <h6>Pork</h6>
              </u>
              <Button
                className="btn mt-5"
                variant="outline-secondary"
                style={{ "margin-left": "10px" }}
              >
                More categories
                <BsChevronRight />
              </Button>{" "}
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={mk} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
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
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button variant="success"> Buy Now </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    {" "}
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={mk} alt="mk" />
                <Card.Body>
                  <Card.Title style={{ "font-weight": "bold" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    )
}
