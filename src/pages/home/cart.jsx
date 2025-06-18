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
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        <div className="p-8 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold text-center text-blue-800">🛒 Your Shopping Cart</h1>
        </div>

        <div className="overflow-x-auto p-6">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base font-semibold">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-center">Qty</th>
                <th className="p-4 text-right">Price</th>
                <th className="p-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <CartCard
                    key={item.productId}
                    productId={item.productId}
                    qty={item.qty}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-400">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 text-right space-y-2">
          <p className="text-xl text-gray-700">
            Total:{" "}
            <span className="font-semibold text-blue-600">
              LKR {labeledTotal.toFixed(2)}
            </span>
          </p>
          <p className="text-lg text-gray-600">
            Discount:{" "}
            <span className="text-red-500">
              LKR {(labeledTotal - total).toFixed(2)}
            </span>
          </p>
          <p className="text-2xl font-bold text-gray-800">
            Grand Total:{" "}
            <span className="text-green-600">LKR {total.toFixed(2)}</span>
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onOrderCheckOutClick}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-medium text-lg shadow hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}