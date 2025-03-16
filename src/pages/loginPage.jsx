import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Welcome Back</h2>
        <p className="text-gray-500 text-center">Sign in to your account</p>

        <form className="mt-6">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mt-2">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/5 border-b"></span>
          <span className="text-xs text-gray-500 uppercase">Or continue with</span>
          <span className="w-1/5 border-b"></span>
        </div>

        {/* Social Login Options */}
        <div className="flex mt-4 space-x-2">
          <button className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Google
          </button>
          <button className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Facebook
          </button>
        </div>

        {/* Sign Up Button - Navigates to Signup Page */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
