import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 py-10 border-t-2"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h4 className="text-xl sm:text-2xl font-semibold">
          Made with 💙 by{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Anubhav</span>{" "}
          — ZeroCode Assignment 2025
        </h4>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5 justify-items-center text-sm sm:text-base">
          <a
            href="https://github.com/anubhav-0004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-500 transition-colors underline underline-offset-4"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anubhav-04-mishra/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors underline underline-offset-4"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="mailto:2003anubhav@gmail.com"
            className="flex items-center gap-2 hover:text-pink-600 transition-colors underline underline-offset-4"
          >
            <FaEnvelope size={18} />
            2003anubhav@gmail.com
          </a>

          <a
            href="tel:+919956904188"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors underline underline-offset-4"
          >
            <FaPhoneAlt size={16} />
            +91-9956904188
          </a>

          <a
            href="https://anubhav-0004-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-500 transition-colors underline underline-offset-4"
          >
            <FaGlobe size={18} />
            Portfolio
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
