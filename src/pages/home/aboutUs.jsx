import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-brbg-gray-100 flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Header Section */}
      <div className="max-w-7xl w-full bg-white p-12 shadow-2xl rounded-2xl flex flex-col md:flex-row items-center gap-12 transform transition duration-500 hover:scale-105">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Welcome to <span className="text-blue-600 font-semibold">MobileMart</span>, your premier destination for the latest in smartphones and cutting-edge technology.
            We strive to offer unparalleled quality and customer service in every interaction.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            Contact Us <ArrowRight size={20} />
          </button>
        </div>
        <div className="flex-1">
          <img 
            src="https://img.freepik.com/premium-photo/mobile-phone-represent-shopping-online-website-mobile-application-screen-concept-marketing-digital-marketing-colors-pastel-with-communication-bar-statistics-bar-3d-rendering_1226542-4361.jpg?w=996"
            alt="About MobileMart"
            className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="max-w-7xl w-full mt-12 bg-white p-8 shadow-xl rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 transform transition duration-500 hover:scale-105">
  {/* Location */}
  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
    <MapPin className="text-blue-600" size={32} />
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
      <p className="text-gray-600">1234 Street Name, City, Country</p>
    </div>
  </div>
  
  {/* Working Hours */}
  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-50 to-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
    <Clock className="text-blue-600" size={32} />
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
      <p className="text-gray-600">Mon-Fri: 9 AM - 6 PM</p>
    </div>
  </div>

  {/* Contact Number */}
  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition transform duration-300 ease-in-out hover:scale-105">
    <Phone className="text-blue-600" size={32} />
    <div>
      <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
      <p className="text-gray-600">+123 456 7890</p>
    </div>
  </div>

        
      </div>
    </div>
  );
}
