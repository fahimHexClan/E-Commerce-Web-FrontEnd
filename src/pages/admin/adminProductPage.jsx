import axios from "axios";
export default function AdminProductPage() {

  getProducts();
    return (
        <div>
            <h1>Admin Product Page</h1>
        </div>
    );
}
async function getProducts() {
    const response = await axios.get("http://localhost:5000/api/products");
    console.log(response);
}