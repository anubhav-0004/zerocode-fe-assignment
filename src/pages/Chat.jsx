import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaPaperPlane,
  FaPaperclip,
  FaUserCircle,
} from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const dummyResponses = [
  "That's interesting! 🤔",
  "Can you tell me more?",
  "I'm just a dummy AI for now! 🤖",
  "Working on understanding that...",
  "Okay! Let's continue.",
  "What would you like to do next?",
  "Thanks for asking!",
  "I can repeat that if you'd like.",
  "Hmm... Let me think on that.",
  "That's a great point!",
  "You're doing awesome! 👏",
  "This is fun, isn't it?",
  "Keep going, I'm listening.",
  "Did you mean something else?",
  "Let's solve this together!",
];

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" },
    { sender: "user", text: "Tell me about the weather." },
    { sender: "ai", text: "Sure! It looks sunny today ☀️" },
    { sender: "user", text: "Can you help with coding?" },
    { sender: "ai", text: "Absolutely! Ask away 💻" },
    { sender: "user", text: "How to center a div?" },
    { sender: "ai", text: "Use flexbox: justify-center and items-center." },
    { sender: "user", text: "Thanks!" },
    { sender: "ai", text: "You're welcome!" },
    { sender: "user", text: "What's your name?" },
    { sender: "ai", text: "I’m just a friendly bot 😊" },
    { sender: "user", text: "Are you smart?" },
    { sender: "ai", text: "I’m learning every day!" },
    { sender: "user", text: "Nice to meet you." },
    { sender: "ai", text: "Same here! ❤️" },
  ]);

  const [input, setInput] = useState("");
  const [isListening, setListening] = useState(false);
  const lastMessageRef = useRef(null);
  const messageBoxRef = useRef(null);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      setInput(transcript);
    }
  }, [transcript, listening]);

  const scrollToBottom = () => {
    const box = messageBoxRef.current;
    if (!box) return;

    const start = box.scrollTop;
    const end = box.scrollHeight - box.clientHeight;
    const duration = 1000;
    const startTime = performance.now();

    const animateScroll = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOut = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      box.scrollTop = start + (end - start) * easeInOut;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    const userInput = input.trim();
    if (!userInput) return;

    const newUserMsg = { sender: "user", text: userInput };
    const randomAIResponse = {
      sender: "ai",
      text:
        dummyResponses[Math.floor(Math.random() * dummyResponses.length)],
    };

    setMessages((prev) => [...prev, newUserMsg, randomAIResponse]);
    setInput("");
    resetTranscript();
  };

  const handleStartVoice = () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopVoice = () => {
    setListening(false);
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  return (
    <div className="overflow-hidden h-screen bg-gradient-to-br from-indigo-50 via-pink-200 to-purple-200 dark:from-gray-700 dark:to-gray-800 px-4 py-6 sm:px-10 flex flex-col">
      {isListening && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(99,102,241,0.3), transparent 70%)",
          }}
        />
      )}

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 flex items-center gap-4 mb-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md"
      >
        <FaUserCircle className="text-4xl text-indigo-600 dark:text-indigo-400" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Anubhav Mishra
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            anubhav@example.com
          </p>
        </div>
      </motion.div>

      <div
        ref={messageBoxRef}
        className="flex-1 overflow-y-auto bg-[#b3b8c0] dark:bg-gray-800 rounded-xl p-4 shadow-inner space-y-4 scroll-smooth"
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-[70%] px-4 w-fit py-3 rounded-xl break-words ${
              msg.sender === "user"
                ? "bg-indigo-500 text-white self-end ml-auto"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="z-10 flex sm:flex-row items-center gap-3 max-md:gap-1 pt-4">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="w-full max-md:w-[95%] px-4 max-md:px-2 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {isListening ? (
            <button
              onClick={handleStopVoice}
              className="absolute right-12 max-md:right-4 top-1/2 transform -translate-y-1/2 text-red-500 border p-2 rounded-full hover:scale-110"
              title="Stop voice input"
            >
              <FaMicrophoneSlash size={20} />
            </button>
          ) : (
            <button
              onClick={handleStartVoice}
              className="absolute right-12 max-md:right-4 top-1/2 transform -translate-y-1/2 text-indigo-600 border p-2 rounded-full dark:text-indigo-400 hover:scale-110"
              title="Start voice input"
            >
              <FaMicrophone size={20} />
            </button>
          )}
        </div>

        <div className="flex gap-3 max-md:gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-md"
            title="Send"
          >
            <FaPaperPlane />
          </motion.button>

          <input type="file" name="files" id="files" className="hidden" />
          <motion.label
            htmlFor="files"
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md cursor-pointer"
            title="Attach file"
          >
            <FaPaperclip />
          </motion.label>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
