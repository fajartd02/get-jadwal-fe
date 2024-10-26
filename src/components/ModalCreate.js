import React, { useEffect, useState } from "react";
import { Button, Modal, CloseButton, Container, Form } from "react-bootstrap";
import { pinkBg } from "../constant";
import axios from "axios";
import Select from "react-select";

function ModalCreate(props) {
  const { modalShow, handleFunctionClose, handlePostDataInCreate } = props;
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDayChange = (selectedOption) => {
    setDay(selectedOption);
  };
  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    const body = { title: title, day: day.value };
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

    if (!title | !day) {
      setIsDisabled(true);
    }
  }, [title, day]);

  const options = [
    { value: "monday", label: "Senin" },
    { value: "tuesday", label: "Selasa" },
    { value: "wednesday", label: "Rabu" },
    { value: "thursday", label: "Kamis" },
    { value: "friday", label: "Jumat" },
  ];

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
            <CloseButton
              onClick={() => {
                setTitle("");
                setDay("");
                handleFunctionClose();
              }}
              data-cy="close-modal"
            />
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

            <Form.Label htmlFor="form-day" className="mt-2">
              Pilih Hari
            </Form.Label>
            <div data-cy="form-day">
              <Select
                options={options}
                value={day}
                onChange={handleDayChange}
                placeholder="Pilih Hari"
                isClearable
                className="custom-select"
              />
              <input name="form-day" type="hidden" value={day}></input>
            </div>
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
