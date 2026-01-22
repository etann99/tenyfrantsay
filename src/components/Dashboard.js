import React from 'react';

function Dashboard({ userData, onNavigate }) {
  const cardsToReview = 25;

  return (
    <>
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Tableau de bord</h2>
            <p className="text-gray-600">Niveau estimé: <span className="badge badge-a2">A2</span></p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{userData.streak}</div>
            <div className="text-sm text-gray-600">jours de suite</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="card" style={{padding: '1rem', margin: 0}}>
            <div className="text-2xl font-bold text-green-600">{userData.cardsMastered}</div>
            <div className="text-sm text-gray-600">Cartes maîtrisées</div>
          </div>
          <div className="card" style={{padding: '1rem', margin: 0}}>
            <div className="text-2xl font-bold text-blue-600">{userData.textsRead}</div>
            <div className="text-sm text-gray-600">Textes lus</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progression vers B1</span>
            <span className="font-semibold">35%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '35%'}}></div>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="card" onClick={() => onNavigate('srs')} style={{cursor: 'pointer'}}>
          <h3 className="text-xl font-bold mb-2">📚 Révision SRS</h3>
          <p className="text-gray-600 mb-3">{cardsToReview} cartes à réviser aujourd'hui</p>
          <button className="btn btn-primary">Commencer</button>
        </div>

        <div className="card" onClick={() => onNavigate('reading')} style={{cursor: 'pointer'}}>
          <h3 className="text-xl font-bold mb-2">📖 Lecture guidée</h3>
          <p className="text-gray-600 mb-3">3 nouveaux textes disponibles</p>
          <button className="btn btn-primary">Lire</button>
        </div>

        <div className="card" onClick={() => onNavigate('journal')} style={{cursor: 'pointer'}}>
          <h3 className="text-xl font-bold mb-2">✍️ Journal quotidien</h3>
          <p className="text-gray-600 mb-3">Décrivez une situation professionnelle</p>
          <button className="btn btn-primary">Écrire</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
