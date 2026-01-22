export function calculateNextReview(rating) {
  const intervals = {
    0: 1,
    1: 3,
    2: 7,
    3: 14
  };

  const days = intervals[rating] || 1;
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + days);

  return {
    nextReview: nextDate.toISOString(),
    interval: days,
    ease: rating >= 2 ? 1.3 : 1.0
  };
}

export function getDueCards(cards, reviewHistory) {
  const now = new Date();
  return cards.filter(card => {
    const history = reviewHistory[card.id];
    if (!history) return true;
    return new Date(history.nextReview) <= now;
  });
}
