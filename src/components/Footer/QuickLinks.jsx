import { NavLink } from "react-router-dom";

function QuickLinks() {
  return (
    <nav className="footer-navigation" aria-labelledby="secondary navigation">
      <h3>Quick Links</h3>

      <ul className="navigation-menu flex flex-col gap-1 align-flex-start">
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
          <NavLink to="gallery/photos" className="navigation-link">
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink to="gallery/videos" className="navigation-link">
            Videos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default QuickLinks;
