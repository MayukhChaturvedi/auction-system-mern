import { useState, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction } from "../api/auction.js";
import { useNavigate } from "react-router";

export const CreateAuction = () => {
  const fileInputRef = useRef();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    itemCategory: "",
    startingPrice: "",
    itemStartDate: "",
    itemEndDate: "",
    itemPhoto: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createAuction,
    onSuccess: (data) => {
      setFormData({
        itemName: "",
        itemDescription: "",
        itemCategory: "",
        startingPrice: "",
        itemStartDate: "",
        itemEndDate: "",
        itemPhoto: "",
      });
      setError("");
      queryClient.invalidateQueries({ queryKey: ["viewAuctions"] });
      queryClient.invalidateQueries({ queryKey: ["allAuction"] });
      queryClient.invalidateQueries({ queryKey: ["myauctions"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      navigate(`/auction/${data.newAuction._id}`);
    },
    onError: (error) =>
      setError(error?.response?.data?.message || "Something went wrong"),
  });

  const categories = [
    "Electronics", "Antiques", "Art", "Books", "Clothing", "Collectibles",
    "Home & Garden", "Jewelry", "Musical Instruments", "Sports", "Toys", "Vehicles", "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024);
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed.");
        return;
      }
      if (fileSizeMB > 5) {
        setError(`File size must be less than 5 MB.`);
        return;
      }
      setFormData((prev) => ({ ...prev, itemPhoto: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.itemPhoto) {
      setError("Please upload an image.");
      return;
    }
    const start = new Date(formData.itemStartDate);
    const end = new Date(formData.itemEndDate);
    if (end <= start) {
      setError("End date must be after start date.");
      return;
    }
    mutate(formData);
  };

  const today = new Date().toISOString().split("T")[0];
  const maxStart = new Date(); maxStart.setDate(maxStart.getDate() + 15);
  const maxStartDate = maxStart.toISOString().split("T")[0];

  let maxEndDate = "";
  if (formData.itemStartDate) {
    const end = new Date(formData.itemStartDate);
    end.setDate(end.getDate() + 15);
    maxEndDate = end.toISOString().split("T")[0];
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100">
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Item Name */}
              <div>
                <label htmlFor="itemName" className="block text-sm font-medium text-slate-700 mb-2">
                  Item Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text" id="itemName" name="itemName" value={formData.itemName}
                  onChange={handleInputChange} required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  placeholder="Enter the name of your item"
                />
              </div>

              {/* Item Description */}
              <div>
                <label htmlFor="itemDescription" className="block text-sm font-medium text-slate-700 mb-2">
                  Item Description <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="itemDescription" name="itemDescription" rows={4}
                  value={formData.itemDescription}
                  onChange={handleInputChange} required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-vertical outline-none"
                  placeholder="Describe your item in detail"
                />
              </div>

              {/* Category & Starting Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="itemCategory" className="block text-sm font-medium text-slate-700 mb-2">
                    Category <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="itemCategory" name="itemCategory" required
                    value={formData.itemCategory} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="startingPrice" className="block text-sm font-medium text-slate-700 mb-2">
                    Starting Price ($) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="number" id="startingPrice" name="startingPrice" min="1" step="1" required
                    value={formData.startingPrice} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="0.0"
                  />
                </div>
              </div>

              {/* Start & End Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="itemStartDate" className="block text-sm font-medium text-slate-700 mb-2">
                    Auction Start Date <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="date" id="itemStartDate" name="itemStartDate"
                    min={today} max={maxStartDate} required
                    value={formData.itemStartDate} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="itemEndDate" className="block text-sm font-medium text-slate-700 mb-2">
                    Auction End Date <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="date" id="itemEndDate" name="itemEndDate" required
                    min={formData.itemStartDate} max={maxEndDate}
                    value={formData.itemEndDate} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>
              </div>

              {/* Item Photo Upload */}
              <div>
                <label htmlFor="itemPhoto" className="block text-sm font-medium text-slate-700 mb-2">
                  Item Photo <span className="text-rose-600">*</span>
                </label>
                <input
                  type="file" id="itemPhoto" name="itemPhoto" ref={fileInputRef}
                  accept="image/*" onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 file:rounded-md file:bg-sky-100 file:text-sky-800 file:font-medium hover:file:bg-sky-200"
                />
                {formData.itemPhoto && (
                  <div className="mt-4">
                    <p className="text-sm text-slate-500 mb-1">Preview:</p>
                    <img
                      src={URL.createObjectURL(formData.itemPhoto)}
                      alt="Preview"
                      className="w-32 h-32 object-cover border border-slate-300 rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, itemPhoto: "" }));
                        fileInputRef.current.value = "";
                      }}
                      className="mt-2 text-sm text-rose-600 hover:underline"
                    >
                      Remove Image
                    </button>
                  </div>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-md">
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="flex justify-end pt-6 border-t border-slate-100">
                <button
                  type="submit" disabled={isPending}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? "Creating Auction..." : "Create Auction"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <HelpSection />
      </main>
    </div>
  );
};

export const HelpSection = () => {
  return (
    <div className="mt-8 bg-sky-50 border border-sky-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-sky-800 mb-3">
        Tips for Creating a Successful Auction
      </h3>
      <ul className="space-y-2 text-sky-700 text-sm">
        <li className="flex items-start">
          <span className="text-sky-600 mr-2">•</span>
          Use clear, high-quality photos that show your item from multiple angles
        </li>
        <li className="flex items-start">
          <span className="text-sky-600 mr-2">•</span>
          Write detailed descriptions including condition, dimensions, and any flaws
        </li>
        <li className="flex items-start">
          <span className="text-sky-600 mr-2">•</span>
          Set a reasonable starting price to attract bidders
        </li>
        <li className="flex items-start">
          <span className="text-sky-600 mr-2">•</span>
          Choose appropriate auction duration (3-7 days typically work best)
        </li>
        <li className="flex items-start">
          <span className="text-sky-600 mr-2">•</span>
          Select the most accurate category to help buyers find your item
        </li>
      </ul>
    </div>
  );
};
