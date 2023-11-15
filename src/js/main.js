// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

let navbar = document.querySelector('.navbar');
let hamburg = document.querySelector('.navbar-toggler');
const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

hamburg.addEventListener('click', async function () {
  let isOpen = hamburg.getAttribute('aria-expanded'); 
  if (isOpen == 'false') {
    navbar.classList.remove('bg-blue');
  } else {
    navbar.classList.add('bg-blue');
  }
});