import { useEffect, useState } from "react";
import { GetCategoryPostsApiCall } from "./PostApiCalls";
import Post from "./Post";
const Technology = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTechnologyPosts = async () => {
      await GetCategoryPostsApiCall("Technology").then((res) => {
        if (res?.success) {
          console.log(res.data);
          setPosts(res.data);
        }
      });
    };
    fetchTechnologyPosts();
  }, []);
  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default Technology;
