import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: 'AIzaSyBd1JyLpgXPpleL0MActwrnhPPBrlD2bYo',
    authDomain: 'react-slack-cecb5.firebaseapp.com',
    databaseURL: 'https://react-slack-cecb5-default-rtdb.firebaseio.com',
    projectId: 'react-slack-cecb5',
    storageBucket: 'react-slack-cecb5.appspot.com',
    messagingSenderId: '279945070224',
    appId: '1:279945070224:web:0caabe566006e3eca23a15',
};
firebase.initializeApp(config);

export default firebase;
