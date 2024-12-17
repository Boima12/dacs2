import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import Co_account from './pages/account/account.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* basename="/dacs2/" */}
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/pages/account" element={<Co_account />} />
        {/* <Route path="/pages/page2" element={<Co_Page2 />} /> */}

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
