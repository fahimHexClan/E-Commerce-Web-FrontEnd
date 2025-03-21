import { Link, Routes, Route } from "react-router-dom";
import { BsGraphUp, BsBox, BsClipboard, BsPeople } from "react-icons/bs";
import AdminProductPage from "./admin/adminProductPage";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProductForm";


export default function AdminHomePage() {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-screen flex flex-col p-5">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>

        {/* Sidebar Menu */}
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/admin/dashboard" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <BsGraphUp className="mr-3 text-lg" /> Dashboard
          </Link>
          <Link 
            to="/admin/products" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <BsBox className="mr-3 text-lg" /> Products
          </Link>
          <Link 
            to="/admin/orders" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <BsClipboard className="mr-3 text-lg" /> Orders
          </Link>
          <Link 
            to="/admin/customers" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <BsPeople className="mr-3 text-lg" /> Customers
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Routes for different sections */}
        <Routes  path="/*">
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProductPage/>} />
          <Route path="products/addProduct" element={<AddProductForm />} />
          <Route path="products/editProduct" element={<EditProductForm/>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 not found the admin page</h1>}/>
        </Routes>
      </div>
    </div>
  );
}
