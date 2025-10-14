const Login = () => {
  return (
    <form className='flex flex-col justify-center items-center gap-4 p-6 w-full'>
      <h2 className='text-xl font-semibold text-center'>Login</h2>
      <input
        type='email'
        placeholder='Email'
        className='border w-full p-2 rounded'
      />
      <input
        type='password'
        placeholder='Password'
        className='border w-full p-2 rounded'
      />
      <button
        onClick={(e) => e.preventDefault()}
        className='text-center bg-[#385f6a] text-buttonT py-2 px-2 w-max rounded-md'
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
