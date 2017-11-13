'use strict';
const dom = require('./dom');
let firebaseKey = "";
let blogArray;
let projectsArray;

const setKey = (key) => {
  firebaseKey = key;
};

const getBlogs = () => {
  return new Promise(function (resolve, reject) {
    $.ajax(`${firebaseKey.databaseURL}/blogs.json`).done(function (data) {
      resolve(data);
      blogArray = data;
      dom.domString(blogArray);
    }).fail(function (error) {
      reject(error);
    });
  });
};

const getProjects = () => {
  return new Promise(function (resolve, reject) {
    $.ajax(`${firebaseKey.databaseURL}/projects.json`).done(function (data) {
      resolve(data);
      projectsArray = data;
      dom.projectDomString(projectsArray);
    }).fail(function (error) {
      reject(error);
    });
  });
};

module.exports = { setKey, getBlogs, getProjects };