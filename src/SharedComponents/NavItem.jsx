import { NavLink } from "react-router-dom";

const NavItem = ({ itemName, pathName }) => {
  return (
    <NavLink
      to={pathName}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "border-b-2 border-orange-300 text-orange-300" : ""
      }
    >
      {itemName}
    </NavLink>
  );
};

export default NavItem;
