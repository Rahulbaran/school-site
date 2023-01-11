import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [displayNav, setDisplayNav] = useState(false);
  const style = {
    display: displayNav ? "flex" : ""
  };

  return (
    <nav className="navigation" aria-labelledby="primary navigation">
      <div className="navigation-toggle-btn-container">
        <button
          className="navigation-toggle-btn"
          title="toggle navigation"
          onClick={() => setDisplayNav(bool => !bool)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      <ul
        className="navigation-menu flex flex-col gap-1 justify-flex-start"
        style={style}
      >
        <li>
          <NavLink to="/" className="navigation-link">
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
          <NavLink to="gallery" className="navigation-link">
            Gallery
          </NavLink>
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
