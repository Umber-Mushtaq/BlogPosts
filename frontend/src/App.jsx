import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Blogs from "./components/Blogs";
import TrendingBlogs from "./components/TrendingBlogs";
import RecentBlogs from "./components/RecentBlogs";
import { PopUpProvider } from "./Context/PopUpContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "blogs", element: <Blogs /> },
      { path: "trending", element: <TrendingBlogs /> },
      { path: "recent", element: <RecentBlogs /> },
    ],
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
