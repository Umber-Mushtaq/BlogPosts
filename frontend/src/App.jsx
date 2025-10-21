import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthPage from "./Components/Authentication/AuthPage";
import AllPosts from "./Components/PostPages/AllPosts";
import TrendingPosts from "./Components/PostPages/TrendingPosts";
import RecentPosts from "./Components/PostPages/RecentPosts";
import EditProfile from "./Components/Profile/EditProfile";
import PublicLayout from "./Components/layouts/PublicLayout";
import ProtectedLayout from "./Components/layouts/ProtectedLayout";
import AuthorProfile from "./Components/Profile/AuthorProfile";
import CreatePost from "./Components/Dashboard/CreatePost";
import MyPosts from "./Components/PostPages/MyPosts";
import Authors from "./Components/Dashboard/Authors";
import Technology from "./Components/PostPages/Technology";
import Education from "./Components/PostPages/Education";
import LifeStyle from "./Components/PostPages/LifeStyle";
import Entertainment from "./Components/PostPages/Entertainment";
import MyProfile from "./Components/Profile/MyProfile";
import SinglePost from "./Components/PostPages/SinglePost";
import EditPost from "./Components/Dashboard/EditPost";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <AuthPage />,
      },
    ],
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: "/main",
        children: [
          { index: true, element: <AllPosts /> },
          { path: "trending", element: <TrendingPosts /> },
          { path: "recent", element: <RecentPosts /> },
          { path: "myprofile", element: <MyProfile /> },
          { path: "editprofile", element: <EditProfile /> },
          { path: "author/:id", element: <AuthorProfile /> },
          { path: "post/:id", element: <SinglePost /> },
          { path: "createPost", element: <CreatePost /> },
          { path: "editPost/:id", element: <EditPost /> },
          { path: "myPosts", element: <MyPosts /> },
          { path: "authors", element: <Authors /> },
          { path: "technology", element: <Technology /> },
          { path: "education", element: <Education /> },
          { path: "lifestyle", element: <LifeStyle /> },
          { path: "entertainment", element: <Entertainment /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
}

export default App;
