// Libraries
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { sineWaveSigninPath } from '../src/constants/SideItems.js';

// Customer components
import AppLayout from './components/appLayout/index.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ManageAccounts from './pages/ManageAccounts.jsx';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts" element={<ManageAccounts />} />
          </Routes>
        </BrowserRouter>
      </AppLayout>
    </div>
  );
}

export default App;
