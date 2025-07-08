import { useQuery } from "@tanstack/react-query";
import { loginHistory } from "../api/user";
import LoadingScreen from "../components/LoadingScreen";
import { Link } from "react-router";
import { CiCalendar, CiGlobe, CiMapPin, CiServer, CiMonitor } from "react-icons/ci";

export default function Privacy() {
  const { data, isLoading } = useQuery({
    queryFn: loginHistory,
    queryKey: ["userLogins"],
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <main className="p-4 sm:p-6 lg:p-8 mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            Privacy & Security
          </h1>
          <p className="text-slate-500 pb-4">
            View your login history and security settings
          </p>

          {data && (
            <div className="flex flex-col gap-4">
              {data.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-md border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3">
                    <InfoRow icon={<CiCalendar />} label="Date & Time" value={entry.dateTime} />
                    <InfoRow icon={<CiGlobe />} label="IP Address" value={entry.ipAddress} />
                    <InfoRow icon={<CiMapPin />} label="Location" value={entry.location} />
                    <InfoRow icon={<CiServer />} label="ISP" value={entry.isp} />
                    <InfoRow icon={<CiMonitor />} label="Device" value={entry.device} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Security Settings */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Security Settings
          </h2>
          <div className="bg-white border border-slate-200 rounded-md divide-y divide-slate-200 shadow-sm">
            {/* 2FA */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-900">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Add an extra layer of security by requiring a verification code.
                  </p>
                </div>
                <button
                  disabled
                  className="ml-4 px-4 py-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-md disabled:bg-teal-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Enable
                </button>
              </div>
            </div>

            {/* Password Change */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-900">
                    Password
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Change your password
                  </p>
                </div>
                <Link
                  to="/profile"
                  className="ml-4 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  Change
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper component for each login info row
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center">
      <span className="text-slate-500 mr-2">{icon}</span>
      <span className="text-sm font-medium text-slate-900">{label}:</span>
      <span className="ml-2 text-sm text-slate-700 truncate">{value}</span>
    </div>
  );
}
