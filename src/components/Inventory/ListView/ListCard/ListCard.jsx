import { React } from "react";
import { Button, Card } from "react-bootstrap";
import "./ListCard.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import backry from "../../../../assests/images/bakery.png";
import { useState, useEffect } from "react";
import axios from "axios";
import index from "react-router-carousel";
import { BsStar, BsStarHalf } from "react-icons/bs";
// import {FaStarHalfAlt} from 'react-icons/ri'
import Box from "@mui/material/Box";
import ReactStars from "react-rating-stars-component";

export function ListCard() {
  const baseURL = "https://freshness12.herokuapp.com/product-category/fruit";

  const [post, setPost] = useState([]);

  // const totalStars = 5;
  // const activeStars = 3;

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get(baseURL);
    setPost(result.data);
    console.log(result.data);
  };

  // const ratingStars = (star) => {
  //   // debugger;
  //   console.log(star);
  //   const totalStars = 5;
  //   const activeStars = star;

  //   return (
  //     <Box>
  //       {[...new Array(totalStars)].map((arr, index) => {
  //         return index < activeStars ? <BsStar /> : <AiFillStar />;
  //       })}
  //     </Box>
  //   );
  // };

  const firstExample = {
    size: 20,
    edit: false
  };

  // function StarRating({ totalStars = 5 }) {
  //   const [selectedStars, setSelectedStars] = useState(0);
  //   return (
  //      <>
  //      {Array(totalStars).map((n, i) => (
  //      <AiFillStar
  //         key={i}
  //         selected={selectedStars > i}
  //         onSelect={() => setSelectedStars(i + 1)}
  //      />
  //   ))}
  //     <p>
  //      {selectedStars} of {totalStars} stars
  //     </p>
  //     </>
  // );
  // }

  // debugger
  // const stars=({rating})=>{
  // console.log(rating)
  //   debugger
  //   const ratingStars=Array.from({length:5},(elem,index)=>{

  //      let number=index+0.5;
  //      return(
  //       <span key={index}>
  //        { stars >= index +1 ? ( <BsStar className="icons"/>) : stars >= number ? ( <BsStarHalf className="icons" />) : ( <AiFillStar className="icons"/>)}
  //       </span>
  //      )

  //   })

  // }

  return (
    <>
      <div className="container child">
        <div className="row">
          <div className="col-lg-8 mt-5 ">
            {post.map((m) => (
              <div key={m["_id"]} className="div mt-3">
                <Card>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 mt-3 ">
                        <Card.Img src={m?.image} />
                      </div>
                      <div className="col-lg-4 mt-3 ">
                        <Card.Body>
                          <Card.Title className="bold">{m?.title}</Card.Title>
                          <Card.Text
                            className="clear"
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {m?.discription}{" "}
                          </Card.Text>
                          
                          {/* <Card.Text star={m?.rating}>
                            {ratingStars()} */}
                            <Card.Text>
                            <ReactStars {...firstExample} value = {m?.rating}/>
                            {/* <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar /> */}

                            {/* print star rating*/}

                            {/* <Box>
                              {[...new Array(totalStars)].map((arr, index) => {
                                return index < activeStars ? (
                                  <AiFillStar />
                                ) : (
                                  <BsStar style={{'fontSize':'13px'}} />
                                );
                              })}
                            </Box> */}
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
                              <Card.Text>{m?.freshness}</Card.Text>

                              <Card.Text>{m?.farm}</Card.Text>
                              <Card.Text>{m?.delivery}</Card.Text>
                              <Card.Text className="clr1">{m?.stock}</Card.Text>
                            </div>
                          </div>
                        </Card.Body>
                      </div>
                      <div className="col-lg-4  mt-3 ">
                        <Card.Body>
                          <Card.Title className="bold">{m?.price}</Card.Title>
                          <Card.Text className="price1">48.56</Card.Text>

                          <Card.Text className="clr">
                            Free Shipping <br />
                            Delivery in 1 day
                          </Card.Text>
                          <Button variant="success" className="bot1 m-lg-3">
                            Product Detail <BsChevronRight />
                          </Button>

                          <Button variant="light" className="bot2 m-lg-3">
                            <BsSuitHeart
                              style={{ height: "40px", width: "25px" }}
                            />
                            &nbsp; Product Detail
                          </Button>
                        </Card.Body>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}

            {/* <div className="div mt-3"  >
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
