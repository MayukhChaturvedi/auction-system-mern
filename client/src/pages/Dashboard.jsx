import AuctionCard from "../components/AuctionCard.jsx";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { dashboardStats } from "../api/auction.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: () => dashboardStats(),
    staleTime: 30 * 1000,
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-sm font-medium text-slate-500">
              Total Auctions
            </h3>
            <p className="text-2xl font-bold text-slate-900 mt-1">
              {data.totalAuctions}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-sm font-medium text-slate-500">
              Active Auctions
            </h3>
            <p className="text-2xl font-bold text-emerald-600 mt-1">
              {data.activeAuctions}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-sm font-medium text-slate-500">
              Your Auctions
            </h3>
            <p className="text-2xl font-bold text-teal-600 mt-1">
              {data.userAuctionCount}
            </p>
          </div>
        </div>

        {/* All Auctions Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              All Auctions
            </h2>
            <Link
              to="/auction"
              className="text-teal-600 hover:text-teal-700 font-medium text-sm hover:underline"
            >
              View More
            </Link>
          </div>

          {data.latestAuctions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-md border border-slate-100">
              <p className="text-slate-500 text-lg">
                No auctions available at the moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
              {data.latestAuctions.map((auction) => (
                <AuctionCard key={auction._id} auction={auction} />
              ))}
            </div>
          )}
        </section>

        {/* Your Auctions Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Your Auctions
            </h2>
            <Link
              to="/myauction"
              className="text-teal-600 hover:text-teal-700 font-medium text-sm hover:underline"
            >
              View More
            </Link>
          </div>

          {data.latestUserAuctions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-md border border-slate-100">
              <p className="text-slate-500 text-lg">
                You haven&apos;t created any auctions yet.
              </p>
              <Link to="/create">
                <button className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors font-medium">
                  Create Your First Auction
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
              {data.latestUserAuctions.map((auction) => (
                <AuctionCard key={auction._id} auction={auction} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
