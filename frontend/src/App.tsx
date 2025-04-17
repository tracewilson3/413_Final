
import './App.css';

import EntertainersPage from './pages/EntertainersPage';
import EntertainerDetailsPage from './pages/EntertainerDetailsPage';
import LandingPage from './pages/Landing';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  
  
  return (
    <>
    
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/EntertainersList" element={<EntertainersPage />} />
        
        <Route path="/entertainers/:id" element={<EntertainerDetailsPage />} />
        
      </Routes>
    </Router>
    
    
    
    </>
  );
}

export default App
