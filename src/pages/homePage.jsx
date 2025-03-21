import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';
import ProductPage from './home/product';
import Cart from './home/cart';
export default function HomePage() {
    return (
        <div className="h-screen w-full">
       <Header />

       <div className='w-full h-[calc(100vh-100px)] '>

       <Routes path="/*">

       <Route path="/" element={<h1>Home</h1>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/productInfo/:id" element={<ProductOverview/>} />
       <Route path="/products*" element={<ProductPage/>}/>
       <Route path="/cart" element={<Cart/>}/>
       </Routes>
       </div>
     </div>
   ); 
 }