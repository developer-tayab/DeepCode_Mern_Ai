import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import ServicesPage from "./pages/ServicesPage";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BugsFixerPage from "./pages/BugsFixerPage";
import CodeTransPage from "./pages/CodeTransPage";
import EditorPage from "./pages/EditorPage";
import ResumeAnalysis from "./pages/ResumeAnalysis";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-code-helper"
          element={
            <ProtectedRoute>
              {" "}
              <BugsFixerPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-code-runner"
          element={
            <ProtectedRoute>
              {" "}
              <EditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-code-translator"
          element={
            <ProtectedRoute>
              {" "}
              <CodeTransPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-interview-prep"
          element={
            <ProtectedRoute>
              {" "}
              <ResumeAnalysis />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
