import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      navigate("/login");
      return;
    }
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setOrders(res.data || []);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch orders. Please try again.");
        setLoading(false);
      });
  }, []);

  const calculateTotal = (orderedItems) =>
    orderedItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
      {loading ? (
        <p className="text-lg text-gray-600">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-lg text-gray-600">No orders found.</p>
      ) : (
        <div className="w-full max-w-5xl bg-white p-6 rounded-xl shadow-lg">
          <table className="w-full border-collapse text-gray-700">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-md text-white">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.orderId}
                  className="hover:bg-gray-200 cursor-pointer transition"
                  onClick={() => setSelectedOrder(order)}
                >
                  <td className="p-3 border-b">{order.orderId}</td>
                  <td className="p-3 border-b font-semibold">{order.status}</td>
                  <td className="p-3 border-b">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="p-3 border-b font-bold text-blue-600">
                    LKR {calculateTotal(order.orderedItems).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h2>
            <p><span className="font-semibold">Order ID:</span> {selectedOrder.orderId}</p>
            <p><span className="font-semibold">Status:</span> {selectedOrder.status}</p>
            <p><span className="font-semibold">Date:</span> {new Date(selectedOrder.date).toLocaleString()}</p>
            <p><span className="font-semibold">Name:</span> {selectedOrder.name}</p>
            <p><span className="font-semibold">Address:</span> {selectedOrder.address}</p>
            <p><span className="font-semibold">Phone:</span> {selectedOrder.phone}</p>
            <p><span className="font-semibold">Notes:</span> {selectedOrder.notes || "None"}</p>
            <h3 className="text-xl font-bold mt-4 text-gray-800">Ordered Items:</h3>
            <div className="border-t mt-2 pt-2 space-y-3">
              {selectedOrder.orderedItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 border-b pb-2">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>LKR {item.price.toFixed(2)} x {item.quantity}</p>
                    <p className="font-bold text-blue-600">Subtotal: LKR {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => setSelectedOrder(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
