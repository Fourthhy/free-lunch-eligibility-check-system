import KStaffPage from "./components/KStaffPage";
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Page from "./app/dashboard/page";
import Insights from "./app/app-contents/Insights";
import Masterlist from "./app/app-contents/Masterlist";
import Schedule from "./app/app-contents/Schedule";
import DailyOperation from "./app/app-contents/DailyOperation";


function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/kstaff" element={<KStaffPage />} />
          <Route path="/adminPage/" element={<Page />}>
            <Route index element={<Insights />} />
            <Route path="/adminPage/insight" element={<Insights />} />
            <Route path="/adminPage/schedule" element={<Schedule />} />
            <Route path="/adminPage/masterlist" element={<Masterlist />} />
            <Route path="/adminPage/operation" element={<DailyOperation />} />
          </Route>
        </Routes>
        <Outlet />
      </Router>
    </>
  )
}

export default App
