import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

/* pages */
import Home from "./pages/Home/Home";
import About from "./pages/About";

/* layouts */
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
