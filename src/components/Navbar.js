import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { pinkBg, purpleBg } from "../constant";
import { useNavigate } from "react-router-dom";

function NavbarCustom() {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const navigate = useNavigate();

  useEffect(() => {
    if (email === "" || !email || email === undefined) {
      setEmail(localStorage.getItem("email"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const handleLogOut = async (e) => {
    e.preventDefault();

    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: purpleBg, padding: "32px" }}
      >
        <Container
          className={
            email
              ? "d-flex justify-content-between"
              : "d-flex justify-content-center"
          }
        >
          <h1 style={{ color: "#FFFFFF", fontWeight: "bold" }}>GetJadwal</h1>
          {email && (
            <Button
              className="rounded"
              style={{ backgroundColor: pinkBg }}
              data-cy="btn-logout"
              onClick={handleLogOut}
            >
              Check out | {email}
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCustom;
