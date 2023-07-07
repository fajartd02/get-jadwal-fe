/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React from "react";

function ModalDeleteItem(props) {
  const {
    modalShow,
    selectedId,
    selectedTitle,
    handleFunctionCloseDelete,
    handleDeleteData,
  } = props;

  const handleDelete = async (e) => {
    e.preventDefault(); // Prevent form submission
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
        <div
          className="modal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "4px",
              width: "400px",
              textAlign: "center",
            }}
          >
            <form data-cy="form-delete" onSubmit={handleDelete}>
              <img
                src="/img/delete.png"
                width={88}
                height={88}
                style={{ marginBottom: "20px" }}
              />
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Hapus Mata Kuliah
              </h2>
              <p>Apakah anda yakin menghapus kuliah {selectedTitle}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
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
                  onClick={handleFunctionCloseDelete}
                >
                  Batal
                </button>
                <button
                  className="btn btn-danger"
                  style={{ width: "112px" }}
                  data-cy="btn-submit"
                >
                  Hapus
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalDeleteItem;
