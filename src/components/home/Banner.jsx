import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-white opacity-10 rounded-full -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />

      {/* Banner Content */}
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Summer Sale is Here!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Enjoy up to{" "}
            <span className="font-semibold text-yellow-300">50% OFF</span> on
            top-quality products. Don’t miss out — shop your favorites before
            they’re gone!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
