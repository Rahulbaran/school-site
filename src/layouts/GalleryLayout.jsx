import { Outlet, NavLink } from "react-router-dom";

export default function GalleryLayout() {
  return (
    <div className="gallery-wrapper">
      <header className="gallery-header page-header">
        <h1>Gallery</h1>
      </header>

      <div className="gallery-container">
        <div className="gallery-navigation flex gap-2 align-center">
          <NavLink to="photos">Photos</NavLink>
          <NavLink to="videos">Videos</NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
