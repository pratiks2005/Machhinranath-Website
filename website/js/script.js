// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

});

});

// Sticky Header Shadow

window.addEventListener('scroll',()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";

}else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

}

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
const topBar = document.getElementById("topBar");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        topBar.classList.add("hide");
        header.classList.add("stickyTop");
    }else{
        topBar.classList.remove("hide");
        header.classList.remove("stickyTop");
    }

});
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    // Only on mobile
    if (window.innerWidth > 768) return;

    let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down
        navbar.classList.add("hide-nav");
    } else {
        // Scrolling up
        navbar.classList.remove("hide-nav");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.innerWidth > 768) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});


const menuBtn=document.getElementById("menu-btn");

const nav=document.getElementById("nav-links");

menuBtn.onclick=function(){

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menuBtn.innerHTML="✕";

}else{

menuBtn.innerHTML="☰";

}

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick=function(){

nav.classList.remove("active");

menuBtn.innerHTML="☰";

}

});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";
    });
});
