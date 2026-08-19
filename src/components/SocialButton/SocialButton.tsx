import type { ReactNode } from "react";
import "./SocialButton.scss";

export interface SocialButtonProps {
  href: string;
  title: string;
  label: string;
  icon: ReactNode;
  /** `solid` is filled with the Spotify green, `outline` is the ghost pill. */
  variant?: "solid" | "outline";
  /** Marks the link as a document (the CV) so the browser previews it. */
  isFile?: boolean;
}

const SocialButton = ({
  href,
  title,
  label,
  icon,
  variant = "outline",
  isFile = false,
}: SocialButtonProps) => (
  <a
    className={`social-button social-button--${variant}`}
    href={href}
    title={title}
    target="_blank"
    rel="noreferrer"
    type={isFile ? "application/pdf" : undefined}
  >
    <span className="social-button__icon" aria-hidden="true">
      {icon}
    </span>
    <span className="social-button__label">{label}</span>
  </a>
);

export default SocialButton;
