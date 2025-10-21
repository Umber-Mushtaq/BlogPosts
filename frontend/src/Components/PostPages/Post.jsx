import { Link } from "react-router-dom";
import Likes from "./Likes";
import PostDate from "./PostDate";
import { FaSearch } from "react-icons/fa";

const Post = ({ posts }) => {
  return (
    <div className=' px-10 py-5'>
      <div className='flex p-3 border-2 border-border justify-between items-center rounded-full mb-5'>
        <input type='text' placeholder='Search Post' />
        <FaSearch className='mx-2' />
      </div>
      {posts?.length > 0 ? (
        <>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {posts.map((post) => (
              <div
                key={post._id}
                className='border-1 border-border shadow-sm shadow-border rounded-md'
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className='w-full h-45 object-cover'
                />

                <div className='px-3 py-3  flex justify-between items-center text-buttonL'>
                  <Link
                    to={`/main/author/${post.author._id}`}
                    className='flex items-center justify-center gap-2 hover:cursor-pointer'
                  >
                    <img
                      src={post.author.photoUrl}
                      alt='img'
                      className='w-10 h-10 rounded-full object-cover'
                    />
                    {post.author.firstName}
                  </Link>
                  <h1 className='text-sm text-buttonL'>
                    <PostDate createdAt={post.createdAt} />
                  </h1>
                </div>

                <div className='px-3 pb-3 flex flex-col gap-3'>
                  <div className='flex-col md:flex md:flex-row justify-between items-center'>
                    <h1 className='text-2xl text-buttonL font-medium tracking-wide'>
                      {post.title}
                    </h1>
                    <Likes id={post._id} likes={post.likes} />
                  </div>

                  <p className='text-sm text-textB '>
                    {post.content.split(" ").slice(0, 10).join(" ")}...
                    <Link
                      to={`/main/post/${post._id}`}
                      className='text-buttonL cursor-pointer'
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1 className='text-buttonB text-4xl tracking-wide font-medium'>
          Loading...
        </h1>
      )}
    </div>
  );
};

export default Post;
