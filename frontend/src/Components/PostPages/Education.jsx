import { useEffect, useState } from "react";
import { GetCategoryPostsApiCall } from "./PostApiCalls";
import Post from "./Post";
const Education = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchEducationPosts = async () => {
      await GetCategoryPostsApiCall("Education").then((res) => {
        if (res?.success) {
          console.log(res.data);
          setPosts(res.data);
        }
      });
    };
    fetchEducationPosts();
  }, []);
  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default Education;
