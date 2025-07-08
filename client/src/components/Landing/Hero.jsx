import React from "react";
import { Link } from "react-router";

export const Hero = () => {
  return (
    <section className="bg-slate-50 pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
            The Future of
            <span className="text-teal-600 block">Online Auction</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover unique items, place competitive bids, and sell your
            treasures to a global audience. Join thousands of buyers and sellers
            in our trusted marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md transition">
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-white text-teal-700 border-2 border-teal-600 hover:bg-slate-100 px-8 py-3 rounded-xl font-semibold text-lg transition shadow-sm">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
