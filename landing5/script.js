const burger = document.querySelector('#burger-btn');
const menu = document.querySelector('#burger-menu');

burger.addEventListener('click',() =>{
	menu.classList.toggle('disp');
});