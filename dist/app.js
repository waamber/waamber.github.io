(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

$.get('db/blog.json').done((data) => {
	let blogs = data.blogs;
	domString(blogs);
}).fail((error) => {
	console.log(error);
});

















},{}]},{},[1]);
