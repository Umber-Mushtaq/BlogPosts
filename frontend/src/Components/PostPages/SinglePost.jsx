import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSinglePostApiCall } from "./PostApiCalls";
import PostDate from "./PostDate";
import Likes from "./Likes";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchSinglePost = async () => {
      await GetSinglePostApiCall(id).then((res) => {
        if (res?.success) {
          setPost(res?.data);
        }
      });
    };
    fetchSinglePost();
  }, [id]);
  return (
    <>
      {post ? (
        <div className='flex flex-col py-5 px-10'>
          <img
            src={post.imageUrl}
            alt='img'
            className='w-full h-100 object-center'
          />
          <h1 className='text-3xl font-medium text-buttonL tracking-wide py-5'>
            {post.title}
          </h1>
          <p className='text-1xl text-textB tracking-wide leading-8'>
            {post.content}
          </p>
        </div>
      ) : (
        <h1 className='py-5 px-10 text-2xl text-buttonB tracking-wide'>
          Loading...
        </h1>
      )}
    </>
  );
};

export default SinglePost;
