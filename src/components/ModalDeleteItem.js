/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React from "react";
import { Button, CloseButton, Container, Modal } from "react-bootstrap";

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
        data-cy="form-delete"
        className="rounded"
      >
        <CloseButton
          data-cy="close-modal"
          style={{ position: "absolute", right: 10, top: 10 }}
          onClick={handleFunctionCloseDelete}
        />
        <img
          src="/img/delete.png"
          width={88}
          height={88}
          style={{ margin: "auto", marginTop: "24px" }}
        />
        <Modal.Body style={{ margin: "auto" }}>
          <Container>
            <h2 className="text-center" style={{ fontWeight: "bold" }}>
              Hapus Mata Kuliah
            </h2>
            <p className="text-center">
              Apakah anda yakin menghapus kuliah {selectedTitle}?
            </p>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ margin: "auto" }}>
          <div>
            <Button
              id="btn-batal"
              className="btn"
              style={{
                backgroundColor: "#F4F4F4",
                color: "#888888",
                fontWeight: "bold",
                width: "112px",
                marginRight: "10px",
              }}
              data-cy="btn-close"
              onClick={() => {
                handleFunctionCloseDelete();
              }}
            >
              Batal
            </Button>
            <Button
              className="btn btn-danger"
              style={{ width: "112px" }}
              onClick={handleDelete}
              data-cy="btn-submit"
            >
              Hapus
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteItem;
