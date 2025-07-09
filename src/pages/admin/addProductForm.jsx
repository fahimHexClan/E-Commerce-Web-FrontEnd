import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    // Validate required fields
    if (!productId || !productName || !price || !lastPrice || !stock || !description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      // Split alternative names if provided
      const altNames = alternativeNames ? alternativeNames.split(",") : [];

      // Upload images to Supabase
      const imgUrls = await Promise.all(imageFiles.map(file => uploadMediaToSupabase(file)));
      console.log("Uploaded Image URLs:", imgUrls); // Debugging

      // Prepare product object with correct data types
      const product = {
        productId,
        productName,
        altNames,
        image: imgUrls,
        price: parseFloat(price), // Convert to number
        lastPrice: parseFloat(lastPrice), // Convert to number
        stock: parseInt(stock, 10), // Convert to integer
        description,
      };

      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login to add a product");
        return;
      }

      // Send POST request to backend
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/admin/products");
      toast.success("Product added successfully");
    } catch (err) {
      console.error("Error adding product:", err); // Log full error for debugging
      const errorMessage = err.response?.data?.message || "Failed to add product";
      toast.error(errorMessage);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add Product Form
        </h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Product ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Product Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Alternative Names</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Alternative Names (comma-separated)"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Images</label>
            <input
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              onChange={(e) => setImageFiles([...e.target.files])}
              multiple
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Price</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Last Price</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Last Price"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Stock</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Stock Quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Description</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}