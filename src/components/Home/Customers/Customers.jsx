import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import "./Customers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { HeadLine } from "../HeadLine";

export function Customers() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div>
        <div className="main3 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 " style={{ marginTop: "100px" }}>
                <div className="heading">
                  <h3 style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    Our customers says
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 " style={{ marginTop: "100px" }}>
                <div className="butn">
                  <Button className="btn m-lg-2" variant="none">
                    Button
                    <BsChevronRight style={{ color: "#6A983C" }} />
                  </Button>{" "}
                </div>
              </div>
            </div>

            <div className="container">
              <Swiper
                // autoplay
                //      grabCursor={true}
                //      modules={[Autoplay]}
                //      className="mySwiper"
                //      slidesPerView={4}
                //      spaceBetween={30}
                // className="home_slider"
                // modules={[Autoplay]}
                // slidesPerView={4}
                // spaceBetween={40}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // pagination={{ clickable: true }}
                // autoplay
                // modules={[Autoplay]}
                // pagination={{clickable: true}}
                // slidesPerView={4}
                // spaceBetween={40}
                // autoplay={{
                //       delay: 2000,
                //       pauseOnMouseEnter: true,
                //       disableOnInteraction: false
                //      }}
                // loop
                // className='swiper-container'
                slidesPerView={4}
                // spaceBetween={50}
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="col-lg-3 mt-5">
                    <Card style={{ width: "20rem" }}>
                      <Card.Body>
                        <Card.Text style={{ textAlign: "center" }}>
                          {" "}
                          “ This is an super space for your customers qoute.
                          Don’t worry it works smooth as pie. You will get all
                          what you need by writiing a text here “
                        </Card.Text>
                        <Card.Text
                          style={{ textAlign: "center", color: "#A9A9A9" }}
                        >
                          Name and Surname
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="col-lg-3 mt-5">
                    <Card style={{ width: "20rem" }}>
                      <Card.Body>
                        <Card.Text style={{ textAlign: "center" }}>
                          {" "}
                          “ This is an super space for your customers qoute.
                          Don’t worry it works smooth as pie. You will get all
                          what you need by writiing a text here “
                        </Card.Text>
                        <Card.Text
                          style={{ textAlign: "center", color: "#A9A9A9" }}
                        >
                          Name and Surname
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="col-lg-3 mt-5">
                    <Card style={{ width: "20rem" }}>
                      <Card.Body>
                        <Card.Text style={{ textAlign: "center" }}>
                          {" "}
                          “ This is an super space for your customers qoute.
                          Don’t worry it works smooth as pie. You will get all
                          what you need by writiing a text here “
                        </Card.Text>
                        <Card.Text
                          style={{ textAlign: "center", color: "#A9A9A9" }}
                        >
                          Name and Surname
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="col-lg-3 mt-5">
                    <Card style={{ width: "20rem" }}>
                      <Card.Body>
                        <Card.Text style={{ textAlign: "center" }}>
                          {" "}
                          “ This is an super space for your customers qoute.
                          Don’t worry it works smooth as pie. You will get all
                          what you needby writiing a text here “
                        </Card.Text>
                        <Card.Text
                          style={{ textAlign: "center", color: "#A9A9A9" }}
                        >
                          Name and Surname
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="col-lg-3 mt-5">
                    <Card style={{ width: "20rem" }}>
                      <Card.Body>
                        <Card.Text style={{ textAlign: "center" }}>
                          {" "}
                          “ This is an super space for your customers qoute.
                          Don’t worry it works smooth as pie. You will get all
                          what you needby writiing a text here “
                        </Card.Text>
                        <Card.Title
                          style={{ textAlign: "center", color: "#A9A9A9" }}
                        >
                          Name and Surname
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="col-lg-3 mt-5">
                    <Card style={{ width: "20rem" }}>
                      <Card.Body>
                        <Card.Text style={{ textAlign: "center" }}>
                          {" "}
                          “ This is an super space for your customers qoute.
                          Don’t worry it works smooth as pie. You will get all
                          what you needby writiing a text here “
                        </Card.Text>
                        <Card.Title
                          style={{ textAlign: "center", color: "#A9A9A9" }}
                        >
                          Name and Surname
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
