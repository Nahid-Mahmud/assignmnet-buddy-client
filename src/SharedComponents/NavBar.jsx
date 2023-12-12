// All imports
import NavItem from "./NavItem";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// componennt
const NavBar = () => {
  // use context
  const { user, signoutUser } = useAuth();

  // const [myassignments, setmyassignments] = useState([]);
  // const baseUrl = `${import.meta.env.VITE_serverUrl}/allAssignment?email=${
  //   user?.email
  // }`;
  const baseUrl = `${import.meta.env.VITE_serverUrl}/allAssignment/user?email=${
    user?.email
  }`;
  // useEffect(() => {
  //   fetch(baseUrl, { withCredentials: true })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log("inside fetch", data);
  //       setmyassignments(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [baseUrl, user.email]);

  const { data: myassignments } = useQuery({
    queryKey: ["usercreatedAssignments"],
    enabled: !!user,
    queryFn: async () => {
      const result = await axios.get(baseUrl, {
        withCredentials: true,
      });
      const userCreatedAssignments = result.data;
      return userCreatedAssignments;
    },
  });

  console.log(myassignments);

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
        <NavItem
          itemName={"All Assignments"}
          pathName={"/allAssignments"}
        ></NavItem>
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
          <NavItem
            itemName={"Create Assignment"}
            pathName={"/createAssitnment"}
          ></NavItem>
        </li>
      ) : (
        ""
      )}

      {user ? (
        <li>
          <NavItem
            itemName={"My Creations"}
            pathName={"/myAssignments"}
          ></NavItem>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li>
          <NavItem
            pathName={"/mySubmittedAssignments"}
            itemName={"My Submissions "}
          ></NavItem>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li>
          <NavItem
            itemName={"All Submissions"}
            pathName={"/submittedAssignments"}
          ></NavItem>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="bg-[#245d51] text-white">
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
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
                <img
                  className="h-16 w-16"
                  src="https://i.ibb.co/YNDZ8wP/AB.png"
                  alt=""
                />
              </Link>
              <p className="text-2xl font-semibold hidden md:inline lg:hidden xl:inline">
                AssignmentBuddy
              </p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal  gap-3 px-1">{navLinks}</ul>
          </div>
          {user ? (
            <div className="navbar-end flex gap-3">
              <div className=" items-center hidden xl:flex justify-center gap-2">
                <div>
                  <button className="btn bg-green-700 text-white hover:bg-green-900">
                    A-Count
                    <div className="badge">
                      {myassignments?.length ? myassignments?.length : 0}
                    </div>
                  </button>
                </div>
                <img
                  title={user?.displayName}
                  className="rounded-full h-16 w-16 "
                  src={user?.photoURL}
                  alt=""
                />
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
