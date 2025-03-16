import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create an Account</h2>
        <p className="text-gray-500 text-center">Join us today</p>

        <form className="mt-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="mt-4">
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
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mt-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/5 border-b"></span>
          <span className="text-xs text-gray-500 uppercase">Or sign up with</span>
          <span className="w-1/5 border-b"></span>
        </div>

        {/* Social Signup Options */}
        <div className="flex mt-4 space-x-2">
          <button className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Google
          </button>
          <button className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Facebook
          </button>
        </div>

        {/* Already have an account? */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
