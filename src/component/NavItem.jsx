/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="p-2  rounded-full ease-out duration-500 hover:bg-[#E54E86]   ">
      <Link className="p-12 h-5 " to={props.to}>
        {props.children}
      </Link>
    </li>
  );
}

function NavItemMob(props) {
  return (
    <Link to={props.to}>
      <li className="p-4 border-b border-white ease-out duration-500 hover:bg-[#E54E86]">
        {props.children}
      </li>
    </Link>
  );
}

export default NavItem;
export { NavItemMob };
