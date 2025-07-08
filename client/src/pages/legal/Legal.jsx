import { Link } from "react-router";

export default function Legal() {
  const legalPages = [
    {
      title: "Privacy Policy",
      description:
        "Learn how we collect, use, and protect your personal information.",
      to: "/legal/privacy-policy",
    },
    {
      title: "Terms of Service",
      description:
        "The terms and conditions governing your use of our platform.",
      to: "/legal/terms-of-service",
    },
    {
      title: "DMCA Policy",
      description: "Our policy for handling copyright infringement claims.",
      to: "/legal/dmca",
    },
    {
      title: "Code of Conduct",
      description:
        "Guidelines for respectful and appropriate behavior on our platform.",
      to: "/legal/code-of-conduct",
    },
    {
      title: "Acceptable Use Policy",
      description: "Rules about what you can and cannot do on our platform.",
      to: "/legal/acceptable-use-policy",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Documents
          </h1>
          <p className="text-lg text-gray-600">
            Please review our legal documents to understand your rights and
            responsibilities when using our online auction platform.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {legalPages.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-500 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {page.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-blue-50 border border-blue-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Questions?
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            If you have any questions about our legal policies, please contact
            us using{" "}
            <Link to="/contact" className="text-blue-600 underline hover:text-blue-800">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}