import { useState } from "react";

export default function ImageSlider({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full aspect-square flex flex-col items-center relative">
      {/* Main Image */}
      <div className="relative w-full aspect-square">
        <img
          src={images[activeImage]}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out shadow-md"
        />
        {/* Navigation Buttons */}
        <button
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
          onClick={prevImage}
        >
          ◀
        </button>
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
          onClick={nextImage}
        >
          ▶
        </button>
      </div>

      {/* Thumbnail Selector */}
      <div className="w-full flex justify-center mt-3 gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            onClick={() => setActiveImage(index)}
            className={`w-16 h-16 object-cover cursor-pointer rounded-lg border-2 ${
              activeImage === index ? "border-blue-500 scale-110" : "border-gray-300"
            } transition-transform duration-200`}
          />
        ))}
      </div>
    </div>
  );
}
