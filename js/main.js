const myChannelSlider = new Swiper('.my-channel-slider', {

  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '#my-channel-button-next',
    prevEl: '#my-channel-button-prev',
  },

});

const recommendedSlider = new Swiper('.recommended-slider', {

  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '#recommended-button-next',
    prevEl: '#recommended-button-prev',
  },

});
const recommendedChannelSlider = new Swiper('.recommended-channel-slider', {

  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '#recommended-channel-button-next',
    prevEl: '#recommended-channel-button-prev',
  },

});