import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCz9YmJcpG5CK9LWK5bmLJN_GhUy_uwk3g',
  authDomain: 'meee-1fccc.firebaseapp.com',
  databaseURL: 'https://meee-1fccc.firebaseio.com',
  projectId: 'meee-1fccc',
  storageBucket: 'meee-1fccc.appspot.com',
  messagingSenderId: '482724752332'
}
firebase.initializeApp(config)

export const db = firebase.database();
