import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/users/google", {
          token: res.access_token,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token); 
          if (res.data.message == "User created") {
            toast.success(
              "Your account is created now you can login via google."
            );
          } else {
            localStorage.setItem("token", res.data.token);
            if (res.data && res.data.user && res.data.user.type === "admin") {
              window.location.href = "/admin";
              console.log("User Type:", res.data.user?.type);
            } else {
              window.location.href = "/Home";
            }
          }
        });
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Response:", res.data);
        if (!res.data.user) {
          toast.error(res.data.message);
          return;
        }

        toast.success("Login successful");
        localStorage.setItem("token", res.data.token);
        window.location.href = res.data.user.type === "admin" ? "/admin" : "/";
      })
      .catch((err) => {
        console.error("Axios Error:", err);
        toast.error("Login failed. Please try again.");
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="/shopping-online.jpg"
            alt="Logo"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={login}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
          <button
            onClick={() => {
              googleLogin();
            }}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg bg-white hover:bg-gray-100 transition duration-300 shadow-sm hover:shadow-md"
            >
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
}
