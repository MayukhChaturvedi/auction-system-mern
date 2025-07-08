import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white mb-1">
              Online Auction System
            </h3>
            <p className="text-gray-400">
              Your trusted marketplace since 2024
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
            <Link
              to="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/legal"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Legal
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © 2025 Online Auction System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};