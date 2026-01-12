import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/EC 512_300.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "relative block text-gray-700 font-medium py-2 transition-all duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:bottom-0 " +
    "after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 " +
    "hover:text-orange-400 hover:after:w-full";

  const activeStyle = "text-orange-400 after:w-full";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];    




  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
         
        <NavLink to="/">
        <img
         src={logo}
         alt="Logo"
         className="h-18 w-auto scale-110 hover:scale-125 transition-transform duration-300 cursor-pointer"
       />
      </NavLink>




          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive ? `${linkStyle} ${activeStyle}` : linkStyle
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${linkStyle} ${activeStyle} border-b border-orange-200`
                    : `${linkStyle} border-b border-gray-200`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;


