import React from "react";
import { Row, Col } from "react-bootstrap";
import "./register.scss";
import { FormRegister } from "../../../Components/FormRegister/FormRegister";

export const Register = () => {
  return (
    <Row className="register-Main">
      <Col className="d-flex justify-content-center align-items-center">
      <div className="formRegister">
        <FormRegister/>
        </div>
        
      </Col>
    </Row>
  );
};
