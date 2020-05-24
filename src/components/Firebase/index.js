import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase };

// the purpose of this file is to provide a firebase instance to the entire application (from firebase context)
// throughout the app, components will call firebase's methods if needed 
