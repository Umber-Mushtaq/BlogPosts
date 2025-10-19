import { useEffect, useState } from "react";
import { GetAllPostsApiCall } from "./PostApiCalls";
import Post from "./Post";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      await GetAllPostsApiCall().then((res) => {
        if (res?.success) {
          console.log(res.data);
          setPosts(res.data);
        }
      });
    };
    fetchAllPosts();
  }, []);
  return (
    <>
      <Post posts={posts} />
    </>
  );
};

export default AllPosts;
