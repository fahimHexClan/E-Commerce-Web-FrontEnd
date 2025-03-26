export default function AboutUs() {
    return (
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
        {/* Header */}
        <header className="bg-white shadow-md py-4 px-6 w-full text-center">
          <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
        </header>
  
        {/* Content Section */}
        <section className="max-w-4xl mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
          <p className="mt-2 text-gray-600">
            Welcome to MobileMart, your go-to destination for the latest and greatest
            smartphones. Our mission is to provide high-quality mobile devices at
            competitive prices while ensuring an outstanding customer experience.
          </p>
        </section>
  
        <section className="max-w-4xl mt-6 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            We aim to be a leading provider of smartphones, offering a wide range of
            brands and models to suit every need. Our focus is on affordability,
            reliability, and customer satisfaction.
          </p>
        </section>
  
        <section className="max-w-4xl mt-6 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Wide range of top smartphone brands</li>
            <li>Competitive prices and great deals</li>
            <li>Excellent customer service</li>
            <li>Fast and secure delivery</li>
          </ul>
        </section>
  
        {/* Footer */}
        <footer className="bg-white text-center py-4 mt-6 shadow-md w-full">
          <p className="text-gray-600">&copy; 2025 MobileMart. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }