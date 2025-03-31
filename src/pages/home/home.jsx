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
    {[
      { id: 1, name: "iPhone 13", price: "$799", image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437108.jpg?t=st=1743462360~exp=1743465960~hmac=b91c3cb8ae839db5273f9feb72264ed685898877a13627a6754da4b564f0bdca&w=996" },
      { id: 2, name: "Samsung S23", price: "$999", image: "https://img.freepik.com/free-photo/many-fresh-flower-twigs-with-smartphone_23-2148104600.jpg?t=st=1743462408~exp=1743466008~hmac=025d11803946f6b6483aedd2f85bbd64fbd7ed91b27bbf18bf606f81d3a70018&w=996" },
      { id: 3, name: "OnePlus 11", price: "$749", image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437080.jpg?t=st=1743462466~exp=1743466066~hmac=65a51e88164848d77f75a086f86fe264d6c43a15577b7ad018e54d61f04d6006&w=996" },
      { id: 4, name: "Xiaomi Mi 12", price: "$699", image: "https://img.freepik.com/free-photo/futuristic-galaxy-mobile-phone-connects-with-wireless-technology-generated-by-ai_188544-29655.jpg?t=st=1743462589~exp=1743466189~hmac=c8df18032523c2d1e558317202a0f365060d3605d8961883d2d86ee86241ca6f&w=996" },
    ].map((item) => (
      <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
        <img src={item.image} alt={item.name} className="h-32 w-full object-cover rounded-md" />
        <p className="mt-2 text-center font-semibold">{item.name}</p>
        <p className="text-center text-gray-600">{item.price}</p>
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