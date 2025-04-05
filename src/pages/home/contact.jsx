import React from "react";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react";


export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 md:px-8">
      {/* Hero Section with Image */}
      <div className="w-full max-w-7xl mb-16 relative">
        <div className="w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2022/01/12/18/51/contact-us-6933645_1280.jpg" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50 flex items-center">
            <div className="px-8 md:px-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-white/90 max-w-lg text-lg">
                We're here to help. Reach out to our team for any inquiries or assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 mb-16">
        {/* Contact Information Card */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <div className="bg-blue-600 px-6 py-8 text-white">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="mt-2 text-blue-100">
                Reach out to us through any of these channels
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 234-5678</p>
                    <p className="text-gray-600">Customer Service: 1-800-MOBILEMART</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">info@mobilemart.com</p>
                    <p className="text-gray-600">support@mobilemart.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600 mt-1">123 Business Avenue</p>
                    <p className="text-gray-600">Corporate Plaza, Suite 500</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Clock className="text-blue-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  I agree to the privacy policy and terms of service
                </label>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <p className="text-sm">We typically respond to all inquiries within 24-48 business hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
      
      {/* FAQ Section */}
      <div className="w-full max-w-7xl mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find quick answers to common questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "What are your business hours?",
              answer: "Our business hours are Monday through Friday from 9:00 AM to 6:00 PM, Saturday from 10:00 AM to 4:00 PM, and we are closed on Sundays."
            },
            {
              question: "How quickly can I expect a response?",
              answer: "We strive to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our customer service line."
            },
            {
              question: "Do you offer international shipping?",
              answer: "Yes, we ship to most international destinations. Shipping rates and delivery times vary by location. Please contact us for specific details."
            },
            {
              question: "What is your return policy?",
              answer: "We offer a 30-day return policy for most products. Items must be in their original condition with all packaging and accessories included."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full max-w-7xl py-6 border-t border-gray-200 text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} MobileMart. All rights reserved.</p>
      </footer>
    </div>
  );
}