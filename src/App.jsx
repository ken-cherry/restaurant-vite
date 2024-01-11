import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Menu, Newsletter, Hero } from "./pages";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "menu",
        element: <Menu />,
        // children:[
        //   {
        //     work on later all appetizers sides entrees
        //   }
        // ]
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
        {/* <Navbar />
        <Hero />
        <Sidebar />
        <Footer /> */}
      </main>
    </>
  );
}

export default App;
