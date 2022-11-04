import { React } from "react";
import { Button, Card } from "react-bootstrap";
import "./ListCard.css";
import { AiFillStar } from "react-icons/ai";
import {AiOutlineStar} from 'react-icons/ai'
import {BsSuitHeart} from 'react-icons/bs';
import { BsChevronRight } from "react-icons/bs";
import backry from "../../../../assests/images/bakery.png";


export function ListCard(){
  
    return(
        <>
        <div className="container child">
        <div className="row">
          <div className="col-lg-8 mt-5 ">
            <div className="div mt-3"  >
              <Card>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3 ">
                      <Card.Img src={backry} />
                    </div>
                    <div className="col-lg-4 mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">Product title</Card.Title>
                        <Card.Text className="clr">Space for a small product description </Card.Text>
                        <Card.Text>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                         </Card.Text>
                         <div className="row">
                         <div className="col-lg-5">
                         <div className="clr">
                         <Card.Text>Fresheness</Card.Text>
                          <Card.Text>Farm</Card.Text>
                          <Card.Text>Delivery</Card.Text>
                          <Card.Text>Stock</Card.Text>
                         </div>
                        </div>
                        <div className="col-lg-7">
                          <Card.Text>New (Extra fresh)</Card.Text>
                          
                          <Card.Text>Grocery Tarm Fields</Card.Text>
                          <Card.Text>Europe</Card.Text>
                          <Card.Text className="clr1">320 pcs</Card.Text>
                        </div>
                         </div>
                      </Card.Body>
                    </div>
                    <div className="col-lg-4  mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">36.99 USD</Card.Title>
                        <Card.Text className="price1" >48.56</Card.Text>
                      
                        <Card.Text className="clr">Free Shipping <br/>Delivery in 1 day</Card.Text>
                        <Button variant="success" className="bot1 m-lg-3">Product Detail  <BsChevronRight  /></Button>
                        
                
                        <Button variant="light" className="bot2 m-lg-3"  ><BsSuitHeart style={{'height':'40px','width':'25px'}}/>&nbsp;  Product Detail</Button>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="div mt-3"  >
              <Card>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3 ">
                      <Card.Img src={backry} />
                    </div>
                    <div className="col-lg-4 mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">Product title</Card.Title>
                        <Card.Text className="clr">Space for a small product description </Card.Text>
                        <Card.Text>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                         </Card.Text>
                         <div className="row">
                         <div className="col-lg-5">
                         <div className="clr">
                         <Card.Text>Fresheness</Card.Text>
                          <Card.Text>Farm</Card.Text>
                          <Card.Text>Delivery</Card.Text>
                          <Card.Text>Stock</Card.Text>
                         </div>
                        </div>
                        <div className="col-lg-7">
                          <Card.Text>New (Extra fresh)</Card.Text>
                          <Card.Text>Grocery Tarm Fields</Card.Text>
                          <Card.Text>Europe</Card.Text>
                          <Card.Text className="clr1">320 pcs</Card.Text>
                        </div>
                         </div>
                      </Card.Body>
                    </div>
                    <div className="col-lg-4  mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">36.99 USD</Card.Title>
                        <Card.Text className="price1" >48.56</Card.Text>
                        <Card.Text className="clr">Free Shipping <br/>Delivery in 1 day</Card.Text>
                        <Button variant="success" className="bot1 m-lg-3">Product Detail  <BsChevronRight  /></Button>
                        <Button variant="light" className="bot2 m-lg-3"  ><BsSuitHeart style={{'height':'40px','width':'25px'}}/>&nbsp;  Product Detail</Button>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="div mt-3"  >
              <Card>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3 ">
                      <Card.Img src={backry} />
                    </div>
                    <div className="col-lg-4 mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">Product title</Card.Title>
                        <Card.Text className="clr">Space for a small product description </Card.Text>
                        <Card.Text>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                         </Card.Text>
                         <div className="row">
                         <div className="col-lg-5">
                         <div className="clr">
                         <Card.Text>Fresheness</Card.Text>
                          <Card.Text>Farm</Card.Text>
                          <Card.Text>Delivery</Card.Text>
                          <Card.Text>Stock</Card.Text>
                         </div>
                        </div>
                        <div className="col-lg-7">
                          <Card.Text>New (Extra fresh)</Card.Text>
                          
                          <Card.Text>Grocery Tarm Fields</Card.Text>
                          <Card.Text>Europe</Card.Text>
                          <Card.Text className="clr1">320 pcs</Card.Text>
                        </div>
                         </div>
                      </Card.Body>
                    </div>
                    <div className="col-lg-4  mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">36.99 USD</Card.Title>
                        <Card.Text className="price1" >48.56</Card.Text>
                       
                        <Card.Text className="clr">Free Shipping <br/>Delivery in 1 day</Card.Text>
                        <Button variant="success" className="bot1 m-lg-3">Product Detail  <BsChevronRight  /></Button>
                        
                      
                        <Button variant="light" className="bot2 m-lg-3"  ><BsSuitHeart style={{'height':'40px','width':'25px'}}/>&nbsp;  Product Detail</Button>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="div mt-3"  >
              <Card>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3 ">
                      <Card.Img src={backry} />
                    </div>
                    <div className="col-lg-4 mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">Product title</Card.Title>
                        <Card.Text className="clr">Space for a small product description </Card.Text>
                        <Card.Text>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                         </Card.Text>
                         <div className="row">
                         <div className="col-lg-5">
                         <div className="clr">
                         <Card.Text>Fresheness</Card.Text>
                          <Card.Text>Farm</Card.Text>
                          <Card.Text>Delivery</Card.Text>
                          <Card.Text>Stock</Card.Text>
                         </div>
                        </div>
                        <div className="col-lg-7">
                          <Card.Text>New (Extra fresh)</Card.Text>
                          
                          <Card.Text>Grocery Tarm Fields</Card.Text>
                          <Card.Text>Europe</Card.Text>
                          <Card.Text className="clr1">320 pcs</Card.Text>
                        </div>
                         </div>
                      </Card.Body>
                    </div>
                    <div className="col-lg-4  mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">36.99 USD</Card.Title>
                        <Card.Text className="price1" >48.56</Card.Text>
                       
                        <Card.Text className="clr">Free Shipping <br/>Delivery in 1 day</Card.Text>
                        <Button variant="success" className="bot1 m-lg-3">Product Detail  <BsChevronRight  /></Button>
                        
                       
                        <Button variant="light" className="bot2 m-lg-3"  ><BsSuitHeart style={{'height':'40px','width':'25px'}}/>&nbsp;  Product Detail</Button>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="div mt-3"  >
              <Card>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3 ">
                      <Card.Img src={backry} />
                    </div>
                    <div className="col-lg-4 mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">Product title</Card.Title>
                        <Card.Text className="clr">Space for a small product description </Card.Text>
                        <Card.Text>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                         </Card.Text>
                         <div className="row">
                         <div className="col-lg-5">
                         <div className="clr">
                         <Card.Text>Fresheness</Card.Text>
                          <Card.Text>Farm</Card.Text>
                          <Card.Text>Delivery</Card.Text>
                          <Card.Text>Stock</Card.Text>
                         </div>
                        </div>
                        <div className="col-lg-7">
                          <Card.Text>New (Extra fresh)</Card.Text>
                         
                          <Card.Text>Grocery Tarm Fields</Card.Text>
                          <Card.Text>Europe</Card.Text>
                          <Card.Text className="clr1">320 pcs</Card.Text>
                        </div>
                         </div>
                      </Card.Body>
                    </div>
                    <div className="col-lg-4  mt-3 ">
                      <Card.Body>
                        <Card.Title className="bold">36.99 USD</Card.Title>
                        <Card.Text className="price1" >48.56</Card.Text>
                     
                        <Card.Text className="clr">Free Shipping <br/>Delivery in 1 day</Card.Text>
                        <Button variant="success" className="bot1 m-lg-3">Product Detail  <BsChevronRight  /></Button>
                        
                        
                        <Button variant="light" className="bot2 m-lg-3"  ><BsSuitHeart style={{'height':'40px','width':'25px'}}/>&nbsp;  Product Detail</Button>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            </div>
          </div>
          </div>
        </>
    );
}