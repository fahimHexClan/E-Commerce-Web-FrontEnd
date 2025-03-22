import axios from "axios"
 import { useEffect, useState } from "react"
 import { deleteItem } from "../utils/cartFunction"
 
 export default function CartCard(props){
 
   const productId = props.productId
   const qty = props.qty
   
   const [product,setProduct]=useState(null)
   const [loaded,setLoaded]=useState(false)
   useEffect  (
     ()=>{
       if(!loaded){
         axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then(
 
           (response)=>{
             if(response.data!=null){
               setProduct(response.data)
               console.log(response.data)
               setLoaded(true)
             }else{
               deleteItem(productId)
             }
             
           }
         ).catch(
           (error)=>{
             console.log(error)
           }
         )
       }
     } , []
   );
 
   return(
     <tr className="hover:bg-cyan-50 cursor-pointer border-b border-gray-200 text-gray-700 transition-all">
       <td className="py-4 px-6">
       <img src={product?.image[0]} className="w-[70px] h-[70px] object-cover rounded-lg shadow-sm"/>
       </td>
       <td className="py-4 px-6 text-center font-medium">{product?.productName}</td>
       <td className="py-4 px-6 text-center text-sm text-gray-500">{productId}</td>
       <td className="py-4 px-6 text-center text-lg font-semibold">{qty}</td>
       <td className="py-4 px-6 text-center font-medium text-green-600">LKR. {product?.lastPrice.toFixed(2)}</td>
       <td className="py-4 px-6 text-center font-bold text-blue-600">{(product?.lastPrice*qty).toFixed(2)}</td>
     </tr>
   )
 
 
 }