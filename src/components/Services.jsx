import React from "react";
import { motion } from "framer-motion";
import video from "/feedback.mp4";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const services = [
  {
    title: "💬 Real-time AI Chat",
    description:
      "Engage with an intelligent chatbot in real time with smooth auto-scroll, typing indicators, and message history tracking.",
  },
  {
    title: "🎤 Voice Input",
    description:
      "Talk instead of type. Use your voice to interact with the chatbot instantly using built-in speech recognition.",
  },
  {
    title: "📊 Smart Analytics",
    description:
      "Visualize your chat trends, frequency, common keywords, and interaction history with beautifully designed charts.",
  },
];

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-16 max-md:py-10 px-4 md:px-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 grid grid-cols-3 max-md:grid-cols-2 my-10 max-md:my-5"
    >
      <motion.div
        variants={containerVariants}
        className="mb-16 col-span-2 w-[90%] max-md:w-full"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12"
        >
          🚀 What Makes This App Special?
        </motion.h3>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl border dark:border-gray-600 transition-transform shadow-xl"
            >
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl max-md:hidden mx-auto rounded-xl relative overflow-hidden object-cover shadow-lg border dark:border-gray-600"
      >
        <motion.video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default Services;
