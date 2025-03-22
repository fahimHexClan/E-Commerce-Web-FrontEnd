import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavSlider from "./navSlider";
 
 export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
   return (
    <>
    {isSliderOpen&&<NavSlider closeSlider={()=>{setIsSliderOpen(false)}}/>}
    <header className="bg-white w-full h-[100px] relative flex justify-center items-center">
      <img
        src="shopping-online.jpg"
        className="cursor-pointer h-full rounded-full absolute left-[10px]"
      />
      <RxHamburgerMenu 
      onClick={()=>{setIsSliderOpen(true)}}
      className="text-3xl absolute cursor-pointer text-accent right-[10px] lg:hidden" />
        <div className="h-full  items-center w-[500px] justify-between hidden lg:flex">
           <Link
             to="/"
             className="text-accent font-bold text-xl hover:border-b border-b-accent"
           >
             Home
           </Link>
           <Link
             to="/products"
             className="text-accent font-bold text-xl hover:border-b border-b-accent"
           >
             Products
           </Link>
           <Link
             to="/about"
             className="text-accent font-bold text-xl hover:border-b border-b-accent"
           >
             About Us
           </Link>
           <Link
             to="/contact"
             className="text-accent font-bold text-xl hover:border-b border-b-accent"
           >
             Contact Us
           </Link>
 
           <Link
             to="/cart"
             className="text-accent font-bold text-xl hover:border-b border-b-accent"
           >
             Cart
           </Link>
         </div>
       </header>
     </>
   );
 }