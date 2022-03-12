let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()  =>{
    navbar.classList.toggle('active')
    menu.classList.toggle('fa-times')
}

window.onscroll = () => {
    navbar.classList.remove('active')
}

window.addEventListener("scroll",function(){
 var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0)  })