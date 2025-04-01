import { useState } from "react";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";

export default function MobileStore() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header / Nav */}
      <header className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-extrabold text-white tracking-wide">TechMobiles</div>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-md shadow-md">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for mobiles..."
              className="bg-transparent outline-none flex-grow px-2 text-gray-700 placeholder-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-gray-300 flex items-center space-x-1">
              <FaUserCircle size={24} />
              <span>Login</span>
            </button>
            <button className="text-white hover:text-gray-300 flex items-center space-x-1">
              <FaShoppingCart size={24} />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/attractive-asian-woman-showing-smartphone-app-shopping-bags-buying-online-via-application-standi_1258-156869.jpg?t=st=1743521673~exp=1743525273~hmac=bdca2c6205cf3edf331a57148fdd36ab1967f8f6b47a18117c1bd61ef1756633&w=1380')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white">Latest Smartphones at Best Prices</h1>
          <p className="mt-4 text-lg text-gray-200">Discover top brands and exclusive offers</p>
          <button className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold text-blue-800 mb-8">Featured Smartphones</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {[
    { name: "iPhone 14 Pro", image: "https://switch.com.ph/cdn/shop/products/iPhone_14_Pro_Space_Black_PDP_Image_Position-1A_Space_Black_Color_SEA.jpg?v=1679469088" },
    { name: "Samsung S23 Ultra", image: "https://i0.wp.com/chinthanagsm.lk/wp-content/uploads/2023/02/s23-ultra.jpg?fit=600%2C600&ssl=1" },
    { name: "OnePlus 11", image: "https://smartmobile.lk/image/cache/catalog/OnePlus%2011-500x500.jpg" },
    { name: "Google Pixel 7", image: "https://presentsolution.lk/wp-content/uploads/2024/08/google-pixel-7-pro.webp" }
  ].map((phone, index) => (
    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img 
        src={phone.image} 
        alt={phone.name} 
        className="w-full h-64 object-cover" 
      />
      <div className="p-4 text-center">
        <p className="font-semibold text-gray-700">{phone.name}</p>
        <button className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>

</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 text-gray-400">
        <p>&copy; 2025 TechMobiles. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
