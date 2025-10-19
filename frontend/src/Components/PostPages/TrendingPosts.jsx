import { useEffect, useState } from "react";
import { GetTrendingPostsApiCall } from "./PostApiCalls";
import Post from "./Post";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      await GetTrendingPostsApiCall().then((res) => {
        if (res?.success) {
          console.log(res.data);
          setPosts(res.data);
        }
      });
    };
    fetchTrendingPosts();
  }, []);
  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default TrendingPosts;
