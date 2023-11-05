// All imports
import NavItem from "./NavItem";
import logo from "../assets/images/AB.png";
import { useAuth } from "../Hooks/useAuth";

// componennt
const NavBar = () => {
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
      <li>
        <NavItem itemName={"Assignments"} pathName={"/signin"}></NavItem>
      </li>
      <li>
        <NavItem itemName={"SignIn"} pathName={"/signin"}></NavItem>
      </li>
      <li>
        <NavItem itemName={"SignUp"} pathName={"/signup"}></NavItem>
      </li>
    </>
  );
  return (
    <div className="bg-[#245d51] text-white">
      <div className=" md:max-w-[90vw] max-w-[95vw] mx-auto">
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
                className="menu menu-sm text-black w-fit dropdown-content gap-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
              >
                {navLinks}
              </ul>
            </div>
            <img className="h-16 w-16" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal gap-3 px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end flex gap-3">
            <div>
              <img
                title={user?.displayName}
                className="rounded-full h-16 w-auto"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <button onClick={handleUserSignOur} className="btn">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
