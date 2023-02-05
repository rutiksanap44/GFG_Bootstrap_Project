const toggleLines = document.getElementsByClassName('toggle-lines')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleLines.addEventListener('click',function(){
    navbarLinks.classList.toggle('active');
})
