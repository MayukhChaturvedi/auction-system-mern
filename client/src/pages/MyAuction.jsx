import { useState } from "react";
import AuctionCard from "../components/AuctionCard";
import { useQuery } from "@tanstack/react-query";
import { getMyAuctions } from "../api/auction";
import LoadingScreen from "../components/LoadingScreen";

export const MyAuction = () => {
  const [filter, setFilter] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["myauctions"],
    queryFn: getMyAuctions,
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
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">
            Filter by Category
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-teal-600 text-white"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            {filter === "all" ? "My All Auctions" : `${filter} Auctions`}
            <span className="text-sm font-normal text-slate-500 ml-2">
              ({filteredAuctions.length} items)
            </span>
          </h2>
        </div>

        {/* Auction Cards */}
        {filteredAuctions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No auctions found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 place-items-center gap-6">
            {filteredAuctions.map((auction) => (
              <AuctionCard key={auction._id} auction={auction} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
