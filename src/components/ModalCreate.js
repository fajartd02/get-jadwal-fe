import React, { useState } from "react";
import { Button, Modal, CloseButton, Container, Form } from "react-bootstrap";
import { pinkBg } from "../constant";

function ModalCreate(props) {
  const { modalShow, handleFunctionClose } = props;
  const handleSubmit = async () => {
    console.log("MASOK");
  };
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
              data-cy="form-matkul"
              placeholder="Masukkan Mata Kuliah"
            />

            <Form.Label htmlFor="inputPilihHari" className="mt-2">
              Pilih Hari
            </Form.Label>
            <Form.Select id="inputPilihHari" data-cy="form-day">
              <option value="" disabled selected>
                Pilih Hari
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSubmit} style={{ backgroundColor: pinkBg }}>
              Simpan
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
}

export default ModalCreate;
