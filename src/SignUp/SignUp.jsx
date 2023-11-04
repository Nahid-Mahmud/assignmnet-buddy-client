import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  // useSates
  const [signUpError, setSignUpError] = useState("");
  // values form authprovider
  const { googleLogIn, emailPassSignup } = useAuth();


  // navigate user
  const navigate = useNavigate()

  // handle form function
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name,photoUrl,email,password);

    // password validate

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
          if(currentUser){
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
          }
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/XJnMfDn/cool-background.png)",
      }}
    >
      <div className="w-full max-w-md">
        <form
          onSubmit={handleForm}
          className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
            <p className="text-red-500 text-xs italic">{signUpError}</p>
          </div>
          <div className="flex items-center justify-between">
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
                SignIn
              </Link>{" "}
              here
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
