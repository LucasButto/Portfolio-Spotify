import PropTypes from "prop-types";
import "../Styles/Modal.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modal = ({ children, setModal }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("modal")) {
      setModal(false);
    }
  };

  return (
    <div className="modal" onClick={handleClose}>
      <button className="close-button" onClick={() => setModal(false)}>
        <CloseRoundedIcon />
      </button>
      <div className="modal-body">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Modal;
