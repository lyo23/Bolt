import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Search from './pages/Search';
import Documents from './pages/Documents';
import Assistant from './pages/Assistant';
import Alerts from './pages/Alerts';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Procedures from './pages/Procedures';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser] = useState({
    name: 'Ahmed BENALI',
    role: 'Juriste Senior',
    organization: 'Cabinet Juridique International',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  });

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={
              <>
                <Header 
                  user={currentUser}
                  onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
                
                <MobileMenu 
                  isOpen={mobileMenuOpen}
                  onClose={() => setMobileMenuOpen(false)}
                />
                
                <main className="max-w-7xl mx-auto px-4 py-6">
                  <Routes>
                    <Route path="/" element={<Dashboard user={currentUser} />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/assistant" element={<Assistant />} />
                    <Route path="/alerts" element={<Alerts />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/profile" element={<Profile user={currentUser} />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/procedures/*" element={<Procedures />} />
                    
                    {/* Routes pour les nouveaux menus */}
                    <Route path="/textes/*" element={
                      <div className="max-w-7xl mx-auto p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Section Textes Juridiques</h1>
                        <p className="text-gray-600">Cette section sera développée prochainement</p>
                      </div>
                    } />
                    <Route path="/analyse/*" element={
                      <div className="max-w-7xl mx-auto p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Section Analyse et Rapports</h1>
                        <p className="text-gray-600">Cette section sera développée prochainement</p>
                      </div>
                    } />
                    <Route path="/collaboration/*" element={
                      <div className="max-w-7xl mx-auto p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Section Collaboration</h1>
                        <p className="text-gray-600">Cette section sera développée prochainement</p>
                      </div>
                    } />
                    <Route path="/actualites/*" element={
                      <div className="max-w-7xl mx-auto p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Section Actualités et Références</h1>
                        <p className="text-gray-600">Cette section sera développée prochainement</p>
                      </div>
                    } />
                    <Route path="/config/*" element={
                      <div className="max-w-7xl mx-auto p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Section Configuration</h1>
                        <p className="text-gray-600">Cette section sera développée prochainement</p>
                      </div>
                    } />
                    <Route path="/aide/*" element={
                      <div className="max-w-7xl mx-auto p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Section Aide et Support</h1>
                        <p className="text-gray-600">Cette section sera développée prochainement</p>
                      </div>
                    } />
                  </Routes>
                </main>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;