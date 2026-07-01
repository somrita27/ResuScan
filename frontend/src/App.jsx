import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import UploadResume from "./pages/UploadResume";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Result from "./pages/Result";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<UploadResume darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/profile" element={<Profile darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/history" element={<History darkMode={darkMode} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;