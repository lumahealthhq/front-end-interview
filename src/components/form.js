import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../index.css";
import rectangle from '../components/img/Rectangle.png';
import { TextField } from "@mui/material";

const Form = () => {
  return (
    <div className="form">
      <header className="formHeader">
        <div className="formLine">
          <p>Patient Referral Form Hayes Valley Health San Francisco</p>
        </div>
      </header>
      <section className="formSection">
        <div className="formDiv">
          <p>Referral Patients</p>
          <p>You can add up to five patients at a time</p>
        </div>
        <div className="formFields">
          <img src={rectangle} alt="rectangle" className="rectangle" />
          <h1>1</h1>
          <Container>
            <p>New Referral</p>
            <Row className="formRow">
              <Col>
                <TextField variant="standard" label="First Name" className="textField"/>
                <TextField variant="standard" label="Date of Birth" className="textField"/>
                <TextField variant="standard" label="Phone" className="textField"/>
              </Col>
              <Col>
                <TextField variant="standard" label="Last Name" className="textField"/>
                <TextField variant="standard" label="Contact Language" className="textField"/>
                <TextField variant="standard" label="Email" className="textField"/>
              </Col>
              <TextField variant="standard" label="Address" />
              <TextField variant="standard" label="Notes/Reason" />
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};
export default Form;
