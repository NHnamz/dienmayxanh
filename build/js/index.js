const swiper_left = new Swiper('.swiper_left', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
});

const swiper_rifht = new Swiper('.swiper_right', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
    }
  }
});

const show = () => {
  document.querySelector(".more").classList.add("hidden")
  document.querySelector(".list").classList.remove("hidden")
}

const showContent = () => {
  document.querySelector(".more_content").classList.add("hidden")
  document.querySelector(".list_content").classList.remove("hidden")
}