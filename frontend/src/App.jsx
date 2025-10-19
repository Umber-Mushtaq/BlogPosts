import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthPage from "./Components/Authentication/AuthPage";
import AllPosts from "./Components/PostPages/AllPosts";
import TrendingPosts from "./Components/PostPages/TrendingPosts";
import RecentPosts from "./Components/PostPages/RecentPosts";
import ProfilePage from "./Components/Profile/ProfilePage";
import EditProfile from "./Components/Profile/EditProfile";
import PublicLayout from "./Components/layouts/PublicLayout";
import ProtectedLayout from "./Components/layouts/ProtectedLayout";
import AuthorProfile from "./Components/Profile/AuthorProfile";
import CreatePost from "./Components/Dashboard/CreatePost";
import MyPosts from "./Components/Dashboard/MyPosts";
import MyFollowers from "./Components/Dashboard/MyFollowers";
import MyFollowings from "./Components/Dashboard/MyFollowings";
import Technology from "./Components/PostPages/Technology";
import Education from "./Components/PostPages/Education";
import LifeStyle from "./Components/PostPages/LifeStyle";
import Entertainment from "./Components/PostPages/Entertainment";

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
          { path: "myprofile", element: <ProfilePage /> },
          { path: "editprofile", element: <EditProfile /> },
          { path: ":id", element: <AuthorProfile /> },
          { path: "createPost", element: <CreatePost /> },
          { path: "myPosts", element: <MyPosts /> },
          { path: "myFollowers", element: <MyFollowers /> },
          { path: "myFollowings", element: <MyFollowings /> },
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
    <RouterProvider router={router}>
      <Toaster position='bottom-left' reverseOrder={false} />
    </RouterProvider>
  );
}

export default App;
