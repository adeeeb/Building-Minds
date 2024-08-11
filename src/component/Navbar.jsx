import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import NavItem from "./NavItem";
import { NavItemMob } from "./NavItem";
function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-30 absolute w-full flex justify-between items-center  mx-auto px-10 h-24">
      <h6 className=" text-white text-3xl font-bold ">
        <em className="text-[#E54E86]">B</em>uilding{" "}
        <em className="text-[#E54E86]">M</em>inds
      </h6>
      <ul className="text-white font-bold h-24  justify-between items-center hidden md:flex">
        <NavItem to="/news">News</NavItem>
        <NavItem to="/aboutus">AboutUs</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <NavItem to="/">Home</NavItem>
      </ul>
      {/* Mobile Style */}

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineMenuUnfold size={40} color="white" />
        ) : (
          <MdMenuOpen color="white" size={40} />
        )}
      </div>

      <div
        className={
          !nav
            ? "z-40 fixed left-0 top-0 text-white ease-out duration-500 h-full w-[60%] border-r border-r-gray-900 bg-black"
            : "z-40 fixed left-[-100%]  "
        }
      >
        <h6 className="w-full text-3xl font-bold m-4 ">
          <em className="text-[#E54E86]">B</em>uilding{" "}
          <em className="text-[#E54E86]">M</em>inds
        </h6>

        <ul className="p-4 font-bold text-white uppercase">
          <NavItemMob to="/">Home</NavItemMob>
          <NavItemMob to="/news">News</NavItemMob>
          <NavItemMob to="/aboutus">About Us</NavItemMob>
          <NavItemMob to="/contact">Contact</NavItemMob>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
