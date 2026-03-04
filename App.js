import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage'
import ProtectedDashboard from './pages/ProtectedDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ClientListPage from './pages/ClientListPage';
import InvoiceListPage from './pages/InvoiceListPage';






function App() {
  return (
    <Router>
      <div className="container mt-5">
        
      

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoute> <ProtectedDashboard /> </ProtectedRoute> } />
          <Route path="/clients" element={<ProtectedRoute><ClientListPage /></ProtectedRoute>} />
          <Route path="/invoices" element={<ProtectedRoute><InvoiceListPage /></ProtectedRoute>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
