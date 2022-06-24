const navbar = document.querySelector('.nav');
const btn = document.querySelector('.fa-solid');

btn.addEventListener('click', function () {
  navbar.classList.toggle('show-nav');
});
