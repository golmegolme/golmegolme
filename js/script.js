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
// webView.configuration.allowsInlineMediaPlayback = true
// if  #available ( iOS 10.0, *) {
//     webConfiguration.mediaTypesRequiringUserActionForPlayback = []
// } 다른 {
//     // 이전 버전에 대한 폴백
//     webConfiguration.mediaPlaybackRequiresUserAction = 거짓
// }

// var player;
// function onYouTubeIframeAPIReady(){
//   player = new YT.Player('#player',{
//     width:'100%',
//     videoId:'https://www.youtube.com/embed/06Xp7tLk0oU/iframe_api',
//     playerVars:{'autoplay':1,'playsinline':1},
//     events:{ 'onReady':onPlayerReady }
//   });
// }
// function onPlayerReady(e){
//   e.target.mute();
//   e.target.playVideo();
// }
