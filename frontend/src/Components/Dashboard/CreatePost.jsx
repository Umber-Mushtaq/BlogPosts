import { useRef, useState } from "react";
import { CreatePostApiCall } from "../PostPages/PostApiCalls";

const CreatePost = () => {
  const categories = ["Technology", "Lifestyle", "Education", "Entertainment"];

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const fileInputRef = useRef();

  const handleImageSelection = (e) => {
    const selectedImage = e.target.files[0];
    const url = "/assets/" + selectedImage.name;
    console.log(url);
    setImageUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && category && imageUrl && content)
      CreatePostApiCall({ title, category, content, imageUrl });
  };

  return (
    <div className='px-5 py-15 my-5 w-full flex justify-center items-center'>
      <div className='w-2xl'>
        <h1 className='text-buttonB text-4xl tracking-wide font-medium'>
          Create Post
        </h1>
        <div className='border-1 border-border rounded-md mt-3 text-textB py-2 px-2'>
          <img
            src={imageUrl}
            alt='img'
            className='w-auto h-auto object-cover'
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='py-3 px-3 mt-2 border-1 border-border rounded-md'>
            <div className='flex-col gap-3 md:flex md:flex-row md:gap-0  justify-between items-center'>
              <label className='mb-2 md:mb-0 block text-gray-600'>
                Upload Image
              </label>
              <div className='bg-border text-black text-center py-3 px-4 rounded-md cursor-pointer'>
                <input
                  type='file'
                  accept='image/*'
                  ref={fileInputRef}
                  onChange={handleImageSelection}
                  className='hidden hover:cursor-pointer'
                />
                <button
                  type='button'
                  className='hover:cursor-pointer'
                  onClick={() => fileInputRef.current.click()}
                >
                  Choose an image
                </button>
              </div>
            </div>
          </div>

          <div className='py-3 px-3 mt-2 border-1 border-border rounded-md'>
            <input
              type='text'
              placeholder='Enter Post Title'
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className='border-none outline-none w-full'
            />
          </div>

          <div className='py-3 px-3 mt-2 border-1 border-border rounded-md'>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full border-none outline-none text-textB'
            >
              <option value='' disabled>
                Choose a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className='flex items-center border-1 border-border py-3 px-3 mt-2 rounded-md w-full'>
            <textarea
              className='resize-y w-full text-text border-none outline-none '
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type='text'
              name='content'
              placeholder='Enter Content....'
            />
          </div>

          <button
            type='submit'
            className='py-2 px-3 mt-2 rounded-md w-full hover:cursor-pointer bg-buttonB text-buttonT'
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
