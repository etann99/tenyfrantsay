import React, { useState } from 'react';

const prompts = [
  "Décrivez une situation difficile que vous avez gérée au travail",
  "Expliquez comment vous accueilleriez un client mécontent",
  "Racontez votre journée de travail idéale",
  "Comment réagiriez-vous face à une urgence ?"
];

function Journal({ userData, onComplete, onBack }) {
  const [text, setText] = useState('');
  const todayPrompt = prompts[new Date().getDate() % prompts.length];
  const wordCount = text.trim().split(/\s+/).filter(w => w).length;

  const handleSubmit = () => {
    if (wordCount >= 50) {
      onComplete();
    }
  };

  return (
    <div>
      <button onClick={onBack} className="btn btn-gray mb-4">← Retour</button>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">✍️ Journal quotidien</h2>

        <div className="mb-4" style={{padding: '1rem', background: '#eff6ff', borderRadius: '0.5rem'}}>
          <div className="text-sm font-semibold text-blue-600 mb-1">Sujet du jour :</div>
          <div className="text-lg">{todayPrompt}</div>
        </div>

        <div className="mb-2">
          <div className="text-sm text-gray-600 mb-2">
            Écrivez au moins 50 mots ({wordCount} / 50)
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Commencez à écrire..."
            style={{minHeight: '200px'}}
          />
        </div>

        <div className="mb-4">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: Math.min(100, (wordCount / 50) * 100) + '%'}}></div>
          </div>
        </div>

        <button 
          onClick={handleSubmit} 
          className="btn btn-primary" 
          style={{width: '100%'}}
          disabled={wordCount < 50}
        >
          {wordCount < 50 ? `Encore ${50 - wordCount} mots` : 'Enregistrer mon texte'}
        </button>

        <div className="mt-4 text-sm text-gray-600" style={{padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem'}}>
          💡 <strong>Astuce :</strong> Utilisez des phrases du SRS pour enrichir votre texte !
        </div>
      </div>
    </div>
  );
}

export default Journal;
