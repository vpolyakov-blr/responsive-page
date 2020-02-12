window.addEventListener('DOMContentLoaded', function() {

	'use sctict';

	let headerMenu = document.querySelector('.header__menu'),
		headerBurger = document.querySelector('.header__burger'),
		body = document.body,
		contentRot = document.querySelector('.content__rot');

	
	headerBurger.addEventListener('click', function() {

		headerMenu.classList.toggle('active');
		headerBurger.classList.toggle('active');
		body.classList.toggle('lock');
		contentRot.classList.toggle('active');
	});


	// Чат с пользователем
	let	questionTitle = document.querySelector('.question__title'),
		questionBlock = document.querySelector('.question__block');
	
	questionTitle.addEventListener('click', function() {
		questionBlock.classList.toggle('active');
	});

});





































/*window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	
	let 
		burger = document.querySelector('.header__burger'),
		menu = document.querySelector('.header__menu'),
		body = document.body,
		contentMenu =  document.querySelector('.content');
	

	burger.addEventListener('click', function() {	
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
		contentMenu.classList.toggle('menu');
	});
});*/
