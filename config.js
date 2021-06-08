import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyD_223O7md6ECVK8Did0QlfuqIEU5j5Jv0',
  authDomain: 'project-60-897a7.firebaseapp.com',
  projectId: 'project-60-897a7',
  databaseURL: "https://project-60-897a7-default-rtdb.firebaseio.com",
  storageBucket: 'project-60-897a7.appspot.com',
  messagingSenderId: '1067179191159',
  appId: '1:1067179191159:web:5c103c13fcb2485dd88f72',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
