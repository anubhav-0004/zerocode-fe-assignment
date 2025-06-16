import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next & Prev Arrows
const Arrow = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} z-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-1 shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.5rem",
      width: "3rem",
      height: "3rem",
    }}
    onClick={onClick}
    aria-label={direction}
  />
);

const feedbacks = [
  {
    name: "Rohan Sharma",
    role: "Frontend Developer",
    comment:
      "The chatbot interface is incredibly smooth and user-friendly. Loved the voice feature!",
    image:
      "https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg",
  },
  {
    name: "Priya Mehta",
    role: "AI Enthusiast",
    comment:
      "Analytics dashboard is a game-changer. Great work integrating charts and usability!",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmUxZTcyM2MtM2IyZi00NjVkLTk1ZGQtMzdkZjZmMjMxNDg4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Aanya Gupta",
    role: "UI/UX Designer",
    comment:
      "The dark mode is beautiful. The whole experience feels modern and polished.",
    image:
      "https://cdn.prod.website-files.com/65b300512ced7cf5a4ad20ab/65f0284d5e7bf114d1d6830c_Katherine%20Langford.jpg",
  },
  {
    name: "Sahil Verma",
    role: "Data Engineer",
    comment:
      "The real-time responses and UI performance are top-notch. Kudos to the dev!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2NgTLaAhwax8ADJoioSGTcwDMAJFKF3leg&s",
  },
];

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 px-4 sm:px-20">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white"
      >
        💬 What People Are Saying
      </motion.h3>

      <Slider {...settings} className="max-w-6xl mx-auto">
        {feedbacks.map((fb, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-indigo-200 dark:bg-gray-700"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border dark:border-gray-700 transition-all duration-300 h-full flex max-md:flex-col gap-6 items-center">
              <img
                src={fb.image}
                alt={fb.name}
                className="w-32 h-32 object-cover rounded-full shadow-md border-2 border-indigo-500"
              />

              <div className="flex flex-col justify-between text-left">
                <p className="text-base text-gray-700 dark:text-gray-300 italic mb-4">
                  “{fb.comment}”
                </p>
                <div className="text-right mt-auto">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {fb.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {fb.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default Feedback;
