import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading"); // 'loaded', 'loading', 'error'
  const [query, setQuery] = useState("");

  // Fetch products only on component mount
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
      .then((res) => {
        setProducts(Array.isArray(res.data.products) ? res.data.products : []);
        setLoadingStatus("loaded");
      })
      .catch((err) => {
        toast.error("Error loading products");
        setLoadingStatus("error");
      });
  }, []); // Run only once

  function search(e) {
    const q = e.target.value;
    setQuery(q);
    setLoadingStatus("loading");

    if (q === "") {
      // Fetch all products when search query is empty
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          setProducts(Array.isArray(res.data.products) ? res.data.products : []);
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          toast.error("Error loading products");
          setLoadingStatus("error");
        });
    } else {
      // Fetch search results when there is a query
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/" + q)
        .then((res) => {
          setProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          toast.error("Error loading products");
          setLoadingStatus("error");
        });
    }
  }

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Banner Section */}
      <div
        className="relative w-full py-10 px-6 flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/attractive-asian-woman-showing-smartphone-app-shopping-bags-buying-online-via-application-standi_1258-156869.jpg?t=st=1743521673~exp=1743525273~hmac=bdca2c6205cf3edf331a57148fdd36ab1967f8f6b47a18117c1bd61ef1756633&w=1380')`,
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg opacity-75"></div>

        {/* Banner Content */}
        <div className="relative z-10 md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Grab Upto 50% Off On
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Selected Mobiles
          </h3>
          <p className="text-white/90 mb-6 max-w-md">
            Discover amazing deals on the latest smartphones. Limited time offers available now!
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md flex items-center">
            Buy Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full flex justify-center px-4 -mt-6 relative z-20">
        <div className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pl-12 rounded-xl bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Search for products..."
              onChange={search}
              value={query}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="w-full bg-white py-4 px-6 flex flex-wrap items-center gap-4 mt-4 shadow-sm rounded-b-xl">
        {/* Filter Buttons */}
        <div className="filter-dropdown">
          <button className="flex items-center text-sm font-medium text-gray-700 gap-1 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-lg">
            Mobile Type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {/* ... Other filter buttons go here ... */}
        <div className="ml-auto">
          <button className="flex items-center text-sm font-medium text-gray-700 gap-1 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-lg">
            Sort by
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Title */}
      <div className="w-full px-6 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          Mobiles For You!
        </h1>
      </div>

      {/* Loading Spinner */}
      {loadingStatus === "loading" && (
        <div className="w-full h-64 flex items-center justify-center mt-8">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500"></div>
        </div>
      )}

      {/* Products Grid */}
      {loadingStatus === "loaded" && (
  <div className="px-6 py-8">
    {products.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center py-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-300 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-2xl font-semibold text-gray-500">
          No products found.
        </p>
        <p className="text-gray-400 mt-3">
          Try adjusting your search or filters.
        </p>
      </div>
    )}
  </div>
)}


     {/* Footer */}
     <footer className="w-full bg-gray-800 text-white py-8 px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Shop Easy</h3>
            <p className="text-gray-300 max-w-md">
              Your one-stop destination for the latest mobile phones and accessories at the best prices.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-md font-semibold mb-3">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobiles</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Shop Easy. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              {/* Facebook Icon */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.515c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              {/* Twitter Icon */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              {/* Instagram Icon */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.415 2.227.055 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.415-1.274.055-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
