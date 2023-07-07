/* eslint-disable jsx-a11y/alt-text */
import "./modal.css";
import axios from "axios";
import React from "react";
import { CloseButton } from "react-bootstrap";

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
      {modalShow && (
        <div className="custom-modal">
          <div className="custom-modal-overlay" />
          <div className="custom-modal-content">
            <CloseButton
              data-cy="close-modal"
              className="position-absolute top-0 end-0 m-3"
              onClick={handleFunctionCloseDelete}
            />
            <div>
              <form data-cy="form-delete" className="container">
                <div className="img d-flex justify-content-center mt-4">
                  <img
                    src="/img/delete.png"
                    width={88}
                    height={88}
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-center">Hapus Mata Kuliah</h2>
                <p className="text-center">
                  Apakah anda yakin menghapus mata kuliah {selectedTitle}?
                </p>
                <div className="action d-flex justify-content-center">
                  <button
                    className="btn btn-secondary me-2"
                    type="button"
                    data-cy="btn-close"
                    onClick={handleFunctionCloseDelete}
                  >
                    Batal
                  </button>
                  <button
                    className="btn btn-danger"
                    data-cy="btn-submit"
                    type="submit"
                    onClick={handleDelete}
                  >
                    Hapus
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalDeleteItem;
