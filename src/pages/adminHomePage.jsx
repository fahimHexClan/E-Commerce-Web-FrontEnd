import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { BsGraphUp, BsBox, BsClipboard, BsPeople } from "react-icons/bs";
import { FaMoneyBillWave, FaBell, FaCog } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AdminProductPage from "./admin/adminProductPage";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProductForm";
import AdminCustomerPage from "./admin/adminCustomerPage"; // Ensure this path is correct
import AdminOrdersPage from "./admin/adminOrdersPage"; // Added missing import
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminHomePage() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    recentOrders: [],
    orderTrends: [],
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken.type !== "admin") {
        toast.error("Unauthorized access");
        navigate("/login");
      } else {
        setUser(decodedToken);
        fetchDashboardStats();
      }
    } catch (error) {
      console.error("Invalid token", error);
      toast.error("Invalid session. Please log in again.");
      navigate("/login");
    }
  }, []);

  const fetchDashboardStats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/orders/admin/stats", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const { totalProducts, totalOrders, totalCustomers, totalRevenue, recentOrders, orderTrends } = response.data;

      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const chartData = Array.from({ length: 12 }, (_, i) => {
        const trend = orderTrends.find((t) => t._id === i + 1);
        return { name: monthNames[i], orders: trend ? trend.orders : 0 };
      });

      setStats({
        totalProducts,
        totalOrders,
        totalCustomers,
        totalRevenue,
        recentOrders,
        orderTrends: chartData,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      if (error.code === "ERR_NETWORK") {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error(error.response?.data?.message || "Failed to load dashboard data. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-2xl border-r border-gray-200 h-full flex flex-col p-6">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            A
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-900">Admin Panel</h2>
            <p className="text-xs text-gray-600">Management Dashboard</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 font-medium shadow-inner"
                  : "text-gray-700 hover:bg-gray-100 hover:shadow-md"
              }`
            }
          >
            <BsGraphUp className="text-lg text-indigo-600" /> Dashboard
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 font-medium shadow-inner"
                  : "text-gray-700 hover:bg-gray-100 hover:shadow-md"
              }`
            }
          >
            <BsBox className="text-lg text-green-600" /> Products
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 font-medium shadow-inner"
                  : "text-gray-700 hover:bg-gray-100 hover:shadow-md"
              }`
            }
          >
            <BsClipboard className="text-lg text-yellow-600" /> Orders
          </NavLink>
          <NavLink
            to="/admin/customers"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 font-medium shadow-inner"
                  : "text-gray-700 hover:bg-gray-100 hover:shadow-md"
              }`
            }
          >
            <BsPeople className="text-lg text-pink-600" /> Customers
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-lg px-8 py-4 flex items-center justify-between border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Overview</h1>
            <p className="text-sm text-gray-600">Welcome back! Monitor your store's performance with ease.</p>
          </div>
          <div className="flex items-center gap-6">
            <FaBell className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer transition-all duration-200" />
            <FaCog className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer transition-all duration-200" />
            <button
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-md hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-md text-sm font-medium"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-8 overflow-y-auto flex-1">
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
          ) : user !== null ? (
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <div className="space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Products</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalProducts}</p>
                          </div>
                          <BsBox className="text-4xl text-blue-600 opacity-80" />
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Orders</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalOrders}</p>
                          </div>
                          <BsClipboard className="text-4xl text-green-600 opacity-80" />
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Customers</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalCustomers}</p>
                          </div>
                          <BsPeople className="text-4xl text-purple-600 opacity-80" />
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-2">${stats.totalRevenue.toFixed(2)}</p>
                          </div>
                          <FaMoneyBillWave className="text-4xl text-orange-600 opacity-80" />
                        </div>
                      </div>
                    </div>

                    {/* Recent Orders and Trends */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-5">Recent Orders</h3>
                        <div className="space-y-4">
                          {stats.recentOrders.length > 0 ? (
                            stats.recentOrders.map((order) => (
                              <div
                                key={order.orderId}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                              >
                                <div>
                                  <p className="font-medium text-gray-800">Order #{order.orderId}</p>
                                  <p className="text-sm text-gray-600">{order.email}</p>
                                  <p className="text-xs text-gray-500">
                                    {order.date ? new Date(order.date).toLocaleString() : "Date not available"}
                                  </p>
                                </div>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    order.status === "Completed"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500 text-center">No recent orders</p>
                          )}
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-5">Order Trends</h3>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={stats.orderTrends}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis
                              dataKey="name"
                              stroke="#6b7280"
                              tick={{ fontSize: 12 }}
                              padding={{ left: 10, right: 10 }}
                            />
                            <YAxis
                              stroke="#6b7280"
                              tick={{ fontSize: 12 }}
                              allowDecimals={false}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                              }}
                              itemStyle={{ color: "#374151" }}
                            />
                            <Bar
                              dataKey="orders"
                              fill="#6366f1"
                              radius={[8, 8, 0, 0]}
                              barSize={20}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                }
              />
              <Route path="/products" element={<AdminProductPage />} />
              <Route path="products/addProduct" element={<AddProductForm />} />
              <Route path="products/editProduct" element={<EditProductForm />} />
              <Route path="/orders" element={<AdminOrdersPage />} />
              <Route path="/customers" element={<AdminCustomerPage />} />
              <Route
                path="*"
                element={<h1 className="text-center text-red-600 font-bold text-xl">404 - Page not found</h1>}
              />
            </Routes>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}