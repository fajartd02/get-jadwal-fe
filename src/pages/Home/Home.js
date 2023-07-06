/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NavbarCustom from "../../components/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { pinkBg } from "../../constant";
import axios from "axios";
import CardCustom from "../../components/CardCustom";
import ModalCreate from "../../components/ModalCreate";

function Home() {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const getSchedules = async () => {
    const email = localStorage.getItem("email");
    try {
      let response = await axios.get(
        `https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=monday`
      );
      setMonday(response.data.data);

      response = await axios.get(
        `https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=tuesday`
      );
      setTuesday(response.data.data);

      response = await axios.get(
        `https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=wednesday`
      );
      setWednesday(response.data.data);

      response = await axios.get(
        `https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=thursday`
      );
      setThursday(response.data.data);

      response = await axios.get(
        `https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=friday`
      );
      setFriday(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFunctionClose = () => {
    setModalShow(false);
  };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <>
      <NavbarCustom />
      <ModalCreate
        modalShow={modalShow}
        handleFunctionClose={handleFunctionClose}
      />
      <Container>
        <Button
          style={{ background: pinkBg, float: "right" }}
          className="rounded mt-4"
          data-cy="btn-create-schedule"
          onClick={() => setModalShow(true)}
        >
          + Buat Jadwal Kuliah
        </Button>

        {/* Make a clear of float */}
        <div className="clear" style={{ clear: "both" }}></div>

        <Row style={{ marginTop: "20px" }}>
          <Col>
            <CardCustom day={"Senin"} data={monday} />
          </Col>
          <Col>
            <CardCustom day={"Selasa"} data={tuesday} />
          </Col>
          <Col>
            <CardCustom day={"Rabu"} data={wednesday} />
          </Col>
          <Col>
            <CardCustom day={"Senin"} data={thursday} />
          </Col>
          <Col>
            <CardCustom day={"Senin"} data={friday} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
