import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

/* pages */
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Rules from "./pages/Rules";
import Photos from "./pages/Gallery/Photos";
import Videos from "./pages/Gallery/Videos";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

/* layouts */
import RootLayout from "./layouts/RootLayout";
import GalleryLayout from "./layouts/GalleryLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="academics" element={<Academics />} />
      <Route path="rules" element={<Rules />} />
      <Route path="contact" element={<Contact />} />

      <Route path="gallery" element={<GalleryLayout />}>
        <Route path="photos" element={<Photos />} />
        <Route path="videos" element={<Videos />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
