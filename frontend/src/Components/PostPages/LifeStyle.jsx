import { useEffect, useState } from "react";
import { GetCategoryPostsApiCall } from "./PostApiCalls";
import Post from "./Post";
const Lifestyle = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLifestylePosts = async () => {
      await GetCategoryPostsApiCall("Lifestyle").then((res) => {
        if (res?.success) {
          console.log(res.data);
          setPosts(res.data);
        }
      });
    };
    fetchLifestylePosts();
  }, []);
  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default Lifestyle;
