import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdAdminPanelSettings } from 'react-icons/md';

const Header = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const toggleTheme = () => {
    if (themeMode == "light") darkTheme();
    else lightTheme();
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-300 dark:bg-gray-900 dark:text-gray-100 shadow-md flex justify-between items-center px-2 md:px-10 py-4 max-md:py-3 sticky w-full top-0 z-50 backdrop-blur-md"
    >
      <Link to="/">
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-3xl max-md:text-2xl font-extrabold max-md:font-semibold text-indigo-700 dark:text-white tracking-wide"
        >
          Chat App
        </motion.span>
      </Link>

      <div className="flex gap-4 sm:gap-6 text-base sm:text-xl">
        <Link to={'/login'}>
          <motion.button
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 max-md:px-2.5 max-md:py-1.5 py-2 border border-indigo-500 text-indigo-600 dark:text-indigo-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition duration-200"
        >
          Login
        </motion.button>
        </Link>

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          className="px-3 max-md:px-2 max-md:py-1 py-2 border bg-indigo-300 border-indigo-500 text-white dark:text-yellow-300 rounded-full hover:bg-blue-900 dark:hover:bg-yellow-800 transition duration-200"
        >
          {themeMode == "light" ? <FaMoon /> : <FaSun />}
        </motion.button>

        <Link to={'/admin'}>
          <motion.button
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 max-md:p-2 md:w-12 md:h-12 border bg-indigo-300 border-indigo-500 text-yellow-300 rounded-full hover:bg-blue-900 dark:hover:bg-yellow-800 transition duration-200"
        >
          <MdAdminPanelSettings size={25}/>
        </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
