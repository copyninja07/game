/* eslint-disable quotes */
import React from "react";
import { Col, Container, Row } from "reactstrap";
// eslint-disable-next-line import/no-named-as-default
import ExampleCard from "./components/Period";

const UserPages = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Period</h3>
      </Col>
    </Row>
    <Row>
      <ExampleCard />
    </Row>
  </Container>
);

export default UserPages;
