import axios from "axios"
 import { useEffect, useState } from "react"
 import toast from "react-hot-toast"
 import ProductCard from "../../components/productCard"
 
 export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading"); //loaded, loading, error
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (loadingStatus === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data);
          setProducts(Array.isArray(res.data.products) ? res.data.products : []);
          setLoadingStatus("loaded");
        })
        .catch((err) => toast.error("Error loading products"));
    }
  }, []);

  function search(e) {
    const query = e.target.value;
    setQuery(query);
    setLoadingStatus("loading");
    if (query == "") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data);
          setProducts(Array.isArray(res.data.products) ? res.data.products : []);
          setLoadingStatus("loaded");
        })
        .catch((err) => toast.error("Error loading products"));
    }else{
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/"+query)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch((err) => toast.error("Error loading products"));
    }
  }
 
  return (
    <div className="w-full min-h-screen pt-8 bg-gray-50 relative">
    {/* Search Bar */}
    <div className="absolute top-4 w-full flex justify-center px-4 z-10">
      <input
        type="text"
        className="w-full sm:w-1/2 p-3 rounded-xl bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        placeholder="Search Products"
        onChange={search}
        value={query}
      />
    </div>

    {/* Loading Spinner */}
    {loadingStatus === "loading" && (
      <div className="w-full h-full flex items-center justify-center mt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-4 border-gray-300 border-t-accent"></div>
      </div>
    )}

    {/* Display Products */}
    {loadingStatus === "loaded" && (
      <div className="w-full h-full overflow-y-auto pt-16 pb-8 flex flex-wrap justify-center gap-6 px-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-500">
            No products found.
          </p>
        )}
      </div>
    )}
  </div>
);
}