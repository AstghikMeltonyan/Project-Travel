let searchBtn = document.querySelector('header .icons .fa-search');
let searchBar = document.querySelector('header .search-bar');
let loginBtn  = document.querySelector('header .icons .fa-user');
let loginBar = document.querySelector('.login-form');
let menuBtn = document.querySelector('header #menu-bar');
let navBar = document.querySelector('header .navbar ');
let closeLoginBtn = document.querySelector('.login-form .fa-times');
let videoBtn = document.querySelectorAll('.home .controls .vid-btn');
let videoBar = document.querySelector('.home video');


window.onscroll = ()=>{
  searchBar.classList.remove('active');
  loginBar.classList.remove('active');
  navBar.classList.remove('active');
}

 
searchBtn.addEventListener('click', ()=>{
  searchBar.classList.toggle('active');
  searchBtn.classList.toggle('fa-times');
});

loginBtn.addEventListener('click', ()=>{
  loginBar.classList.toggle('active');
});

menuBtn.addEventListener('click', ()=>{
  navBar.classList.toggle('active');
  menuBtn.classList.toggle('fa-times');
});

closeLoginBtn.addEventListener('click', ()=>{
  loginBar.classList.remove('active');
});

videoBtn.forEach( btn =>{
  btn.addEventListener('click', ()=>{
    document.querySelector('.home .controls .active').classList.remove('active');
    btn.classList.add('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    videoBar.src = src;
  });
});



var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500
    },
    breakpoints: {
        650: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
});


