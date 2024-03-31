import PropTypes from "prop-types";

import "../Styles/SocialMediaButton.css";

const SocialMediaButton = ({ link, title, icon, name }) => {
  const isResume = name === "RESUME";
  return (
    <a
      href={link}
      target={isResume ? "" : "_blank"}
      rel={isResume ? "" : "noreferrer"}
      title={title}
      className="social-link"
      download={isResume ? "LucasButtoCV.pdf" : ""}
      type={isResume ? "application/pdf" : ""}
    >
      {icon}
      <span>{name}</span>
    </a>
  );
};

SocialMediaButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default SocialMediaButton;
