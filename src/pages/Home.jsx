import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import cover from "/cover.jpg";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Feedback from "../components/FeedBack";

const Home = () => {
  const containerRef = useRef();
  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300"
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed h-1 w-full bg-gradient-to-l  from-indigo-500 via-purple-400 to-pink-400 z-50"
      />
      <div className="relative h-[85vh] max-md:h-[100vh] overflow-hidden">
        <img
          src={cover}
          alt="cover"
          className="w-full h-full object-cover dark:brightness-60 opacity-90"
        />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/4 md:mt-10 left-1/2 transform -translate-x-1/2 text-center w-4/5 sm:w-3/5"
        >
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Chat Smarter, Not Harder 🤖
          </motion.h2>
          <motion.p className="text-lg sm:text-xl text-gray-200">
            Experience real-time conversations, voice input, and chat analytics
            in one powerful app.
          </motion.p>

          <div className="mt-6 flex justify-center gap-6">
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-600 text-white px-6 max-md:px-3 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="/chat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-indigo-700 px-6 max-md:px-3 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Try Demo Chat
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      <Services /> 
      <Feedback />     
      <Footer />    
    </div>
  );
};

export default Home;
