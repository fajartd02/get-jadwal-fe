import React, { useState } from "react";
import NavbarCustom from "../../components/Navbar";
import { Button, Card, Container, Form } from "react-bootstrap";
import { pinkBg } from "../../constant";
import { validate as IsEmail } from "email-validator";

function CheckIn() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [firstReload, setFirstReload] = useState(true);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValid(IsEmail(inputValue));
    setFirstReload(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform desired action when the form is submitted
    console.log("Submitted email:", email);
  };

  return (
    <>
      <NavbarCustom />
      <Container style={{ marginTop: "40px" }}>
        <Card style={{ width: "491px", margin: "auto" }}>
          <h4
            style={{ margin: "auto", padding: "30px", fontWeight: "bold" }}
            data-cy="text-login"
          >
            Check In
          </h4>
          <p
            style={{
              marginLeft: "60px",
              marginBottom: "0",
              fontWeight: 600,
            }}
          >
            Email
          </p>
          <Form.Control
            type="text"
            style={{
              width: "75%",
              margin: "auto",
              backgroundColor: "#F4F4F4",
              marginBottom: "16px",
              fontWeight: 300,
            }}
            placeholder="Masukkan email anda"
            data-cy="input-email"
            onChange={handleEmailChange}
          />

          {!isValid && !firstReload && (
            <p style={{ marginLeft: "60px", color: "red" }}>
              <img
                src="/img/warning.png"
                alt="test"
                style={{ marginRight: "8px" }}
              />
              Format email tidak sesuai
            </p>
          )}
          <Button
            className="w-75 m-auto mt-1 mb-4"
            style={{
              backgroundColor: pinkBg,
              fontWeight: "bold",
              opacity: isValid ? 1 : 0.3,
            }}
            data-cy="btn-login"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Mulai Sesi
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default CheckIn;
