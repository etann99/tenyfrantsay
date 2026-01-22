import React, { useState } from 'react';
import { srsCards } from '../data/cards';

function SRSSession({ userData, onComplete, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [stats, setStats] = useState({ reviewed: 0, mastered: 0 });
  const [cards] = useState(srsCards.slice(0, 10));

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;

  const handleRating = (rating) => {
    const newStats = { ...stats, reviewed: stats.reviewed + 1 };
    if (rating >= 3) newStats.mastered += 1;

    setStats(newStats);

    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      onComplete(newStats);
    }
  };

  if (!currentCard) return null;

  return (
    <div>
      <div className="mb-4">
        <button onClick={onBack} className="btn btn-gray mb-3">← Retour</button>
        <div className="flex justify-between text-sm mb-2">
          <span>Carte {currentIndex + 1} / {cards.length}</span>
          <span className={"badge badge-" + currentCard.niveau.toLowerCase()}>{currentCard.niveau}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{width: progress + '%'}}></div>
        </div>
      </div>

      <div className="card">
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Scène: {currentCard.scene_nom}</div>
          <div className="text-lg mb-3" style={{padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem'}}>
            {currentCard.phrase_gasy}
          </div>
        </div>

        {!showAnswer ? (
          <div>
            <div className="text-xl font-semibold mb-4" style={{minHeight: '60px'}}>
              {currentCard.phrase_fr.split(' ').slice(0, 3).join(' ')} ___________
            </div>
            <button 
              onClick={() => setShowAnswer(true)} 
              className="btn btn-primary"
              style={{width: '100%'}}
            >
              Voir la réponse
            </button>
          </div>
        ) : (
          <div>
            <div className="text-xl font-semibold mb-4" style={{padding: '1rem', background: '#ecfdf5', borderRadius: '0.5rem'}}>
              {currentCard.phrase_fr}
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold mb-2">Variantes :</div>
              {currentCard.variantes.split('|').map((v, i) => (
                <div key={i} className="text-sm text-gray-600 mb-1">• {v}</div>
              ))}
            </div>

            <div className="text-sm text-gray-600 mb-3 text-center">Comment avez-vous trouvé cette carte ?</div>
            <div className="grid grid-cols-4 gap-2">
              <button onClick={() => handleRating(0)} className="btn btn-error">
                <div className="text-xs">Encore</div>
              </button>
              <button onClick={() => handleRating(1)} className="btn btn-warning">
                <div className="text-xs">Difficile</div>
              </button>
              <button onClick={() => handleRating(2)} className="btn btn-success">
                <div className="text-xs">Bien</div>
              </button>
              <button onClick={() => handleRating(3)} className="btn btn-success">
                <div className="text-xs">Facile</div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SRSSession;
