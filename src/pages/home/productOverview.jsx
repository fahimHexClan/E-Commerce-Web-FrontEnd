import axios from "axios";
 import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import ProductNotFound from "./productNotFound";
 import ImageSlider from "../../components/imageSlider";
 import { addToCart } from "../../utils/cartFunction";
 import toast from "react-hot-toast";
 
 export default function ProductOverview() {
   
   const params = useParams();
   const productId = params.id;
   const [product, setProduct] = useState(null)
   const [status, setStatus] = useState("loading")//not-foud, found
 
   useEffect(
     () => {
       console.log(productId)
       axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then((res)=>{
         console.log(res.data)
 
         //if null
         if(res.data == null){
           setStatus("not-found")
         }
 
         if(res.data != null){
           setProduct(res.data)
           setStatus("found")
         }
       })
  
     }
     ,[])
     function onAddtoCartClick(){
        addToCart(product.productId,1)
        toast.success(product.productId+" Added to cart")
      }
 
   return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-gray-100">
    {/* Loading Spinner */}
    {status === "loading" && (
      <div className="flex justify-center items-center w-full h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-400 border-t-blue-500"></div>
      </div>
    )}
  
    {/* Product Not Found */}
    {status === "not-found" && <ProductNotFound />}
  
    {/* Product Found */}
    {status === "found" && (
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Product Image */}
        <div className="w-full lg:w-2/5 border-2 border-blue-600 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-105">
          <ImageSlider images={product.image} />
        </div>
  
        {/* Product Details */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 opacity-0 animate-fade-in">
            {product.productName}
          </h1>
          <h2 className="text-lg lg:text-xl font-semibold text-gray-500">
            {product.altNames.join(" | ")}
          </h2>
  
          {/* Price Section */}
          <p className="text-lg text-gray-700">
            {product.price > product.lastPrice && (
              <span className="line-through text-red-500 mr-2">
                LKR {product.price}
              </span>
            )}
            <span className="text-green-600 font-semibold text-xl">
              LKR {product.lastPrice}
            </span>
          </p>
  
          {/* Description */}
          <p className="text-gray-700">{product.description}</p>
  
          {/* Add to Cart Button */}
          <button
            onClick={onAddtoCartClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    )}
  </div>
   );
 }  