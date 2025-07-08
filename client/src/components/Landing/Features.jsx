import React from 'react'
import { FaClock, FaGavel, FaShieldAlt } from 'react-icons/fa'

export const Features = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a secure, user-friendly environment for all your auction needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGavel className="text-2xl text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Easy Bidding
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Place bids with confidence using our intuitive interface. Track
              your bids and get real-time updates on auction status.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Secure Transactions
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Your transactions are protected with industry-standard security
              measures. Buy and sell with complete peace of mind.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-2xl text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              24/7 Auctions
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Never miss an opportunity. Our platform runs around the clock,
              so you can bid and sell whenever it's convenient for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
