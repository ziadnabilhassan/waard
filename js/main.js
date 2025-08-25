// /////////////////////
// window.addEventListener("scroll", function () {
//     let nav = document.querySelector(".navbar");
//     nav.classList.toggle("fix", window.scrollY > 150);
// }) 
// //////////////////////////
// window.addEventListener("scroll" , function () {
//     let scrollUp = document.querySelector(".scroll_up");
//     scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
//     scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
// })
//     let scrollUp = document.querySelector(".scroll_up");

// scrollUp.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         behavior:"smooth"
//     })
// })
 var owl = $('#S1_home');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    ltr:true,
    nav: false,
    navElement: "dots",
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});
 var owl = $('#S2_home');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    ltr:true,
    nav: false,
    navElement: "dots",
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});
    // Mobile Menu Toggle
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
          toggle.querySelector('i').classList.toggle('bx-menu');
          toggle.querySelector('i').classList.toggle('bx-x');
        });
      }
    }
    showMenu('nav-toggle', 'nav-menu');
    // Close Mobile Menu When Clicking Links
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');

    function linkAction() {
      navMenu.classList.remove('show');
      navToggle.querySelector('i').classList.remove('bx-x');
      navToggle.querySelector('i').classList.add('bx-menu');
    }
    navLinks.forEach(n => n.addEventListener('click', linkAction));
    // Active Link on Scroll
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active');
        } else {
          document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
    // Change Header Background on Scroll
    function scrollHeader() {
      const header = document.getElementById('header');
      if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
    // Fleet Category Filter
    const fleetCategories = document.querySelectorAll('.fleet-category');
    fleetCategories.forEach(category => {
      category.addEventListener('click', () => {
        // Remove active class from all categories
        fleetCategories.forEach(c => c.classList.remove('active'));
        // Add active class to clicked category
        category.classList.add('active');
        // Here you would typically filter the fleet vehicles
        // For demo purposes, we're just changing the active state
      });
    });
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });