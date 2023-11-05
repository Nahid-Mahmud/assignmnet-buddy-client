import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../SharedComponents/GoogleLogin";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const { emailPassLogin, googleLogIn } = useAuth();
  const [signInError, setSignInError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  // Login with email and password
  const handleLogin = (e) => {
    setSignInError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    emailPassLogin(email, password)
      .then((result) => {
        const currentUser = result.user;
        if (currentUser) {
          //show toast
          toast(" Sign In Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setSignInError(err.message);
      });
  };

  // GoogleLogin
  const handleGoogleLogin = () => {
    setSignInError("");
    console.log("first");
    googleLogIn()
      .then((result) => {
        const currentUser = result.user;
        if (currentUser) {
          toast(" Sign In Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setSignInError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-[#113a31] to-[#ff4e59]">
      <div className="w-full  max-w-md ">
        <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleLogin} className="pb-6">
            <p className="text-center  text-3xl font-semibold underline  py-5">
              LogIn To Your Account
            </p>
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
              <p className="text-red-500 text-xs italic">{signInError}</p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              <input
                className="btn bg-green-600 text-white hover:text-black hover:bg-green-500 transition"
                type="submit"
                value="Sign In"
              />
              <p
                className="inline-block align-baseline font-bold capitalize"
                href="#"
              >
                New Student?{" "}
                <Link
                  className="text-blue-500  hover:text-blue-800"
                  to={"/signup"}
                >
                  SignUp
                </Link>{" "}
                here
              </p>
            </div>
          </form>
          <p className="text-2xl font-medium capitalize">
            LogIn With Social Network!
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div onClick={handleGoogleLogin} className="text-center py-7 ">
              <GoogleLogin text="Sign In With Google "></GoogleLogin>
            </div>
            <button className="btn bg-green-600 hover:bg-green-700 text-white  hover:text-black">
              <Link to={"/"}>Go Home</Link>
            </button>
          </div>
        </div>
        <p className="text-center text-slate-300 text-xs">
          &copy;2023 Assignment Buddy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
