import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import SRSSession from './components/SRSSession';
import ReadingSession from './components/ReadingSession';
import Journal from './components/Journal';
import { loadUserData, saveUserData } from './utils/storage';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = loadUserData();
    setUserData(data);
  }, []);

  const updateUserData = (updates) => {
    const newData = { ...userData, ...updates };
    setUserData(newData);
    saveUserData(newData);
  };

  if (!userData) {
    return (
      <div className="container">
        <div className="card text-center">
          <h1 className="text-3xl font-bold mb-4">Chargement...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-2">Français Service</h1>
        <p className="text-center text-gray-600">Apprendre le français professionnel</p>
      </header>

      {currentView === 'dashboard' && (
        <Dashboard 
          userData={userData} 
          onNavigate={setCurrentView}
        />
      )}

      {currentView === 'srs' && (
        <SRSSession 
          userData={userData}
          onComplete={(stats) => {
            updateUserData({
              cardsReviewed: userData.cardsReviewed + stats.reviewed,
              cardsMastered: userData.cardsMastered + stats.mastered,
              streak: userData.streak + (stats.reviewed > 0 ? 1 : 0),
              lastActive: new Date().toISOString()
            });
            setCurrentView('dashboard');
          }}
          onBack={() => setCurrentView('dashboard')}
        />
      )}

      {currentView === 'reading' && (
        <ReadingSession 
          userData={userData}
          onComplete={(stats) => {
            updateUserData({
              textsRead: userData.textsRead + stats.textsCompleted,
              lastActive: new Date().toISOString()
            });
            setCurrentView('dashboard');
          }}
          onBack={() => setCurrentView('dashboard')}
        />
      )}

      {currentView === 'journal' && (
        <Journal 
          userData={userData}
          onComplete={() => {
            updateUserData({
              journalEntries: userData.journalEntries + 1,
              lastActive: new Date().toISOString()
            });
            setCurrentView('dashboard');
          }}
          onBack={() => setCurrentView('dashboard')}
        />
      )}
    </div>
  );
}

export default App;
