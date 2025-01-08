import KStaffPage from "./components/KStaffPage";
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Page from "./app/dashboard/page";
import Daily from "./app/app-contents/insights/Daily";
import Weekly from "./app/app-contents/insights/Weekly";
import BSISstudents from "./app/app-contents/Masterlist/BSISstudents";
import ACTstudents from "./app/app-contents/Masterlist/ACTstudents"
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
            <Route index element={<Daily />} />
            <Route path="/adminPage/insight" element={<Weekly />} />
            <Route path="/adminPage/schedule" element={<Schedule />} />
              <Route path="/adminPage/masterlist/ACT-students" element={<ACTstudents />} />
              <Route path="/adminPage/masterlist/BSIS-students" element={<BSISstudents />} />
            <Route path="/adminPage/operation" element={<DailyOperation />} />
          </Route>
        </Routes>
        <Outlet />
      </Router>
    </>
  )
}

export default App
