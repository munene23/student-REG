import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentRegistration from "./StudentRegistration";
import LandingPage from "./LandingPage";
import "./App.css"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentRegistration />} />
        <Route path="/success" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
