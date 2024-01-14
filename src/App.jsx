import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Menu, Newsletter, Hero } from "./pages";

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
