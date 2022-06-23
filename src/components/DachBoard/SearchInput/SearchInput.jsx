import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";

import st from "./searchinput.module.css";

const SearchInput = () => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <input onClick={handleShow} type="text" />
      {/* <Modal className={st.modal} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <input onClick={handleShow} type="text" />
        </Modal.Header>
      </Modal> */}
    </>
  );
};

export default SearchInput;
