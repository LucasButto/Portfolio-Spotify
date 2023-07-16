import React from "react";

import "../Styles/Modal.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modal = ({ children, setModal }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={() => setModal(false)}>
            <CloseRoundedIcon />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
