var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 24
    },
    1400: {
      slidesPerView: 7,
      spaceBetween: 24
    },
  },
});
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24
    },
  },
});

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[content]');

// tabs.forEach((tab)=>{
//   tab.addEventListener('click',()=>{
//     const target=document.querySelector(tab.dataset.target);
//     console.log(target);
//     tabContents.forEach((tabContent)=>{
//       tabContent.classList.remove('active-tab');
//     });
//     target.classList.add('active-tab');
//     tabs.forEach((tab)=>{
//       tab.classList.remove('active-tab');
//     });
//     tab.classList.add('active-tab');
//   });
// });
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
    tab.classList.add('active-tab')
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });
    target.classList.add('active-tab');
  });
});

$(".nav-collaspe").click(()=>{
  $(".nav__list").slideToggle();;
});