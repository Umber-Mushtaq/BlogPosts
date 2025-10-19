import { Link } from "react-router-dom";
import Likes from "./Likes";

const Post = ({ posts }) => {
  return (
    <div className='w-2xl px-10 py-10'>
      {posts?.length > 0 ? (
        <>
          <div className='grid grid-cols-1 gap-10 mt-5'>
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
                <div className='px-3 py-3 flex flex-col gap-3'>
                  <div className='flex-col md:flex md:flex-row justify-between items-center'>
                    <h1 className='text-2xl text-buttonL font-medium tracking-wide'>
                      {post.title}
                    </h1>
                    <Likes id={post._id} likes={post.likes} />
                  </div>

                  <div className='flex justify-between items-center py-2 text-buttonL'>
                    <h1 className='text-sm text-textC'>
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </h1>
                    <Link
                      to={`/main/${post.author._id}`}
                      className='hover:cursor-pointer'
                    >
                      {post.author.firstName} {post.author.lastName}
                    </Link>
                  </div>

                  <p className='text-sm text-textB '>{post.content}</p>
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
