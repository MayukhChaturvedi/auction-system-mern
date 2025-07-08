import { Link } from "react-router";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 sm:p-10 bg-white rounded-2xl shadow-sm border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy describes how our online auction platform ("we," "our," or "us") collects, uses, and protects your information when you use our service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Payment information</li>
                <li>Shipping addresses</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>IP address</li>
                <li>Device operating system</li>
                <li>Device type (mobile, desktop, tablet)</li>
                <li>Browser information</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To provide and maintain our auction services</li>
              <li>To process transactions and payments</li>
              <li>To communicate with you about your account and transactions</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To improve our services and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services. Technical information such as IP addresses and device details are kept for 6 months for security purposes, after which they are automatically deleted.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us using{" "}
              <Link to="/contact" className="text-blue-600 underline hover:text-blue-800">
                contact page
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}