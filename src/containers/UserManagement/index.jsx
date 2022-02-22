/* eslint-disable quotes */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import ExampleCard from "./components/ExampleCard";

const UserManagement = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">User Management</h3>
      </Col>
    </Row>
    <Row>
      <ExampleCard />
    </Row>
  </Container>
);

export default UserManagement;
