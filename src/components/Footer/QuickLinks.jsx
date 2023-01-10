import { NavLink } from "react-router-dom";

function QuickLinks() {
  return (
    <nav className="footer-navigation" aria-labelledby="secondary navigation">
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
          <NavLink to="gallery/photos" className="navigation-link">
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink to="gallery/videos" className="navigation-link">
            Videos
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

export default QuickLinks;
