import { Link } from "react-router";
import { AdsComponent } from "../components/AdsComponent";
import { useSelector } from "react-redux";

export const About = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>

          <div className="prose max-w-none text-gray-700 space-y-10">
            <p className="text-lg">
              Welcome to our Online Auction Platform — a trusted destination where buyers and sellers connect to bid on a wide variety of items in real-time. Whether you're looking to discover great deals or list your own products for auction, our platform is designed to deliver a secure, intuitive, and engaging auction experience.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
              <p>
                We aim to make online auctions accessible, transparent, and efficient for everyone. Our platform empowers individuals and businesses to reach broader audiences, sell smarter, and bid confidently — all in one seamless environment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time bidding system with instant updates</li>
                <li>Verified sellers and secure payment options</li>
                <li>Wide range of categories — from electronics to collectibles</li>
                <li>Intuitive listing tools for sellers</li>
                <li>Responsive design for mobile, tablet, and desktop</li>
              </ul>
            </section>

            {!user && (
              <section className="mt-4">
                <AdsComponent dataAdSlot="1002244889" />
              </section>
            )}

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">How It Works</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create an account to start bidding or listing items</li>
                <li>Browse auctions and place bids in real time</li>
                <li>Highest bidder wins the item at auction close</li>
                <li>Secure checkout and delivery follow each successful bid</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Secure and Transparent</h2>
              <p>
                Our platform uses advanced security protocols and fraud detection to protect both buyers and sellers. Every bid, payment, and transaction is logged and monitored to ensure trust and fairness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Join Our Community</h2>
              <p>
                Thousands of users trust our auction system to buy and sell everyday. Whether you're a casual buyer, a serious collector, or a business owner — there's a place for you here. Sign up today and experience the future of online auctions.
              </p>
            </section>

            <div className="pt-8 mt-8 border-t border-gray-200">
              <p className="text-center">
                Questions or feedback?{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Contact our team
                </Link>{" "}
                — we're happy to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};