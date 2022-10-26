import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import  "./Footers.css";

export function Footers() {
  return (
  <div>
     
        <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3"  style={{'marginTop':'100px'}}>
          <Card.Footer className="footer ">
           <Card.Title>Get in touch</Card.Title>
           <Card.Text>About Us</Card.Text>
           <Card.Text>Careers</Card.Text>
           <Card.Text>Press Releases</Card.Text>
           <Card.Text>Blog</Card.Text>
           </Card.Footer>
          </div>
          <div className="col-lg-3 "  style={{'marginTop':'100px'}}>
          <Card.Footer className="footer">
           <Card.Title>Connections</Card.Title>
           <Card.Text>Facebook</Card.Text>
           <Card.Text>Twitter</Card.Text>
           <Card.Text>Instagram</Card.Text>
           <Card.Text>Youtube</Card.Text>
           <Card.Text>LinkedIn</Card.Text>
           </Card.Footer>
          </div>
          <div className="col-lg-3 "  style={{'marginTop':'100px'}}>
          <Card.Footer className="footer">
           <Card.Title>Earnings</Card.Title>
           <Card.Text>Become an Affiliate</Card.Text>
           <Card.Text>Advertise your product</Card.Text>
           <Card.Text>Sell on Market</Card.Text>
           </Card.Footer>
          </div>
          <div className="col-lg-3 "  style={{'marginTop':'100px'}}>
          <Card.Footer className="footer ">
           <Card.Title >Account</Card.Title>
           <Card.Text>Your account</Card.Text>
           <Card.Text>Returns Centre</Card.Text>
           <Card.Text>100 % purchase protection</Card.Text>
           <Card.Text>Chat with us</Card.Text>
           <Card.Text>Help</Card.Text>
           </Card.Footer>
          </div>
        </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5">
             <div className="heding">
                <h3>Product tags</h3>
             </div>
            </div>
            <div className="col-lg-12 ">
             <div className="">
              <Button variant="light" className="button m-lg-3">Beans</Button>
              <Button variant="light" className="button m-lg-3">Carrots</Button>
              <Button variant="light" className="button m-lg-3">Apples</Button>
              <Button variant="light" className="button m-lg-3">Garlic</Button>
              <Button variant="light" className="button m-lg-3">Mushrooms</Button>
              <Button variant="light" className="button m-lg-3">Tomatoes</Button>
              <Button variant="light" className="button m-lg-2">ChilliPeppers</Button>
              <Button variant="light" className="button m-lg-2">Broccoli</Button>
              <Button variant="light" className="button m-lg-2">Watermelons</Button>
              <Button variant="light" className="button m-lg-2">Oranges</Button>
              <Button variant="light" className="button m-lg-2">Bananas</Button>
              <Button variant="light" className="button m-lg-2">Grapes</Button>
             </div>
            </div>
            <div className="col-lg-12 ">
             <div className="">
              <Button variant="light" className="button m-lg-3">Cherries</Button>
              <Button variant="light" className="button m-lg-3">Meat</Button>
              <Button variant="light" className="button m-lg-3">Seo tag</Button>
              <Button variant="light" className="button m-lg-3">Fish</Button>
              <Button variant="light" className="button m-lg-3">Fresh food</Button>
              <Button variant="light" className="button m-lg-3">Lemons</Button>
              <Button variant="light" className="button m-lg-3">Lemons</Button>
             </div>
            <div className="para mt-5 m-lg-4"> <p>Copyright © 2020 petrbilek.com</p></div>
            </div>
          </div>
        </div>
     
  </div>
  );

}
