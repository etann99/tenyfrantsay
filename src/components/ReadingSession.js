import React, { useState } from 'react';
import { textes } from '../data/textes';

function ReadingSession({ userData, onComplete, onBack }) {
  const [selectedText, setSelectedText] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (!selectedText) {
    return (
      <div>
        <button onClick={onBack} className="btn btn-gray mb-4">← Retour</button>
        <h2 className="text-2xl font-bold mb-4">Lecture guidée</h2>

        {textes.map(texte => (
          <div key={texte.id} className="card" onClick={() => setSelectedText(texte)} style={{cursor: 'pointer'}}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{texte.titre}</h3>
              <span className={"badge badge-" + texte.niveau.toLowerCase()}>{texte.niveau}</span>
            </div>
            <p className="text-gray-600">{texte.contenu.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    );
  }

  const handleSubmit = () => {
    setShowResults(true);
    setTimeout(() => {
      onComplete({ textsCompleted: 1 });
    }, 3000);
  };

  const correctCount = selectedText.questions.filter((q, i) => answers[i] === q.correct).length;

  return (
    <div>
      <button onClick={() => setSelectedText(null)} className="btn btn-gray mb-4">← Retour</button>

      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{selectedText.titre}</h2>
          <span className={"badge badge-" + selectedText.niveau.toLowerCase()}>{selectedText.niveau}</span>
        </div>

        <div className="mb-6" style={{lineHeight: '1.8', fontSize: '1.05rem'}}>
          {selectedText.contenu.split('\n\n').map((para, i) => (
            <p key={i} className="mb-3">{para}</p>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-3">Questions de compréhension</h3>

        {selectedText.questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-4" style={{padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem'}}>
            <div className="font-semibold mb-2">{qIndex + 1}. {question.q}</div>
            <div className="flex flex-col gap-2">
              {question.options.map((option, oIndex) => (
                <label key={oIndex} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0.5rem', borderRadius: '0.25rem', background: answers[qIndex] === oIndex ? '#dbeafe' : 'white'}}>
                  <input
                    type="radio"
                    name={"q" + qIndex}
                    checked={answers[qIndex] === oIndex}
                    onChange={() => setAnswers({...answers, [qIndex]: oIndex})}
                    disabled={showResults}
                    style={{marginRight: '0.5rem'}}
                  />
                  <span style={{color: showResults ? (oIndex === question.correct ? '#059669' : answers[qIndex] === oIndex ? '#dc2626' : '#111827') : '#111827'}}>
                    {option} {showResults && oIndex === question.correct && '✓'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {!showResults ? (
          <button 
            onClick={handleSubmit} 
            className="btn btn-primary" 
            style={{width: '100%'}}
            disabled={Object.keys(answers).length < selectedText.questions.length}
          >
            Vérifier mes réponses
          </button>
        ) : (
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">{correctCount} / {selectedText.questions.length} correct{correctCount > 1 ? 's' : ''}</div>
            <div className="text-gray-600">Retour au tableau de bord dans 3 secondes...</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReadingSession;
