import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation" aria-labelledby="primary navigation">
      <button className="navigation-toggle-btn">
        <i className="ri-menu-2-line"></i>
      </button>

      <ul className="navigation-menu">
        <li>
          <NavLink to="home" className="navigation-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="navigation-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="academics" className="navigation-link">
            Academics
          </NavLink>
        </li>
        <li>
          <NavLink to="rules" className="navigation-link">
            Rules & Regulations
          </NavLink>
        </li>
        <li>
          <div className="gallery-navigation">
            <span>Gallery</span>
            <i className="ri-arrow-down-s-fill"></i>
          </div>

          <div className="gallery-links-wrapper">
            <NavLink to="gallery/photos">Photos</NavLink>
            <NavLink to="gallery/videos">Videos</NavLink>
          </div>
        </li>
        <li>
          <NavLink to="contact" className="navigation-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
