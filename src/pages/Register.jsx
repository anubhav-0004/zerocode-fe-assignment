import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    if (
      formData.username != "" &&
      formData.email != "" &&
      formData.password == formData.confirmPassword
    ) {
      setError(false);
      console.log("Register data:", formData);
      navigate("/");
      localStorage.setItem("token", "User");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <span className="absolute -top-1 left-16 text-red-600 text-lg">
              *
            </span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <span className="absolute -top-1 left-[5.7rem] text-red-600 text-lg">
              *
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <span className="absolute -top-1 left-[3.85rem] text-red-600 text-lg">
              *
            </span>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <span className="absolute -top-1 left-[7.35rem] text-red-600 text-lg">
              *
            </span>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>
          {error && (
            <div className="text-xs text-red-500 -mt-3 mb-0">
              Mismatch Password and confirmPassword.
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Register
          </motion.button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Login here
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Register;
