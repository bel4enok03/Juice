gsap.from('.homeText',{opacity:0,duration:2,delay:0.9})
gsap.from('.contentHeading',{duration:1.5,delay:0.6, x: '-100vw'})
gsap.from('.homeImage',{duration:1.5,delay:0.6, x: '+100vw'})
gsap.from('.btn, .btnProduct', { opacity: 0, scale: 0, rotation: 360,duration:1.9 }, { duration: 2, delay: 4.3, opacity: 1, scale: 1, rotation: 0 })

gsap.from('.menu',{opacity:0,duration:5,delay:1,stagger:0.6})
gsap.from('.contentText',{duration:6,delay:0.6, x: '+100vw', opacity:0})
gsap.from('.aboutImage',{duration:6,delay:.6, x: '-100vw', opacity:0})
gsap.from('.contactInfo',{duration:7,delay:.6, y: '+100vw', opacity:0})
gsap.from('.heading',{ duration: 2, delay: 1.5, x: '-100vw', ease: 'power2.in', opacity: 0 })

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


