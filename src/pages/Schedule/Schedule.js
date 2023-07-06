/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NavbarCustom from "../../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { pinkBg } from "../../constant";
import ModalDetailCreate from "../../components/ModalDetailCreate";
import ModalDeleteItem from "../../components/ModalDeleteItem";

function Schedule() {
  const { day } = useParams();
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [action, setAction] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const navigate = useNavigate();
  const getSchedule = async () => {
    const email = localStorage.getItem("email");
    let dayInEnglish = "";
    if (day === "Senin") {
      dayInEnglish = "monday";
    } else if (day === "Selasa") {
      dayInEnglish = "tuesday";
    } else if (day === "Rabu") {
      dayInEnglish = "wednesday";
    } else if (day === "Kamis") {
      dayInEnglish = "thursday";
    } else {
      dayInEnglish = "friday";
    }
    let response = await axios.get(
      `https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=${dayInEnglish}`
    );
    setData(response.data.data);
  };

  const handlePostDataInCreate = () => {
    setIsUpdateData(true);
  };

  const handleDeleteData = () => {
    setIsUpdateData(true);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  useEffect(() => {
    getSchedule();
    setIsUpdateData(false);
  }, [isUpdateData]);

  const handleFunctionClose = () => {
    setModalShow(false);
  };

  const handleFunctionCloseDelete = () => {
    setModalShowDelete(false);
  };

  return (
    <>
      <NavbarCustom />
      <ModalDetailCreate
        modalShow={modalShow}
        handleFunctionClose={handleFunctionClose}
        day={day}
        handlePostDataInCreate={handlePostDataInCreate}
        action={action}
        selectedTitle={selectedTitle}
        selectedId={selectedId}
      />
      <ModalDeleteItem
        modalShow={modalShowDelete}
        handleFunctionCloseDelete={handleFunctionCloseDelete}
        selectedTitle={selectedTitle}
        selectedId={selectedId}
        handleDeleteData={handleDeleteData}
      />
      <>
        <Container className="mt-4">
          <div className="d-flex justify-content-between">
            <div>
              <Row>
                <Col>
                  <button
                    onClick={() => navigate("/home")}
                    style={{
                      border: "none",
                      background: "none",
                      padding: "0",
                      fontWeight: "bold",
                      fontSize: "36px",
                    }}
                    data-cy="btn-back"
                  >
                    {"<"}
                  </button>
                </Col>
                <Col>
                  <h1 style={{ fontWeight: "bold" }} data-cy="detail-title">
                    {day}
                  </h1>
                </Col>
              </Row>
            </div>
            <Button
              style={{ backgroundColor: pinkBg }}
              className="rounded"
              onClick={() => {
                setModalShow(true);
                setAction("create");
              }}
              data-cy="btn-create-schedule"
            >
              + Tambah Mata Kuliah{" "}
            </Button>
          </div>
          <hr />
          {data.length <= 0 ? (
            <>
              <img
                src="/img/empty.png"
                data-cy="todo-empty-state"
                className="mt-5"
                style={{ display: "block", margin: "auto", cursor: "pointer" }}
                onClick={() => {
                  setModalShow(true);
                  setAction("create");
                }}
              />
            </>
          ) : (
            <>
              {data.map((item) => {
                return (
                  <Card
                    className="mt-2"
                    data-cy="card-item-title"
                    key={item.id} // Add a unique key prop
                  >
                    <Card.Body>
                      <Row>
                        <Col xs={8}>
                          <h4 style={{ marginLeft: "30px" }}>{item.title}</h4>
                        </Col>
                        <Col
                          xs={4}
                          className="d-flex justify-content-end align-items-center"
                        >
                          <img
                            src="/img/card-item-edit.png"
                            alt="Edit"
                            style={{ marginRight: "8px", cursor: "pointer" }}
                            data-cy="card-item-edit"
                            onClick={() => {
                              setAction("edit");
                              setSelectedTitle(item.title);
                              setSelectedId(item.id);
                              setModalShow(true);
                            }}
                          />
                          <img
                            src="/img/card-item-delete.png"
                            alt="Delete"
                            data-cy="card-item-delete"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setSelectedTitle(item.title);
                              setSelectedId(item.id);
                              setModalShowDelete(true);
                            }}
                          />
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                );
              })}
            </>
          )}
        </Container>
      </>
    </>
  );
}

export default Schedule;
