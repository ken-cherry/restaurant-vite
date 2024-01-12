import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Menu, Newsletter, Hero } from "./pages";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
