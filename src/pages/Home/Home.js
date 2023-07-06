import React, { useEffect, useState } from "react";
import NavbarCustom from "../../components/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { pinkBg } from "../../constant";
import axios from "axios";
import CardCustom from "../../components/CardCustom";

function Home() {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);

  const fetchSchedule = async () => {
    const email = localStorage.getItem("email");
    try {
      const response = await axios.get(
        "https://getjadwal.api.devcode.gethired.id/schedule?email=" + email
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <>
      <NavbarCustom />
      <Container>
        <Button
          style={{ background: pinkBg, float: "right" }}
          className="rounded mt-4"
          data-cy="btn-create-schedule"
        >
          + Buat Jadwal Kuliah
        </Button>

        {/* Make a clear of float */}
        <div className="clear" style={{ clear: "both" }}></div>

        <Row style={{ marginTop: "20px" }}>
          <Col>
            <CardCustom day={"Senin"} />
          </Col>
          <Col>
            <CardCustom day={"Selasa"} />
          </Col>
          <Col>
            <CardCustom day={"Rabu"} />
          </Col>
          <Col>
            <CardCustom day={"Senin"} />
          </Col>
          <Col>
            <CardCustom day={"Senin"} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
