import { useState } from "react";
import { DecreaseLikesApiCall, IncreaseLikesApiCall } from "./PostApiCalls";
import { FaThumbsUp } from "react-icons/fa";

const Likes = ({ id, likes }) => {
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(likes);

  const handleLikes = () => {
    const newLike = !like;
    setLike(newLike);

    setCountLike((prevCount) => (newLike ? prevCount + 1 : prevCount - 1));

    if (id) {
      if (newLike) IncreaseLikesApiCall(id);
      else DecreaseLikesApiCall(id);
    }
  };

  return (
    <div className='flex items-center gap-3 font-bold'>
      <button onClick={handleLikes} className='hover:text-buttonB'>
        <FaThumbsUp className={like ? "text-buttonL" : "text-textB"} />
      </button>
      <span>{countLike}</span>
    </div>
  );
};

export default Likes;
