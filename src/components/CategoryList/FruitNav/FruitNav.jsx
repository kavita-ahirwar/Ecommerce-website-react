import {React} from 'react';
import './FruitNav.css';
import { Button } from 'react-bootstrap';
import {RiLayoutGridLine} from 'react-icons/ri';
import {BsList} from 'react-icons/bs'
import {RiNumber1,RiNumber7} from 'react-icons/ri'
// import { Container } from 'react-bootstrap';
// import {NavLink} from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export function FruitNav(){
   return(
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2">
            <p className='para'>
            Homepage<a className='fruit' >/ Fruit and vegetables</a>
            </p>
        </div>
        </div>
        
        {/* <div className="row mt-3">
           <div className="col-lg-6">
           <div className="vegetable ">
                <h1>Fruit and vegetables</h1>
            </div>
           </div>
           <div className="col-lg-6">
        
             <div className="buttons ">
             <Button variant='none' className=' '><RiLayoutGridLine className='btnn '/>Grid View</Button>&nbsp;
             <Button variant='none' className='butn' ><BsList style={{'fontSize':'30px'}}/>List View</Button>&nbsp;
             <Button variant='none' className='butn'><a style={{'color':'#6A983C','fontSize':'20px'}}>117</a> Products</Button>&nbsp;
           
            </div>
           </div>
        </div> */}
    </div>

    <Navbar bg="none" variant="none">
        <Container>
          <Navbar.Brand className='vegetable'>Fruit and vegetables</Navbar.Brand>
          <Nav className="">
            <Nav.Link className='buttons'> <Button variant='none' className=' '><RiLayoutGridLine className='btnn '/>Grid View</Button>&nbsp;</Nav.Link>
            <Nav.Link className='buttons'> <Button variant='none' className='butn' ><BsList style={{'fontSize':'30px'}}/>List View</Button>&nbsp;</Nav.Link>
            <Nav.Link className='buttons'><Button variant='none' className='butn' style={{'color':'#6A983C','fontSize':'17px'}}>117 Products</Button>&nbsp;</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </>
   );

}