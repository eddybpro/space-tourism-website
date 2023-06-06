const menuBtn = document.querySelector('.menu-btn'),
closeBtn = document.querySelector('.close-btn'),
navLinksBox = document.querySelector('.nav-links'),
navLinks = document.querySelectorAll('.link');


menuBtn.addEventListener('click', showNavFn);
closeBtn.addEventListener('click', showNavFn);
navLinks.forEach(link=>{
    link.addEventListener('click', showNavFn)
});

function showNavFn(){
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    navLinksBox.classList.toggle('none');
}