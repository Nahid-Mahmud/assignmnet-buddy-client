import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/XJnMfDn/cool-background.png)",
      }}
    >
      <div className="w-full max-w-md">
        <form className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-center  text-3xl font-semibold underline py-5">
            Create Your Account
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
             Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="name"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Photo Url
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photourl"
              type="text"
              name="photourl"
              placeholder="https://example.png"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
           Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Error Message Will be here
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn bg-green-600 text-white hover:text-black hover:bg-green-500 transition"
              type="button"
            >
              Sign Up
            </button>
            <p
              className="inline-block align-baseline font-bold  "
              href="#"
            >
            Have an account? <Link className="text-blue-500  hover:text-blue-800" to={'/signin'}>SignIn</Link> here
            </p>
          </div>
        </form>
        <p className="text-center text-slate-300 text-xs">
          &copy;2023 Assignment Buddy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
// https://i.ibb.co/XJnMfDn/cool-background.png
// https://i.ibb.co/7NdKmYw/error-thumb.png
