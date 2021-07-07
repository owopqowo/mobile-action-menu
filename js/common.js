const btnMenu = document.querySelector('.btn-menu');

btnMenu.addEventListener('click', function (e){
  e.target.parentElement.classList.toggle('active');
});
