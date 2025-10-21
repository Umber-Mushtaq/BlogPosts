import { Link } from "react-router-dom";
import { DeletePostApiCall } from "./PostApiCalls";
import { FaThumbsUp } from "react-icons/fa";

const MyPosts = ({ posts }) => {
  const handleDeletePost = async (id) => {
    if (id) {
      await DeletePostApiCall(id);
    }
  };
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className='flex-col md:flex md:flex-row py-5 px-10'>
          <div className='md:w-3xl'>
            <img src={post.imageUrl} alt='img' className=' object-cover' />
          </div>
          <div className='md:w-6xl px-3 py-5 md:py-1 border-r-2 border-t-2 border-b-2 border-border rounded-r-md shadow-sm'>
            <div className='flex justify-between items-center'>
              <h1 className='text-2xl text-buttonL tracking-wide'>
                {post.title}
              </h1>
              <h1 className='flex gap-2 items-center text-buttonL'>
                <FaThumbsUp />
                {post.likes}
              </h1>
            </div>
            <p className='text-1xl text-textB tracking-wide leading-6 my-3'>
              {post.content}
            </p>
            <div className='flex justify-end gap-3 items-center'>
              <Link
                to={`/main/editPost/${post._id}`}
                className='bg-green-500 py-2 px-3 rounded-md text-white hover:cursor-pointer'
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeletePost(post._id)}
                className='bg-red-500 py-2 px-3 rounded-md text-white hover:cursor-pointer'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPosts;
