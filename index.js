'use strict';

const fs = require('fs');
var path = require('path');

var admin = require("firebase-admin");

// https://console.firebase.google.com/project/test-fcm/settings/serviceaccounts/adminsdk
var serviceAccountKey = require(path.resolve(__dirname + "/../serviceAccountKey.json"));

admin.initializeApp({
	credential: admin.credential.cert(serviceAccountKey),
	databaseURL: "https://test-fcm.firebaseio.com"
});

let data = {
    data: {
      test: 'hello'
    },
    token: token
};

admin.messaging().send(data)
  .then((response) => {
      console.log('Successfully sent message:', response);
  })
  .catch((error) => {
      console.log('Error sending message:', error);
  });
