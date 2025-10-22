import { useEffect, useState } from "react";
import { CreateCommentApiCall, GetCommentsApiCall } from "./CommentsApiCalls";
import PostDate from "../PostPages/PostDate";

const CommentsPage = ({ postId }) => {
  const [commnets, setComments] = useState([]);
  const [content, setContent] = useState("");

  const handleSend = async () => {
    console.log("inside handle send");
    if (postId && content) {
      await CreateCommentApiCall(postId, content);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      if (postId) {
        GetCommentsApiCall(postId).then((res) => {
          if (res?.data) {
            setComments(res.data);
          }
        });
      }
    };
    fetchComments();
  }, [postId]);
  return (
    <div className='px-10 pb-10 flex flex-col gap-3'>
      <h1 className='text-xl text-buttonL tracking-wide font-medium'>
        Comments
      </h1>
      <div className='w-full flex justify-between items-center border-1 border-border py-3 px-5'>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Add Comment'
          className='border-none outline-none w-full'
        />
        <button
          onClick={handleSend}
          className='text-sm bg-blue-200 text-buttonL py-1 px-2 rounded-md hover:cursor-pointer hover:bg-blue-300'
        >
          Send
        </button>
      </div>

      {commnets.length > 0 ? (
        <>
          <div className='w-full flex flex-col gap-3'>
            {commnets.map((comment) => (
              <div
                key={comment._id}
                className='shadow-md py-2 px-3 rounded-md flex gap-3 items-center'
              >
                <div className='flex flex-col items-center bg-blue-100 rounded-2xl py-2 px-2'>
                  <img
                    src={comment.author.photoUrl}
                    className='w-12 h-12 object-cover rounded-full'
                  />
                  <h1>{comment.author.firstName}</h1>
                </div>
                <div>
                  <h1>{comment.content}</h1>
                  <h1 className='text-sm text-textB'>
                    <PostDate createdAt={comment.createdAt} />
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1 className='text-md text-textB'>No Comments Yet</h1>
      )}
    </div>
  );
};

export default CommentsPage;
