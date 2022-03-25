var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

document.getElementById('vid').play();

$(window).scroll(function() {
    if($(this).scrollTop() == 0)
        $('.header-top').css('opacity','1');
    else
        $('.header-top').css('opacity','.8');
});