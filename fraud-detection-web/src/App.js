import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RealTimePage from './components/RealTimeMonitor';
import AnomalyPage from './components/AnomalyDetection';
import ReportsPage from './components/TransactionReports';
import UserManagementPage from './components/UserManagement';

// Hàm kiểm tra trạng thái đăng nhập
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdmin'); // Kiểm tra trạng thái đăng nhập
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Trang login */}
        <Route path="/" element={<Login />} />
        
        {/* Bảo vệ các route còn lại */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/realtime"
          element={
            <PrivateRoute>
              <RealTimePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/anomalies"
          element={
            <PrivateRoute>
              <AnomalyPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UserManagementPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;