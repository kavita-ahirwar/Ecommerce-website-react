import { React } from "react";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { Button } from "react-bootstrap";
import "./SideBar.css";
import Form from "react-bootstrap/Form";
import {AiFillStar} from 'react-icons/ai';

export function SideBar() {
  return (
    <>
      <div className="container">
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
                      <AiFillStar/>
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


            {/* </div> */}

            {/* <h4 style={{ "fontWeight": "bold" ,'color':'black' ,'marginTop':'250px'}}>Best selling products </h4>
            <u style={{ color: "#6A983C" }}>
              <h6>Kitchen</h6>
              <h6>Meat and fish</h6>
              <h6>Special nutrition</h6>
              <h6>Pharmacy</h6>
              <h6>Baby</h6>
            </u>
            <Button className="btn mt-2" variant="outline-secondary" style={{ "marginLeft": "10px" }}>More categories</Button>{" "} */}
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  );
}
