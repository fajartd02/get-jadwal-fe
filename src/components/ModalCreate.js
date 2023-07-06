import React, { useEffect, useState } from "react";
import { Button, Modal, CloseButton, Container, Form } from "react-bootstrap";
import { pinkBg } from "../constant";
import axios from "axios";

function ModalCreate(props) {
  const { modalShow, handleFunctionClose, handlePostDataInCreate } = props;
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };
  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    const body = { title: title, day: day };
    try {
      await axios.post(
        "https://getjadwal.api.devcode.gethired.id/schedule?email=" + email,
        body
      );
      handleFunctionClose();
      handlePostDataInCreate();
      setTitle("");
      setDay("");
      setIsDisabled(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (title && day) {
      setIsDisabled(false);
    }
  }, [title, day]);

  return (
    <>
      <Modal
        show={modalShow}
        size="lg"
        centered
        data-cy="form-add"
        className="rounded"
      >
        <Container>
          <Modal.Header>
            <Modal.Title style={{ fontWeight: "bold" }}>
              Buat Jadwal Kuliah
            </Modal.Title>
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

            <Form.Label htmlFor="inputPilihHari" className="mt-2">
              Pilih Hari
            </Form.Label>
            <select
              id="inputPilihHari"
              value={day}
              onChange={handleDayChange}
              className="form-select"
              data-cy="form-day"
            >
              <option value="" disabled>
                Pilih Hari
              </option>
              <option value="monday">Senin</option>
              <option value="tuesday">Selasa</option>
              <option value="wednesday">Rabu</option>
              <option value="thursday">Kamis</option>
              <option value="friday">Jumat</option>
            </select>
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

export default ModalCreate;
