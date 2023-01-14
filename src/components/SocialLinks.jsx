import { useState } from "react";

/* utility functions */
import ConvertToEntity from "../utils/ConvertToEntity";

export default function SocialLinks() {
  const [socialToggleIcon, setSocialToggleIcon] = useState(
    ConvertToEntity(187)
  );
  const style = {
    translate:
      socialToggleIcon === ConvertToEntity(187) ? "-3.6em -50%" : "0 -50%"
  };

  const toggleSocialLinks = () => {
    setSocialToggleIcon(prev => {
      return prev === ConvertToEntity(187)
        ? ConvertToEntity(171)
        : ConvertToEntity(187);
    });
  };

  return (
    <div className="fixed-social-container" style={style}>
      <button className="social-toggle-btn" onClick={toggleSocialLinks}>
        <span>{socialToggleIcon}</span>
      </button>

      <div className="social-links flex flex-col gap-1">
        <a
          href="https://www.facebook.com/groups/prayaas.bitsindri/"
          className="social-link"
          rel="noopener noreferrer"
          target="_blank"
          title="facebook"
        >
          <i className="ri-facebook-circle-fill"></i>
        </a>
        <a
          href="https://twitter.com/rahul9422dev"
          className="social-link"
          rel="noopener noreferrer"
          target="_blank"
          title="twitter"
        >
          <i className="ri-twitter-fill"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC4xj_XulpeMD5i3fQYxlp7Q"
          className="social-link"
          rel="noopener noreferrer"
          target="_blank"
          title="youtube"
        >
          <i className="ri-youtube-fill"></i>
        </a>
        <a
          href="https://www.instagram.com/prayaasindia/"
          className="social-link"
          rel="noopener noreferrer"
          target="_blank"
          title="instagram"
        >
          <i className="ri-instagram-fill"></i>
        </a>
      </div>
    </div>
  );
}
