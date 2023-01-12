import { NavLink } from "react-router-dom";

/* logos data */
import logos from "../../data/LogosData";

function AboutSchool() {
  return (
    <div className="about-school-container flex flex-col align-flex-start gap-1">
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

      <div className="about-school-label">
        <p>
          Prayaas India is built in the heart of the city - Isri Bazar. The
          Building is set in a greenery and pollution free area providing open
          space and fresh air giving it a wholesome ambiance necessary for a
          child’s allround development.
        </p>
      </div>
    </div>
  );
}

export default AboutSchool;
