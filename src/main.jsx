import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import KStaffPage from './components/KStaffPage'
import KStaffPageVersion2 from './components/KStaffPageVersion2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <KStaffPage /> */}
    <KStaffPageVersion2 />
  </StrictMode>,
)
