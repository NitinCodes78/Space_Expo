const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('navbar');
    hamburger.addEventListener("click",function(){
    const hamImg=hamburger.querySelector('img');
    hamImg.classList.toggle('icon');
    navbar.classList.toggle('active');
});