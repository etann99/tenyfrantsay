const STORAGE_KEY = 'francais_user_data';

const defaultUserData = {
  streak: 0,
  cardsReviewed: 0,
  cardsMastered: 0,
  textsRead: 0,
  journalEntries: 0,
  lastActive: new Date().toISOString(),
  level: 'A2'
};

export function loadUserData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultUserData, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Erreur chargement données:', e);
  }
  return defaultUserData;
}

export function saveUserData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Erreur sauvegarde données:', e);
  }
}

export function resetUserData() {
  localStorage.removeItem(STORAGE_KEY);
  return defaultUserData;
}
