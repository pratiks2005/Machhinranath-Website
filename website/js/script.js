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