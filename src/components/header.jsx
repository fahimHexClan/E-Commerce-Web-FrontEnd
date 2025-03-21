import { Link } from "react-router-dom";
 
 export default function Header() {
   return (
     <header className="bg-white w-full h-[100px] relative flex justify-center items-center">
       <img
         src="/shopping-online.jpg"
         className="cursor-pointer h-full rounded-full absolute left-[10px]"
       />
       <div className="h-full flex items-center w-[500px] justify-between">
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
       </div>
     </header>
   );
 }