import { NavLink } from "react-router-dom";

/* logos data */
import logos from "../../data/LogosData";

function LogoSection() {
  return (
    <div className="logo-section">
      <div className="logo-container">
        <NavLink to="/" className="logo">
          <picture>
            <source type="image/avif" srcSet={logos.avif} />
            <source type="image/webp" srcSet={logos.webp} />
            <img
              src={logos.png}
              alt="school's logo"
              loading="eager"
              decoding="sync"
              title="school's logo"
            />
          </picture>
        </NavLink>
      </div>

      <div className="contact-container flex flex-col align-flex-start gap-2">
        <a
          href="mailto:prayaasindia@gmail.com"
          className="email-link flex align-center"
          title="mail us"
        >
          <i className="ri-mail-line"></i>
          <span>prayaasindia@gmail.com</span>
        </a>

        <a
          href="tel:11234567565"
          className="contact-number-link flex align-center"
          title="contact us"
        >
          <i className="ri-phone-line"></i>
          <span>+91 11234567565</span>
        </a>
      </div>

      <div className="login-btns-container flex flex-col align-flex-start gap-2">
        <a
          href="https://akjainmemorial.cloudsoftware.website/site/login"
          className="btn primary-btn teacher-login-btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Teacher&apos;s login
        </a>

        <a
          href="https://akjainmemorial.cloudsoftware.website/site/userlogin"
          className="btn secondary-btn student-login-btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Student&apos;s login
        </a>
      </div>
    </div>
  );
}

export default LogoSection;
