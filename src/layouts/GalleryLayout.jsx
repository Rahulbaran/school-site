import { Outlet } from "react-router-dom";

export default function GalleryLayout() {
  return (
    <div className="gallery-wrapper">
      <header className="gallery-header page-header">
        <h1>Gallery</h1>
      </header>

      <Outlet />
    </div>
  );
}
