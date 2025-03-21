import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';
export default function HomePage() {
    return (
        <div className="h-screen w-full">
       <Header />

       <div className='w-full h-[calc(100vh-100px)] '>

       <Routes path="/*">

       <Route path="/" element={<h1>Home</h1>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/productInfo/:id" element={<ProductOverview/>} />
       </Routes>
       </div>
     </div>
   ); 
 }