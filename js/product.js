var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button"
    },
    effect: "fade",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        // Update background
        document.querySelectorAll('.slide-bg').forEach(bg => bg.classList.remove('active'));
        const activeIndex = this.realIndex + 1;
        document.querySelector(`#bg${activeIndex}`).classList.add('active');
      }
    }
  });