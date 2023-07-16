import "../Styles/SocialMediaButton.css";

const SocialMediaButton = ({ link, title, icon, name }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={title}
      className="social-link"
    >
      {icon}
      <span>{name}</span>
    </a>
  );
};

export default SocialMediaButton;
