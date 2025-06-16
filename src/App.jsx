import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatPage from "./pages/Chat";
import Analitics from "./pages/Analitics";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/admin" element={<Analitics />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
