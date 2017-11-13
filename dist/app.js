(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let blogKey;

const setKey = (apiKey) => {
  blogKey = apiKey;
};


module.exports = { setKey };
},{}],2:[function(require,module,exports){
'use strict';
const dom = require('./dom');
let firebaseKey = "";
let blogArray;
let projectsArray;

const setKey = (key) => {
  firebaseKey = key;
  getBlogs();
  getProjects();
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
},{"./dom":3}],3:[function(require,module,exports){
'use strict';
let selectedCard;

const domString = (blogs) => {
	let blogString = "";
	for (let i = 0; i < blogs.length; i++) {
		blogString += `<section class="blog-card col-xs-4" id="blogcard">
											<div class='card-title child'>${blogs[i].title}</div>
											<div class='card-date child'><h6>${blogs[i].date}</h6></div>
											<div class='card-content child'><p>${blogs[i].content}</p></div>
										</section>`;
		writeToDom(blogString);
	}
};

const projectDomString = (projects) => {
	let projectString = "";
	for (let i = 0; i < projects.length; i++) {
		projectString += `<div class="project-card col-xs-4">`;
		projectString += `<div class="project-title">${projects[i].title}</div>`;
		projectString += `<div class="project-photo"><img src="${projects[i].screenshots}"></div>`;
		projectString += `<div class="project-description"><p>${projects[i].description}</p></div>`;
		projectString += `<div class="project-link"><a href="${projects[i].github}">Project Link</a></div>`;
		if (projects[i].hosted) {
			projectString += `<div class="project-hosted"><a href="${projects[i].hosted}">Hosted Site</a></div>`;
			projectString += `</div>`;
		} else {
			projectString += `</div>`;
		}
	}
	writeProjectToDom(projectString);
};

$('#blog-container').click((event) => {
	if ($(event.target).hasClass('blog-card')) {
		$('#jumboCard').removeClass('hidden');
		$('#jumboCard').html(event.target.innerHTML);
	} else {
		const blogCard = $(event.target).parents('.blog-card')[0];
		$('#jumboCard').removeClass('hidden');
		$('#jumboCard').html(blogCard.innerHTML);
	}
	$('html, body').animate({ scrollTop: 0 }, 'fast');
});

$('#jumboCard').click(() => {
	$('#jumboCard').addClass('hidden');
});

const writeToDom = (blogString) => {
	$('#blog-container').html(blogString);
};

const writeProjectToDom = (projectString) => {
	$('.projects-container').html(projectString);
};



module.exports = { domString, projectDomString };














},{}],4:[function(require,module,exports){
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
},{"./blog":1,"./data":2}],5:[function(require,module,exports){
'use strict';

const firebaseApi = require('./firebaseApi');
const data = require('./data');
const blog = require('./blog');

firebaseApi.retrieveKeys();
// data.getBlogs();


},{"./blog":1,"./data":2,"./firebaseApi":4}]},{},[5]);
