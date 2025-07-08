import { Link } from "react-router";

export default function AuctionCard({ auction }) {
  const daysLeft = Math.ceil(auction.timeLeft / (1000 * 60 * 60 * 24));
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <img
          src={auction.itemPhoto || "https://picsum.photos/300"}
          alt={auction.itemName}
          className="object-contain w-full h-full"
        />
        <div className="absolute top-2 left-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {auction.itemCategory}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-slate-800">
          {auction.itemName}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {auction.itemDescription}
        </p>

        <div className="space-y-2 mb-5">
          <div className="flex justify-between text-sm text-slate-600">
            <span>Current Price:</span>
            <span className="font-semibold text-teal-600">
              ${auction.currentPrice || auction.startingPrice}
            </span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Bids:</span>
            <span className="font-semibold">{auction.bidsCount}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Time Left:</span>
            <span
              className={`font-semibold ${
                daysLeft > 0 ? "text-rose-600" : "text-slate-500"
              }`}
            >
              {daysLeft > 0 ? `${daysLeft} days` : "Ended"}
            </span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3">
          <p className="text-xs text-slate-500 mb-3">
            Seller: {auction?.sellerName || auction?.seller?.name}
          </p>
          <Link to={`/auction/${auction._id}`}>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-xl transition text-sm font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
