'use strict';

const firebaseApi = require('./firebaseApi');
const data = require('./data');


$(document).ready(function () {
  firebaseApi.retrieveKeys();
  data.getBlogs();
  data.getProjects();
});



