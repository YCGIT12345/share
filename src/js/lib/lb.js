new Swiper(".swiper-container",{
    autoplay:true,
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect : 'fade',

})