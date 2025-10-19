import { useEffect, useState } from "react";
import { GetCategoryPostsApiCall } from "./PostApiCalls";
import Post from "./Post";
const Entertainment = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchEntertainmentPosts = async () => {
      await GetCategoryPostsApiCall("Entertainment").then((res) => {
        if (res?.success) {
          console.log(res.data);
          setPosts(res.data);
        }
      });
    };
    fetchEntertainmentPosts();
  }, []);
  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default Entertainment;
