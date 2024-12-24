import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import Co_account from './pages/account/account.jsx';
import Co_entry from '~/src/pages/account/entry/entry.jsx';
import Co_registering from '~/src/pages/account/entry/registering/registering.jsx';
import Co_accountSettings from '~/src/pages/account/accountSettings/accountSettings.jsx';

import Co_admin from '~/src/pages/admin/admin.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* basename="/dacs2/" */}
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/pages/account" element={<Co_account />} />
        <Route path="/pages/account/entry" element={<Co_entry />} />
        <Route path="/pages/account/entry/registering" element={<Co_registering />} />
        <Route path="/pages/account/accountSettings" element={<Co_accountSettings />} />

        <Route path="/pages/admin" element={<Co_admin />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
