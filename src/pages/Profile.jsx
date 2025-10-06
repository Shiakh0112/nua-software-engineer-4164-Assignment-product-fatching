import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Account Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Name</p>
            <p className="font-medium">{user?.name}</p>
          </div>
          <div>
            <p className="text-gray-600">Email</p>
            <p className="font-medium">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Links
        </h2>
        <div className="space-y-2">
          <Link
            to="/orders"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition"
          >
            My Orders
          </Link>
          <Link
            to="/wishlist"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition"
          >
            Wishlist
          </Link>
          <Link
            to="/settings"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition"
          >
            Account Settings
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Orders
        </h2>
        <p className="text-gray-600">You haven't placed any orders yet.</p>
        <Link
          to="/products"
          className="inline-block mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default Profile;
