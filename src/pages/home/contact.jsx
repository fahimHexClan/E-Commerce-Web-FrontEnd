import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 w-full flex justify-center">
        <h1 className="text-2xl font-bold text-blue-600">Contact Us</h1>
      </header>

      {/* Contact Information */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl text-center">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          We’re here to help! Reach out to us with any questions or concerns.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <FaPhone className="text-blue-600" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <FaEnvelope className="text-blue-600" />
            <span>support@mobilemart.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>123 Mobile Street, Tech City, USA</span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Send Us a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 mt-6 shadow-md w-full">
        <p className="text-gray-600">&copy; 2025 MobileMart. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
