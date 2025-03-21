import axios from "axios";
 import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import ProductNotFound from "./productNotFound";
 import ImageSlider from "../../components/imageSlider";
 
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
 
   return (
     <div className="w-full h-[calc(100vh-100px)] ">
       {
         status == "loading"&&(//product eka load karanna "&"use karanne eka neththm anuith eka kiyana ekata  
           <div className="w-full h-full flex items-center justify-center">
             <div className="animate-spin rounded-full h-32 w-32  border-2 border-gray-500 border-b-accent border-b-4"></div>
 
           </div>
         )
       }
       {
         status == "not-found"&&(//product eka nththam
           <ProductNotFound/>
         )
       }
       {
         status == "found"&&(//prroduct eka tibbanam
         <div className="w-full h-full flex items-center justify-center">
           <div className="w-[35%] h-full">
             <ImageSlider images={product.image}/>
           </div>
           <div className="w-[65%] h-full p-4">
             <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
             <h1 className="text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}</h1>
             <p className="text-xl text-gray-600">{
             (product.price>product.lastPrice)&&
             <span className="line-through text-red-500">LKR.{product.price}</span>
             } <span>{"LKR."+product.lastPrice}</span></p>
             <p className="text-lg text-gray-600 line-clamp-3">{product.description}</p>
           </div>
         </div>
         )
       }
     </div>
   );
 }