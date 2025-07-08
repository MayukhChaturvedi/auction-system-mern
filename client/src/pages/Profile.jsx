import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../api/user";
import { CiMail, CiUser, CiLock, CiCamera } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [isError, setIsError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => changePassword(formData),
    onSuccess: () => {
      setSuccessMessage("Password Changed Successfully");
      setTimeout(() => setSuccessMessage(""), 10000);
      setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    },
    onError: (error) => {
      setIsError(error?.response?.data?.error || "Something went wrong");
      setTimeout(() => setIsError(""), 10000);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = formData;
    if (!currentPassword || !newPassword || !confirmPassword) {
      setIsError("Please enter all fields");
      setTimeout(() => setIsError(""), 10000);
      return;
    }
    if (newPassword !== confirmPassword) {
      setIsError("New password and confirm password do not match.");
      setTimeout(() => setIsError(""), 10000);
      return;
    }
    mutate(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
            <p className="text-slate-500">Update your personal information and password</p>
          </div>

          {successMessage && (
            <div className="mb-6 bg-teal-50 border-l-4 border-teal-400 p-4 rounded-md">
              <div className="flex items-center text-teal-700 text-sm">{successMessage}</div>
            </div>
          )}

          <div className="bg-white shadow border border-slate-200 rounded-md">
            {/* Profile Info */}
            <div className="px-4 py-5 sm:px-6 border-b border-slate-200">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="relative mb-4 sm:mb-0">
                  <img
                    src={user.user.avatar}
                    alt="User avatar"
                    className="h-20 w-20 rounded-full bg-slate-200 mx-auto sm:mx-0"
                  />
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-slate-300 shadow-sm">
                    <CiCamera className="h-4 w-4 text-slate-500" />
                  </button>
                </div>
                <div className="ml-0 sm:ml-4 text-center sm:text-left">
                  <h2 className="text-lg font-medium text-slate-900">{user.user.name}</h2>
                  <p className="text-sm text-slate-500">{user.user.email}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="divide-y divide-slate-200">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 gap-6">
                  {/* Name */}
                  <InputField
                    icon={<CiUser />}
                    label="Full Name"
                    name="name"
                    value={user.user.name}
                    disabled
                  />
                  {/* Email */}
                  <InputField
                    icon={<CiMail />}
                    label="Email Address"
                    name="email"
                    type="email"
                    value={user.user.email}
                    disabled
                  />
                </div>
              </div>

              {/* Password Section */}
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Change Password</h3>
                <div className="grid grid-cols-1 gap-6">
                  <InputField
                    icon={<CiLock />}
                    label="Current Password"
                    name="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    placeholder="Enter your current password"
                  />
                  <InputField
                    icon={<CiLock />}
                    label="New Password"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    helper="Password must be at least 8 characters long"
                    minLength={8}
                  />
                  <InputField
                    icon={<CiLock />}
                    label="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                  />

                  {/* Error */}
                  {isError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      {isError}
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    disabled
                    className="px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

// Reusable Input Field Component
function InputField({ icon, label, name, value, onChange, placeholder, type = "text", disabled, helper, minLength }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          minLength={minLength}
          className={`block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm ${
            disabled ? "bg-slate-100 text-slate-400" : "bg-white"
          }`}
          placeholder={placeholder}
        />
      </div>
      {helper && <p className="mt-1 text-xs text-slate-500">{helper}</p>}
    </div>
  );
}
