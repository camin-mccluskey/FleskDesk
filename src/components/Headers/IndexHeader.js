/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroup,
  CardTitle,
  CardBody,
  InputGroupAddon,
  InputGroupText, 
  Row,
  Col
} from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <Container>
        <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Search</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      {/* <label>City</label> */}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="City" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      {/* <label>Number of Desks</label> */}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Number of Desks" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button style={{width: "100%"}} className="btn-fill" color="danger" size="lg" >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
