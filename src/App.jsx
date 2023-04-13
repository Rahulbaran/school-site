import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

/* pages */
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Academics from "./pages/academics/Academics";
import Rules from "./pages/rules/Rules";
import Photos from "./pages/Gallery/photos/Photos";
import Videos from "./pages/Gallery/videos/Videos";
import Contact from "./pages/contact/Contact";
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
        <Route index element={<Photos />} />
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
