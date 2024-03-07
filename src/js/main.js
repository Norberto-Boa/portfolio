// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

let navbar = document.querySelector('.navbar');
let hamburg = document.querySelector('.navbar-toggler');
const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

hamburg.addEventListener('click', function () {
  let isOpen = hamburg.getAttribute('aria-expanded');
  if (isOpen == 'false') {
    navbar.classList.remove('bg-blue');
  } else {
    navbar.classList.add('bg-blue');
  }
});



addEventListener('load', changeNavbarBackground);
addEventListener('scroll', changeNavbarBackground);

function changeNavbarBackground() {
  if (window.scrollY > 300) {
    navbar.classList.add('nav-white');
  } else {
    navbar.classList.remove('nav-white');
  }
};

// Carousel
let items = document.querySelectorAll('.carousel .carousel-item');

items.forEach((el) => {
  const w = window.innerWidth;
  console.log(w);
  const minPerSlide = w < 576 ? 4 : 6;
  let next = el.nextElementSibling;
  console.log(minPerSlide);
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = items[0];
    }

    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
})

function handleSubmit() {
  let message
  let errorMessage = document.querySelector("#error");
  let successMessage = document.querySelector("#success");
  let submitButton = document.querySelector("#submit-button");

  submitButton.disabled = true;

  emailjs.sendForm('service_fl5i2he', 'template_af8j9pd', "#contact")
    .then(function (response) {
      message = "Message was sent successfully!";
      alert(message);
      submitButton.disabled = false;
      successMessage.innerHTML = message;
    }, function (error) {
      message = "Something went wrong";
      alert(message);
      submitButton.disabled = false;
      errorMessage.innerHTML = message;
    });
}