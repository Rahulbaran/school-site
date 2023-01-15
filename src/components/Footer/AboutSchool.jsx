import { NavLink } from "react-router-dom";

/* Data */
import logoData from "../../data/LogoData";

function AboutSchool() {
  return (
    <div className="about-school-container flex flex-col align-flex-start gap-3">
      <NavLink to="/" className="logo">
        <img
          src={logoData.logo}
          alt="school's logo"
          loading="lazy"
          decoding="async"
          title="school's logo"
          width="128px"
          height="128px"
        />
      </NavLink>

      <div className="about-school-label">
        <p>
          Prayaas India is built in the heart of the city - Sindri. The
          Building is set in a greenery and pollution free area providing open
          space and fresh air giving it a wholesome ambiance necessary for a
          child’s allround development.
        </p>
      </div>

      <address className="address flex flex-col gap-1 align-flex-start">
        <p>Main Center, Near BIT Sindri, Dhanbad (Jharkhand), 828123</p>

        <a
          href="mailto:prayaasindia@gmail.com"
          className="email-link flex align-center gap-1"
          title="mail us"
        >
          <i className="ri-mail-line"></i>
          <span>prayaasindia@gmail.com</span>
        </a>

        <a
          href="tel:11234567565"
          className="contact-number-link flex align-center gap-1"
          title="contact us"
        >
          <i className="ri-phone-line"></i>
          <span>+91 11234567565</span>
        </a>
      </address>
    </div>
  );
}

export default AboutSchool;
