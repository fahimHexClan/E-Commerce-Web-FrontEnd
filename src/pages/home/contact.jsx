import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br bg-gray-100 flex flex-col items-center p-8">
      {/* Header with Image */}
      <header className="w-full max-w-3xl text-center">
        <img
          src="https://cdn.pixabay.com/photo/2022/01/12/18/51/contact-us-6933645_1280.jpg"
          alt="Contact Us"
          className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
        />
        <h1 className="text-5xl font-extrabold text-blue-800 mt-6 tracking-wide drop-shadow-lg">Contact Us</h1>
      </header>

      {/* Contact Information */}
      <section className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl mt-12 w-full max-w-3xl text-center hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
        <p className="text-gray-600 mb-8 text-lg">
          We’d love to hear from you! Reach out for any inquiries or support.
        </p>
        <div className="space-y-6">
          {[
            { icon: FaPhone, text: "+1 234 567 890" },
            { icon: FaEnvelope, text: "support@mobilemart.com" },
            { icon: FaMapMarkerAlt, text: "123 Mobile Street, Tech City, USA" },
          ].map(({ icon: Icon, text }, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-4 text-gray-800 text-lg font-medium">
              <Icon className="text-blue-700" size={28} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl mt-12 w-full max-w-3xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Send Us a Message</h2>
        <form className="space-y-6">
          {[
            { type: "text", placeholder: "Your Name" },
            { type: "email", placeholder: "Your Email" },
          ].map(({ type, placeholder }, idx) => (
            <input
              key={idx}
              type={type}
              placeholder={placeholder}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg shadow-sm"
            />
          ))}
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg h-40 shadow-sm"
          ></textarea>
          <button className="w-full bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md text-center py-5 mt-12 shadow-md w-full max-w-3xl rounded-xl">
        <p className="text-gray-700 font-medium text-lg">&copy; 2025 MobileMart. All Rights Reserved.</p>
      </footer>
    </div>
  );
}