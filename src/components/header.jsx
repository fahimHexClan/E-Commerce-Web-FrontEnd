import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavSlider from "./navSlider";
 
 export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
   return (
     <>
      {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />}
      <header className="bg-white shadow-md w-full h-[100px] flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/Home">
            <img
              src="/shopping-online.jpg"
              alt="Logo"
              className="h-16 w-16 rounded-full object-cover"
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            to="/Home"
            className="text-[#1E3A8A] font-bold text-xl hover:text-[#F59E0B] hover:border-b-2 hover:border-[#F59E0B] transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-[#1E3A8A] font-bold text-xl hover:text-[#F59E0B] hover:border-b-2 hover:border-[#F59E0B] transition-all duration-200"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-[#1E3A8A] font-bold text-xl hover:text-[#F59E0B] hover:border-b-2 hover:border-[#F59E0B] transition-all duration-200"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-[#1E3A8A] font-bold text-xl hover:text-[#F59E0B] hover:border-b-2 hover:border-[#F59E0B] transition-all duration-200"
          >
            Contact Us
          </Link>
          <Link
            to="/cart"
            className="text-[#1E3A8A] font-bold text-xl hover:text-[#F59E0B] hover:border-b-2 hover:border-[#F59E0B] transition-all duration-200"
          >
            Cart
          </Link>
          <Link
            to="/orders"
            className="text-[#1E3A8A] font-bold text-xl hover:text-[#F59E0B] hover:border-b-2 hover:border-[#F59E0B] transition-all duration-200"
          >
            Orders
          </Link>
        </nav>
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <RxHamburgerMenu
            onClick={() => setIsSliderOpen(true)}
            className="text-3xl text-accent cursor-pointer"
          />
        </div>
      </header>
    </>
   );
 }