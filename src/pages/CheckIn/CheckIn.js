import React from "react";
import NavbarCustom from "../../components/Navbar";
import { Button, Card, Container, Form } from "react-bootstrap";
import { pinkBg } from "../../constant";

function CheckIn() {
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
          />
          <Button
            className="w-75 m-auto mt-1 mb-4"
            style={{ backgroundColor: pinkBg, fontWeight: "bold" }}
            data-cy="btn-login"
          >
            Mulai Sesi
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default CheckIn;
