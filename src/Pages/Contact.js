import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";

import "../Styles/Contact.css";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Send the email");

  const cleanInputs = () => {
    setInputName("");
    setInputEmail("");
    setInputMessage("");
  };

  const sendEmailHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      user_name: inputName,
      user_email: inputEmail,
      message: inputMessage,
    };

    let validate = validateDataForm(data);
    setErrors(validate);

    if (Object.entries(validate).length === 0) {
      emailjs
        .sendForm(
          "service_cp93nb4",
          "template_7egq351",
          e.target,
          "_dTu7J3vq-AlfVvXa"
        )
        .then((response) => {
          setMessage("Email sent successfully!");
          setLoading(false);
          cleanInputs();
        })
        .catch((error) => {
          setMessage("An error occurred, try again later.");
          setLoading(false);
          cleanInputs();
        });
    } else {
      setLoading(false);
    }
  };

  const validateDataForm = (form) => {
    let _errors = {};
    if (form.user_name === "") {
      _errors.name = "Required field.";
    }
    if (form.user_email === "") {
      _errors.email = "Required field.";
    } else if (emailValidation(form.user_email) === false) {
      _errors.email = "Enter a valid email address.";
    }
    if (form.message === "") {
      _errors.message = "Required field.";
    }

    return _errors;
  };

  const emailValidation = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const enterPressed = (e) => {
    if (e.key === "Enter") {
      sendEmailHandler(e);
    }
  };

  window.onkeydown = enterPressed;

  return (
    <>
      <h2 className="projectsTitle">CONTACT</h2>
      <div className="contact-form">
        <form className="form-horizontal" onSubmit={sendEmailHandler}>
          <div className="form-inputs">
            <input
              type="text"
              className="form-input"
              placeholder="NAME"
              name="user_name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              className="form-input"
              placeholder="EMAIL"
              name="user_email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              className="form-textarea"
              placeholder="MESSAGE"
              name="message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <div className="form-bottom">
            <div className="buttons-container">
              <button className="decoration-button">
                <SkipPreviousRoundedIcon />
              </button>

              <button className="send-button">
                {loading ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
              </button>

              <button className="decoration-button">
                <SkipNextRoundedIcon />
              </button>
            </div>
            <span>{message}</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
