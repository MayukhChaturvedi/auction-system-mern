import { FaClock, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";
import { AdsComponent } from "../AdsComponent";

export const Auction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0 tracking-tight">
            🏷️ Live Auctions
          </h2>
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-800 font-medium text-lg inline-flex items-center transition"
          >
            View all <FaChevronRight className="ml-2 mt-0.5" />
          </Link>
        </div>

        {/* Auction Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Auction Item 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between">
            <div className="relative mb-4 rounded-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhv8qx1qy/image/upload/v1750644725/miekytfqgwnlj4jqai5k.png"
                alt="Vintage Camera"
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                <FaClock className="inline mr-1" />
                2h 15m
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
              🎥 Vintage Film Camera - Excellent Condition
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <div>
                <p>Current Bid</p>
                <p className="text-xl font-bold text-gray-900">$245.00</p>
              </div>
              <div className="text-right">
                <p>Bids</p>
                <p className="font-semibold">12</p>
              </div>
            </div>
            <Link to="/signup">
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-2 rounded-xl transition">
                Place Bid
              </button>
            </Link>
          </div>

          {/* Auction Item 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between">
            <div className="relative mb-4 rounded-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhv8qx1qy/image/upload/v1750644637/lk7l3ar3sptniptieyo3.png"
                alt="Antique Watch"
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                <FaClock className="inline mr-1" />
                5h 42m
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
              ⌚ Luxury Swiss Watch - Gold Plated
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <div>
                <p>Current Bid</p>
                <p className="text-xl font-bold text-gray-900">$1,250.00</p>
              </div>
              <div className="text-right">
                <p>Bids</p>
                <p className="font-semibold">28</p>
              </div>
            </div>
            <Link to="/signup">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-2 rounded-xl transition">
                Place Bid
              </button>
            </Link>
          </div>

          {/* Auction Item 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between">
            <div className="relative mb-4 rounded-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhv8qx1qy/image/upload/v1750644675/tatznfsoekfp3vsoeswd.png"
                alt="Art Painting"
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                <FaClock className="inline mr-1" />
                1d 3h
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
              🎨 Original Oil Painting - Abstract Art
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <div>
                <p>Current Bid</p>
                <p className="text-xl font-bold text-gray-900">$890.00</p>
              </div>
              <div className="text-right">
                <p>Bids</p>
                <p className="font-semibold">7</p>
              </div>
            </div>
            <Link to="/signup">
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 rounded-xl transition">
                Place Bid
              </button>
            </Link>
          </div>
        </div>

        {/* Ads */}
        <div className="mt-12">
          <AdsComponent dataAdSlot="5537585913" />
        </div>
      </div>
    </section>
  );
};
