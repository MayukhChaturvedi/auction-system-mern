/* eslint-disable react/prop-types */
import { useState } from "react";

const DialogBox = ({ onConfirm, onCancel }) => {
  const [confirming, setConfirming] = useState(false);

  const handleConfirm = () => {
    setConfirming(true);
    onConfirm();
  };

  const handleCancel = () => {
    setConfirming(false);
    onCancel();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center w-full">
        <div className="bg-white rounded-2xl w-full max-w-md mx-auto p-6 md:relative shadow-xl z-50 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full shadow-sm">
              <i className="text-3xl">&#9888;</i>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-lg font-bold text-gray-800">Warning!</h2>
              <p className="text-sm text-gray-600 mt-1">
                You will lose all of your data by deleting your account. This action cannot be undone.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse md:flex-row md:justify-end gap-3">
            <button
              id="confirm-cancel-btn"
              className="w-full md:w-auto px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium text-sm transition-colors"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              id="confirm-delete-btn"
              className={`w-full md:w-auto px-4 py-2 ${
                confirming ? "bg-red-500" : "bg-red-600 hover:bg-red-700"
              } text-white rounded-lg font-medium text-sm transition-colors`}
              onClick={handleConfirm}
            >
              {confirming ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;