import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>
  , document.getElementById('root')
);

// Firebase is not injected to the React component tree via the React Context AP
// Now for every component interested in Firebase, may access to the Firebase instance with FirebaseContext.Consumer component


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
