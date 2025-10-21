import { useEffect, useState } from "react";
import ProfilePage from "./ProfilePage";
import { GetYourPostsApiCall } from "../PostPages/PostApiCalls";
import MyPosts from "../PostPages/MyPosts";

const MyProfile = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      await GetYourPostsApiCall().then((res) => {
        if (res?.success) {
          setPosts(res?.data);
        }
      });
    };
    fetchMyPosts();
  }, []);
  return (
    <div>
      <ProfilePage />
      <MyPosts posts={posts} />
    </div>
  );
};

export default MyProfile;
