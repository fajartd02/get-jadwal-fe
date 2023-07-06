import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { purpleBg } from "../constant";

function NavbarCustom() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: purpleBg, padding: "32px" }}
      >
        <Container>
          <h1 style={{ margin: "auto", color: "#FFFFFF" }}>GetJadwal</h1>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCustom;
