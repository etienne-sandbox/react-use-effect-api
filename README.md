# Le hook `useEffect` pour charger des données

Ce repository contient deux exemples d'utilisation du hook [`useEffect`](https://fr.reactjs.org/docs/hooks-reference.html#useeffect) de React pour chargé des données.

- Le premier exemple ([`src/PeopleList.jsx`](https://github.com/etienne-sandbox/react-use-effect-fetch/blob/main/src/PeopleList.jsx)) charge des données depuis un API (`https://swapi.dev/api/people`).
- Le second exemple ([`src/PeopleList.jsx`](https://github.com/etienne-sandbox/react-use-effect-fetch/blob/main/src/PeopleDetails.jsx) fait la même chose, mais avec une URL d'API qui dépend de du personnage sélectionné (`https://swapi.dev/api/people/ID_SELECTIONNE`).

## Lancer le projet

Pour lancer le projet vous devez installer les dépendances avec `npm install`, puis lancer le serveur de développement avec `npm run dev`.
