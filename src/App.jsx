import KStaffPage from "./components/KStaffPage";
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./app/dashboard/page";


function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/admin" element={<LoginPage />}/>
          <Route path="/kstaff" element={<KStaffPage />}/>
          <Route path="/adminPage" element={<Page />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
