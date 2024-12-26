import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/admin" element={<LoginPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
