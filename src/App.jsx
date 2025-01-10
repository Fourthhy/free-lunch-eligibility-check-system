import KStaffPage from "./components/KStaffPage";
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Page from "./app/dashboard/page";
import Daily from "./app/app-contents/insights/Daily";
import Weekly from "./app/app-contents/insights/Weekly";
import Monthly from "./app/app-contents/insights/Monthly";
import Semestral from "./app/app-contents/insights/Semestral";
import BSISstudents from "./app/app-contents/Masterlist/BSISstudents";
import ACTstudents from "./app/app-contents/Masterlist/ACTstudents"
import Schedule from "./app/app-contents/Schedule";
import DailyOperation from "./app/app-contents/DailyOperation";
import ChangePassowrd from "./app/app-contents/ChangePassword";

function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/kstaff" element={<KStaffPage />} />
          <Route path="/adminPage/" element={<Page />}>
            <Route index element={<Daily />} />
            <Route path="/adminPage/insight" element={<Daily />} />
              <Route path="/adminPage/insights/daily" element={<Daily />} />
              <Route path="/adminPage/insights/weekly" element={<Weekly />} />
              <Route path="/adminPage/insights/monthly" element={<Monthly />} />
              <Route path="/adminPage/insights/semestral" element={<Semestral />} />
              <Route path="/adminPage/schedule" element={<Schedule />} />
              <Route path="/adminPage/masterlist/ACT-students" element={<ACTstudents />} />
              <Route path="/adminPage/masterlist/BSIS-students" element={<BSISstudents />} />
              <Route path="/adminPage/changePassword" element={<ChangePassowrd />} />
            <Route path="/adminPage/operation" element={<DailyOperation />} />
          </Route>
        </Routes>
        <Outlet />
      </Router>
    </>
  )
}

export default App
