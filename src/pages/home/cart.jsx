import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cartFunction";
import CartCard from "../../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(loadCart());
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
        orderedItems: loadCart(),
      })
      .then((res) => {
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.labeledTotal);
        }
      });
  }, []);

  function onOrderCheckOutClick() {
    navigate("/shipping", {
      state: {
        items: loadCart(),
      },
    });
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-8 bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Shopping Cart</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-md text-left text-lg font-semibold">
                <th className="p-4">Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Product ID</th>
                <th className="p-4">Qty</th>
                <th className="p-4">Price</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-right">
          <p className="text-2xl font-semibold text-gray-800">Total: <span className="text-blue-600">LKR {labeledTotal.toFixed(2)}</span></p>
          <p className="text-xl font-medium text-gray-600">Discount: <span className="text-red-500">LKR {(labeledTotal - total).toFixed(2)}</span></p>
          <p className="text-3xl font-bold text-gray-900 mt-2">Grand Total: <span className="text-green-600">LKR {total.toFixed(2)}</span></p>
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={onOrderCheckOutClick} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
