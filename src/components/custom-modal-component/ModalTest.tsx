import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal PopUp</button>
      {showModal && (
        <Modal
          onClose={onClose}
          body={<div>Customized body</div>}
          header={<h2>Customize Header</h2>}
          footer={<h2>Customize Footer</h2>}
          id={"custom-id"}
        />
      )}
    </div>
  );
};

export default ModalTest;
