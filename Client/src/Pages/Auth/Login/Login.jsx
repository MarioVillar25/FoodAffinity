import React from "react";
import { Row, Col } from "react-bootstrap";
import "./login.scss";
import { FormLogin } from "../../../Components/FormLogin/FormLogin";

export const Login = () => {
  return (
    <Row className="login-Main">
      <Col className="d-flex justify-content-center align-items-center">
        <div className="formLogin">
          <FormLogin />
        </div>
      </Col>
    </Row>
  );
};
