import React, { useEffect, useState } from "react";
import { Button, Modal, CloseButton, Container, Form } from "react-bootstrap";
import { pinkBg } from "../constant";
import axios from "axios";

function ModalDetailCreate(props) {
  const {
    modalShow,
    handleFunctionClose,
    day,
    handlePostDataInCreate,
    action,
    selectedTitle,
    selectedId,
  } = props;
  const [title, setTitle] = useState(selectedTitle);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    try {
      if (action === "create") {
        let dayInEnglish;
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

        const body = {
          title,
          day: dayInEnglish,
        };

        await axios.post(
          "https://getjadwal.api.devcode.gethired.id/schedule?email=" + email,
          body
        );
      } else {
        const body = {
          title,
        };

        await axios.patch(
          "https://getjadwal.api.devcode.gethired.id/schedule?email=" +
            email +
            "&id=" +
            selectedId,
          body
        );
      }

      handleFunctionClose();
      handlePostDataInCreate();
      setTitle("");
      setIsDisabled(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (title) {
      setIsDisabled(false);
    }

    if (title === "") {
      setIsDisabled(true);
    }
  }, [title]);

  useEffect(() => {
    if (action === "edit") {
      setIsDisabled(false);
      setTitle(selectedTitle);
    }
  }, [action, selectedTitle]);

  return (
    <>
      <Modal
        show={modalShow}
        size="lg"
        centered
        data-cy="detail-form"
        className="rounded"
      >
        <Container>
          <Modal.Header>
            {action === "create" ? (
              <Modal.Title style={{ fontWeight: "bold" }}>
                Buat Jadwal Kuliah
              </Modal.Title>
            ) : (
              <Modal.Title style={{ fontWeight: "bold" }}>
                Edit Mata Kuliah
              </Modal.Title>
            )}

            <CloseButton onClick={handleFunctionClose} data-cy="close-modal" />
          </Modal.Header>
          <Modal.Body>
            <Form.Label htmlFor="inputMataKuliah">Mata Kuliah</Form.Label>
            <Form.Control
              type="text"
              id="inputMataKuliah"
              placeholder="Masukkan Mata Kuliah"
              value={title}
              onChange={handleTitleChange}
              data-cy="form-matkul"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleSubmit}
              style={{
                backgroundColor: pinkBg,
                opacity: isDisabled ? "0.3" : "1",
              }}
              disabled={isDisabled}
              data-cy="btn-submit"
            >
              Simpan
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
}

export default ModalDetailCreate;
