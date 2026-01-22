# Français Service - MVP

Application d'apprentissage du français professionnel (niveau service/accueil) avec SRS, lecture guidée et journal.

## Installation

```bash
npm install
npm start
```

L'application s'ouvrira sur http://localhost:3000

## Structure du projet

```
francais-mvp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js       # Tableau de bord principal
│   │   ├── SRSSession.js      # Système de révision espacée
│   │   ├── ReadingSession.js  # Lecture guidée avec QCM
│   │   └── Journal.js         # Journal quotidien
│   ├── data/
│   │   ├── cards.js          # 10 phrases SRS pour démo
│   │   └── textes.js         # 3 textes gradués A2-B1
│   ├── utils/
│   │   ├── storage.js        # Gestion LocalStorage
│   │   └── srs.js            # Algorithme SM-2 simplifié
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Fonctionnalités

✅ **Système SRS** - Répétition espacée avec algorithme SM-2  
✅ **30 phrases situationnelles** - Réparties en 6 scènes (accueil, plainte, sécurité, service, information, problème)  
✅ **3 textes gradués** - Avec questions de compréhension (A2-B1)  
✅ **Journal quotidien** - Avec prompts et compteur de mots  
✅ **Dashboard avec métriques** - Streak, progression, statistiques  
✅ **LocalStorage** - Pas besoin de backend  
✅ **Interface 100% français** - Traductions gasy dans le contenu uniquement

## Utilisation

1. **Révision SRS** : Apprenez des phrases contextuelles avec système de répétition espacée
2. **Lecture guidée** : Lisez des textes gradués et répondez aux questions
3. **Journal** : Écrivez quotidiennement sur des sujets professionnels (min. 50 mots)

## Prochaines étapes

- [ ] Ajouter 570+ phrases (objectif 600 total)
- [ ] Ajouter 27+ textes (objectif 30 total)
- [ ] Implémenter diagnostic initial
- [ ] Intégrer Text-to-Speech
- [ ] Correction automatique du journal (API GPT)
- [ ] Déploiement sur Vercel

## Développement

```bash
# Installation des dépendances
npm install

# Lancer en mode développement
npm start

# Build pour production
npm run build
```

## Auteurs

Créé pour l'apprentissage du français niveau service client / cabin crew.
