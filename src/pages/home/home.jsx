import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MobileMart</h1>
        <FaSearch className="text-gray-600 text-xl cursor-pointer" />
      </header>

      {/* Hero Section */}
      <section className="w-full bg-blue-500 text-white text-center py-10 px-4">
        <h2 className="text-3xl font-bold">Find Your Perfect Mobile</h2>
        <p className="text-lg mt-2">Best deals on latest smartphones</p>
        <input
          type="text"
          placeholder="Search for mobiles..."
          className="w-full max-w-md p-2 mt-4 rounded-md text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* Categories */}
      <section className="py-6 px-4">
        <h3 className="text-xl font-semibold mb-4">Top Brands</h3>
        <div className="flex space-x-4 overflow-x-auto">
          {["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme"].map((brand) => (
            <div
              key={brand}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-6 px-4">
        <h3 className="text-xl font-semibold mb-4">Trending Now</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-md">
              <div className="bg-gray-300 h-32 rounded-md"></div>
              <p className="mt-2 text-center font-semibold">Mobile {item}</p>
              <p className="text-center text-gray-600">$999</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 mt-6 shadow-md">
        <p className="text-gray-600">&copy; 2025 MobileMart. All Rights Reserved.</p>
      </footer>
    </div>
  );
}