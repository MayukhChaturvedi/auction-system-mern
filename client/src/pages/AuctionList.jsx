import { useState } from "react";
import AuctionCard from "../components/AuctionCard";
import { useQuery } from "@tanstack/react-query";
import { getAuctions } from "../api/auction";
import LoadingScreen from "../components/LoadingScreen";

export const AuctionList = () => {
  const [filter, setFilter] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["allAuction"],
    queryFn: getAuctions,
    staleTime: 30 * 1000,
  });

  if (isLoading) return <LoadingScreen />;

  const categories = [
    "all",
    ...new Set(data?.map((auction) => auction.itemCategory)),
  ];

  const filteredAuctions =
    filter === "all"
      ? data
      : data?.filter((auction) => auction.itemCategory === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Filter by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200 ease-in-out ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-400"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-y-2">
          <h2 className="text-xl font-bold text-gray-900">
            {filter === "all" ? "All Auctions" : `${filter} Auctions`}
          </h2>
          <span className="text-sm text-gray-500">
            {filteredAuctions.length} item{filteredAuctions.length !== 1 && "s"}
          </span>
        </div>

        {filteredAuctions.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-500 text-lg">
              No auctions found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAuctions.map((auction) => (
              <AuctionCard key={auction._id} auction={auction} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};