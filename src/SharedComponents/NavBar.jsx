// All imports
import NavItem from "./NavItem";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { themeDataFromLocalStorage } from "../Hooks/getThemefromLocalStorage";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../assets/images/AB.png";
// componennt
const NavBar = () => {
  //  Theme for dark mode
  const themeData = themeDataFromLocalStorage();
  const [theme, setTheme] = useState(themeData);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Theme Switcher Function

  const themeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // use context
  const { user, signoutUser } = useAuth();
  //   signout user
  const handleUserSignOur = () => {
    signoutUser()
      .then(() => {})
      .catch(() => {});
  };

  const navLinks = (
    <>
      <li>
        <NavItem itemName={"Home"} pathName={"/"}></NavItem>
      </li>

      <li className="">
        <NavItem itemName={"All Assignments"} pathName={"/allAssignments"}></NavItem>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <NavItem itemName={"Sign In"} pathName={"/signin"}></NavItem>
        </li>
      )}
      {user ? (
        ""
      ) : (
        <li>
          <NavItem itemName={"Sign Up"} pathName={"/signup"}></NavItem>
        </li>
      )}

      {user ? (
        <li>
          <NavItem itemName={"Create Assignment"} pathName={"/createAssitnment"}></NavItem>
        </li>
      ) : (
        ""
      )}

      {user ? (
        <li>
          <NavItem itemName={"My Creations"} pathName={"/myAssignments"}></NavItem>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li>
          <NavItem pathName={"/mySubmittedAssignments"} itemName={"My Submissions "}></NavItem>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li>
          <NavItem itemName={"All Submissions"} pathName={"/submittedAssignments"}></NavItem>
        </li>
      ) : (
        ""
      )}

      <li>
        {theme === "dark" ? (
          <FaSun onClick={themeSwitcher} className="text-2xl cursor-pointer" />
        ) : (
          <FaMoon onClick={themeSwitcher} className="text-2xl cursor-pointer" />
        )}
      </li>
    </>
  );
  return (
    <div className="bg-[#245d51] text-white dark:bg-black">
      <div className="xl:max-w-[90vw] lg:max-w-[100vw] max-w-[95vw] mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm  text-black w-fit dropdown-content gap-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center">
              <Link to={"/"}>
                {" "}
                <img className="h-16 w-16" src={Logo} alt="" />
              </Link>
              <p className="text-2xl font-semibold hidden md:inline lg:hidden xl:inline">AssignmentBuddy</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal  gap-3 px-1">{navLinks}</ul>
          </div>
          {user ? (
            <div className="navbar-end flex gap-3">
              <div>
                <img title={user?.displayName} className="rounded-full h-16 w-16 " src={user?.photoURL} alt="" />
              </div>
              <motion.button
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "tween" }}
                onClick={handleUserSignOur}
                className="btn bg-[#ff4e59] text-white hover:bg-red-600"
              >
                Log Out
              </motion.button>
            </div>
          ) : (
            <div className="navbar-end">Study Web!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
