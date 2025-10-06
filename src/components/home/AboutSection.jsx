import React from "react";

const AboutSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About ShopEasy
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to ShopEasy, your one-stop destination for quality
              products at affordable prices. We're committed to providing you
              with the best shopping experience, from browsing to checkout.
            </p>
            <p className="text-gray-600 mb-6">
              With a wide range of products across various categories, we make
              it easy for you to find exactly what you're looking for. Our team
              carefully selects each product to ensure it meets our high
              standards of quality and value.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Quality Products
                  </h3>
                  <p className="text-sm text-gray-600">
                    Carefully selected items
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Quick shipping to your door
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Secure Payment
                  </h3>
                  <p className="text-sm text-gray-600">Safe transactions</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-first md:order-last ">
            <img
              src="https://cdn.shopify.com/s/files/1/0695/6397/3923/files/IMG_1_9ee5a9f1-374c-45b6-b5b9-757df454105d.png?v=1677133382"
              alt="About ShopEasy"
              className="rounded-lg shadow-lg w-[600px] h-[60vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
