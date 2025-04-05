import React from "react";
import { MapPin, Clock, Phone, ArrowRight, Mail, Award, Shield, Truck } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Header Section */}
      <div className="max-w-7xl w-full mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">About MobileMart</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          Your trusted partner in mobile technology since 2010
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-2/5">
            <img
              src="https://img.freepik.com/premium-photo/mobile-phone-represent-shopping-online-website-mobile-application-screen-concept-marketing-digital-marketing-colors-pastel-with-communication-bar-statistics-bar-3d-rendering_1226542-4361.jpg?w=996"
              alt="MobileMart Headquarters"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-3/5 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Excellence in Mobile Technology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MobileMart is a leading provider of premium mobile devices and solutions. Founded with a commitment to quality and customer satisfaction, we have established ourselves as an industry leader through our dedication to excellence and innovation.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our team of industry experts carefully selects each product in our inventory, ensuring that we offer only the highest quality devices that meet our rigorous standards. We pride ourselves on providing personalized service and expert advice to help you make informed decisions about your technology needs.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">12+</p>
                <p className="text-gray-600 text-sm mt-1">Years of Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50k+</p>
                <p className="text-gray-600 text-sm mt-1">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">100%</p>
                <p className="text-gray-600 text-sm mt-1">Quality Assurance</p>
              </div>
            </div>

            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors inline-flex items-center">
              Learn More About Our Services
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl w-full my-16">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="text-blue-600" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
            <p className="text-gray-600">We maintain rigorous standards and partnerships with leading manufacturers to ensure premium quality products.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="text-blue-600" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Trust</h3>
            <p className="text-gray-600">Building long-term relationships through transparency, integrity, and exceptional customer service.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Truck className="text-blue-600" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Service</h3>
            <p className="text-gray-600">From purchase through after-sales support, we deliver dependable service and swift resolution to any concerns.</p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-8 py-6">
          <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="p-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600">1234 Business Avenue</p>
                <p className="text-gray-600">Corporate Plaza, Suite 500</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-start gap-4">
              <Clock className="text-blue-600 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Details</h3>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600">Toll-Free: 1-800-MOBILE-MART</p>
                <div className="flex items-center gap-2 text-blue-600 mt-2">
                  <Mail size={16} />
                  <a href="mailto:info@mobilemart.com" className="hover:underline">info@mobilemart.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl w-full mt-16 bg-gray-900 p-12 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Ready to Experience Premium Mobile Solutions?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Schedule a consultation with our product specialists or visit our showroom to explore our extensive collection.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
          <button className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white hover:text-gray-900 transition-colors">
            Visit Showroom
          </button>
        </div>
      </div>
    </div>
  );
}