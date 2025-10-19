import { useEffect, useState } from "react";
import { GetRecentPostsApiCall } from "./PostApiCalls";
import Post from "./Post";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      await GetRecentPostsApiCall().then((res) => {
        if (res?.success) {
          console.log(res.data);
          setPosts(res.data);
        }
      });
    };
    fetchRecentPosts();
  }, []);
  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default RecentPosts;
