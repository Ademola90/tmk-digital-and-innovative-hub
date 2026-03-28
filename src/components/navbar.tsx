// src/components/navbar.tsx

import { useState } from "react";
import { HiMenu, HiX, HiLogout } from "react-icons/hi";
import Logo from "./logo";
import Button from "./ui/buttons";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const isAdmin = user?.role === "admin";

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    closeMenu();
  };

  return (
    <div className="relative flex items-center justify-between p-4 lg:px-20 md:px-10 px-5">
      {/* Left section: Logo + Desktop Navigation */}
      <div className="flex items-center gap-x-24">
        <Logo />
        <ul className="hidden lg:flex items-center gap-x-10">
          <Link
            to="/"
            className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </ul>
      </div>

      {/* Right section: Desktop Button + Mobile Hamburger */}
      <div className="flex items-center gap-5">
        {/* Desktop Button */}
        <div className="hidden lg:flex items-center gap-5">
          {isAdmin ? (
            <>
              <Button
                text="Dashboard"
                className="bg-teal-500 text-white hover:rounded-none hover:bg-teal-600 cursor-pointer font-roboto rounded-2xl"
                onClick={() => {
                  navigate("/admin/dashboard");
                }}
              />
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <HiLogout size={20} />
                Logout
              </button>
            </>
          ) : (
            <Button
              text="Browse Courses"
              className="bg-[#1E3A8A] text-white hover:rounded-none  hover:bg-white hover:text-[#1E3A8A] cursor-pointer font-roboto rounded-2xl"
              onClick={() => {
                navigate("/courses");
              }}
            />
          )}
        </div>

        {/* Hamburger icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-5 flex flex-col items-center gap-4 lg:hidden z-50">
          <ul className="flex flex-col items-center gap-4 w-full">
            <Link
              to="/"
              className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </ul>

          {/* Mobile Button */}
          <div className="flex flex-col gap-3 w-full">
            <Button
              text="Browse Courses"
              className="bg-[#1E3A8A] text-white hover:rounded-none hover:border-y hover:border-y-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A] cursor-pointer font-roboto rounded-2xl w-full"
              onClick={() => {
                navigate("/courses");
                closeMenu();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import Logo from "./logo";
// import Button from "./ui/buttons";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <div className="relative flex items-center justify-between p-4 lg:px-20 md:px-10 px-5">
//       {/* Left section: Logo + Desktop Navigation */}
//       <div className="flex items-center gap-x-24">
//         <Logo />
//         <ul className="hidden lg:flex items-center gap-x-10">
//           <Link
//             to="/"
//             className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//             onClick={closeMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//             onClick={closeMenu}
//           >
//             About Us
//           </Link>
//           <Link
//             to="/events"
//             className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//             onClick={closeMenu}
//           >
//             Events
//           </Link>
//           <Link
//             to="/contact"
//             className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//             onClick={closeMenu}
//           >
//             Contact
//           </Link>
//         </ul>
//       </div>

//       {/* Right section: Desktop Button + Mobile Hamburger */}
//       <div className="flex items-center gap-5">
//         {/* Desktop Button */}
//         <div className="hidden lg:flex items-center gap-5">
//           <Button
//             text="Browse Courses"
//             className="bg-[#1E3A8A] text-white hover:rounded-none  hover:bg-white hover:text-[#1E3A8A] cursor-pointer font-roboto rounded-2xl"
//             onClick={() => {
//               navigate("/courses");
//             }}
//           />
//         </div>

//         {/* Hamburger icon */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-2xl focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-5 flex flex-col items-center gap-4 lg:hidden z-50">
//           <ul className="flex flex-col items-center gap-4 w-full">
//             <Link
//               to="/"
//               className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//               onClick={closeMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//               onClick={closeMenu}
//             >
//               About Us
//             </Link>
//             <Link
//               to="/events"
//               className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//               onClick={closeMenu}
//             >
//               Events
//             </Link>
//             <Link
//               to="/contact"
//               className="text-[16px] hover:text-[#2563EB] text-[#1E3A8A] cursor-pointer font-roboto"
//               onClick={closeMenu}
//             >
//               Contact
//             </Link>
//           </ul>

//           {/* Mobile Button */}
//           <div className="flex flex-col gap-3 w-full">
//             <Button
//               text="Browse Courses"
//               className="bg-[#1E3A8A] text-white hover:rounded-none hover:border-y hover:border-y-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A] cursor-pointer font-roboto rounded-2xl w-full"
//               onClick={() => {
//                 navigate("/courses");
//                 closeMenu();
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
