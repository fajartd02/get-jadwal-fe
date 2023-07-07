/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

function ModalDeleteItem(props) {
  const {
    modalShow,
    selectedId,
    selectedTitle,
    handleFunctionCloseDelete,
    handleDeleteData,
  } = props;

  const handleDelete = async () => {
    const email = localStorage.getItem("email");
    try {
      await axios.delete(
        "https://getjadwal.api.devcode.gethired.id/schedule?email=" +
          email +
          "&id=" +
          selectedId
      );
      handleFunctionCloseDelete();
      handleDeleteData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        show={modalShow}
        size="lg"
        centered
        className="rounded"
        style={{ display: "block" }}
      >
        <form data-cy="form-delete">
          <img
            src="/img/delete.png"
            width={88}
            height={88}
            style={{
              displayh: "flex",
              marginLeft: "45%",
              marginRight: "50%",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          />
          <h2 className="text-center" style={{ fontWeight: "bold" }}>
            Hapus Mata Kuliah
          </h2>
          <p className="text-center">
            Apakah anda yakin menghapus kuliah {selectedTitle}
          </p>
          <Modal.Footer
            style={{ margin: "auto" }}
            className="d-flex justify-content-center"
          >
            <Row>
              <Col>
                <Button
                  id="btn-batal"
                  className="btn"
                  style={{
                    backgroundColor: "#F4F4F4",
                    color: "#888888",
                    fontWeight: "bold",
                    width: "112px",
                  }}
                  data-cy="btn-close"
                  onClick={() => {
                    handleFunctionCloseDelete();
                  }}
                >
                  Batal
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn btn-danger"
                  style={{ width: "112px" }}
                  onClick={handleDelete}
                  data-cy="btn-submit"
                >
                  Hapus
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalDeleteItem;
