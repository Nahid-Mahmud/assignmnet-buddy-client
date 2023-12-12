import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import GoogleLogin from "../../SharedComponents/GoogleLogin";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const SignUp = () => {
  // useSates
  const [userSignUpError, SetUserSignUpError] = useState("");
  const [passwordforStrength, setPasswordforStrength] = useState("");
  // values form authprovider
  const { googleLogIn, emailPassSignup } = useAuth();

  // navigate user
  const navigate = useNavigate();

  // handle form function
  const handleForm = (e) => {
    SetUserSignUpError("");
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name,photoUrl,email,password);

    // password validate

    if (!/^.{6,}$/.test(password)) {
      SetUserSignUpError(`Must have at least 6 characters`);
      return;
    } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
      SetUserSignUpError(`Must have at least 1 capital letter`);
      return;
    } else if (!/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~])\S+$/.test(password)) {
      SetUserSignUpError(`Must have at least 1 special character`);
      return;
    }

    // create user with email password
    emailPassSignup(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateProfile(currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("User Updated", currentUser);
          })
          .catch((err) => {
            console.log(err);
          });
        if (currentUser) {
          toast(" Sign Up Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
          //   e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        SetUserSignUpError(err.message);
      });
  };
  // Google sign In
  const handleGoogleLogin = () => {
    SetUserSignUpError("");
    console.log("first");
    googleLogIn()
      .then((result) => {
        const currentUser = result.user;
        if (currentUser) {
          toast(" Sign Up Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
          //   e.target.reset();
        }
      })
      .catch((err) => {
        SetUserSignUpError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-[#113a31] to-[#ff4e59]">
      <div className="w-full  max-w-md ">
        <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleForm} className="pb-6">
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
                onChange={(e) => setPasswordforStrength(e.target.value)}
              />
              <PasswordStrengthIndicator password={passwordforStrength} />
              <p className="text-red-500 text-xs italic">{userSignUpError}</p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              <input
                className="btn bg-green-600 text-white hover:text-black hover:bg-green-500 transition"
                type="submit"
                value="Sign Up"
              />
              <p className="inline-block align-baseline font-bold  " href="#">
                Have an account?{" "}
                <Link
                  className="text-blue-500  hover:text-blue-800"
                  to={"/signin"}
                >
                  Sign In
                </Link>{" "}
                here
              </p>
            </div>
          </form>
          <p className="text-2xl font-medium ">Connect with Social Network!</p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div onClick={handleGoogleLogin} className="text-center py-7 ">
              <GoogleLogin text="Sign Up With Google "></GoogleLogin>
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

export default SignUp;
// https://i.ibb.co/XJnMfDn/cool-background.png
// https://i.ibb.co/7NdKmYw/error-thumb.png
