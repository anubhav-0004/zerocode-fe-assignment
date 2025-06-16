# 🧠 AI-Powered Chat & Analytics Dashboard

A **feature-rich modern web application** built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, **Chart.js**, and **React Speech Recognition**. This project demonstrates AI-like chatbot interaction, voice command input, user management, and powerful admin analytics, built as part of an assignment-based frontend project.

---

## ✨ Features

- ✅ Beautiful **landing page** with animated header, services, and feedback sections.
- 💬 **Chat page** with:
  - Text + voice input via `react-speech-recognition`
  - Smooth animated chat bubbles using `framer-motion`
  - File upload and user details
  - Dynamic dummy AI replies
- 📊 **Admin analytics page**:
  - **Line chart**: Messages over 7 days (`chart.js`)
  - **Doughnut chart**: Messages per user
  - **Responsive user table** using `@tanstack/react-table`
- 🎨 Fully responsive & dark mode ready
- 🧪 Animations powered by `framer-motion`

---

## 📂 Folder Structure

```bash
src/
│
├── pages/               # Main routes
│   ├── Analytics.jsx     # Admin analytics with charts & tables
│   ├── Chat.jsx          # Chat interface with dummy AI and voice input
│   ├── Home.jsx          # Landing page with services & testimonials
│   ├── Login.jsx         # Auth - login page
│   ├── Register.jsx      # Auth - register page
│   └── NoPage.jsx        # 404 fallback
│
├── components/          # UI components
│   ├── Header.jsx        # Navigation bar
│   ├── Footer.jsx        # Footer with social/contact info
│   ├── Services.jsx      # Features grid section
│   └── Feedback.jsx      # Testimonials carousel
│
├── context/
│   └── theme.js          # Light/dark theme toggle logic
│
└── assets/              # Images/videos used in UI
    └── (in public/)
