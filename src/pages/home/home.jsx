import { useState } from "react";
import { motion } from "framer-motion";
import { Search, User, ShoppingCart, Home, Star, Heart, Phone, Smartphone, ChevronRight } from "lucide-react";

export default function MobileStore() {
  const [search, setSearch] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="text-white" size={24} />
            <span className="text-2xl font-bold text-white">TechMobiles</span>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-full max-w-sm mx-4 border border-white/20">
            <Search className="text-white/70" size={18} />
            <input
              type="text"
              placeholder="Search devices..."
              className="bg-transparent outline-none flex-grow px-3 text-white placeholder-white/70"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-white/90 hover:text-white transition-colors">
              <User size={22} />
            </button>
            <button className="text-white/90 hover:text-white transition-colors relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-blue-900 w-5 h-5 flex items-center justify-center rounded-full font-bold">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Search - visible only on small screens */}
      <div className="md:hidden px-4 py-3 bg-white shadow-sm">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search for mobiles..."
            className="bg-transparent outline-none flex-grow px-3 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
        <motion.div 
          className="container mx-auto px-4 h-full flex items-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Discover the Future of Mobile Tech
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Experience cutting-edge technology with exclusive deals on premium smartphones
            </p>
            <motion.button 
              className="mt-6 bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Now</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 space-x-4 no-scrollbar">
            {["All", "iPhone", "Samsung", "OnePlus", "Google", "Xiaomi", "Huawei"].map((cat) => (
              <motion.button 
                key={cat}
                className="px-6 py-2.5 rounded-full bg-blue-50 text-blue-800 font-medium whitespace-nowrap hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-blue-900 mb-8"
            {...fadeInUp}
          >
            Featured Phones
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                name: "iPhone 14 Pro", 
                price: "$999",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              { 
                name: "Samsung S23 Ultra", 
                price: "$1,199",
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              { 
                name: "OnePlus 11", 
                price: "$699",
                rating: 4.6,
                image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              { 
                name: "Google Pixel 7", 
                price: "$599",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((phone, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative group">
                  <img 
                    src={phone.image} 
                    alt={phone.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{phone.name}</h3>
                  
                  <div className="flex items-center mt-2 mb-3">
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 text-gray-700 text-sm">{phone.rating}</span>
                    </div>
                    <span className="text-blue-600 font-bold ml-auto">{phone.price}</span>
                  </div>
                  
                  <motion.button 
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="relative py-12 bg-gradient-to-r from-indigo-600  to-indigo-700 overflow-hidden">
  {/* Right-side Background Image */}
  <div 
    className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://img.freepik.com/free-photo/attractive-asian-woman-showing-smartphone-app-shopping-bags-buying-online-via-application-standi_1258-156869.jpg?t=st=1743521673~exp=1743525273~hmac=bdca2c6205cf3edf331a57148fdd36ab1967f8f6b47a18117c1bd61ef1756633&w=1380')] bg-cover bg-center opacity-50"
  ></div>

  {/* Content */}
  <motion.div 
    className="container mx-auto px-4 relative z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Limited Time Offer!</h2>
    <p className="text-white/90 text-lg mb-6">Get 15% off on all accessories with any phone purchase</p>
    <motion.button 
      className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition shadow-lg inline-flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone size={20} />
      <span>View Offers</span>
    </motion.button>
  </motion.div>
</section>


      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 md:hidden z-50">
        <button className="flex flex-col items-center text-blue-600">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <Search size={20} />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <Heart size={20} />
          <span className="text-xs mt-1">Wishlist</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <User size={20} />
          <span className="text-xs mt-1">Account</span>
        </button>
      </nav>

      {/* Footer */}
      <footer className="bg-blue-900 py-8 text-blue-100 mt-12 mb-16 md:mb-0">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Smartphone size={24} />
            <span className="text-xl font-bold">TechMobiles</span>
          </div>
          <p className="text-blue-200">&copy; 2025 TechMobiles. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}