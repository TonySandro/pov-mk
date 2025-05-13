import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LoginPage from './pages/login';
import Catalog from './pages/catalog';
import AdminPage from './pages/admin';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
