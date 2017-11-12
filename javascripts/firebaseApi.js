'use strict';
const blog = require('./blog');
const data = require('./data');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/firebaseKey.json').done((data) => {
      resolve(data.firebaseKeys);
    }).fail((error) => {
      reject(error);
    });
  });
};

const retrieveKeys = () => {
  apiKeys().then((results) => {
    blog.setKey(results.apiKey);
    data.setKey(results);
    firebase.initializeApp(results);
  }).catch((error) => {
    console.log('error in key retrieval', error);
  });
};


module.exports = { retrieveKeys };