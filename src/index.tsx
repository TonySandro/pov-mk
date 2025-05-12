import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import LoginPage from './pages/login';
import Catalog from './pages/catalog';
import './index.css';
import AdminPage from './pages/admin';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
