import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PopUpProvider } from "./Context/PopUpContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

function App() {
  return (
    <PopUpProvider>
      <RouterProvider router={router} />
    </PopUpProvider>
  );
}

export default App;
