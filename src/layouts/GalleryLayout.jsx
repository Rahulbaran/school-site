import {Outlet} from "react-router-dom";


export default function GalleryLayout() {
    return (
      <div className="contact-wrapper">
        <h1>Gallery</h1>

        <Outlet />
      </div>
    );
  }
  