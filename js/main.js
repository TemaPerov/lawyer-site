

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__links,.header__span").toggleClass("active");
  });
  $(".main__btn").click(function () {
    $(".main__price-card:nth-child(n+10)").toggleClass("active");
    $(this).toggleClass("active-btn");
    if ($(this).hasClass("active-btn")) $('.p-btn').text("Закрити")
    else $('.p-btn').text("Показати все");
  });
});

$(".main__stat-card").click(function(){
  $(this).find(".main__text").toggle( "slow", function() {
})
})



// слайдер
$(document).ready(function () {
  $(".main__card-box").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
});
//  стрілка вгору
let arrowTop = document.querySelector('.arrowTop');
arrowTop.addEventListener('click', function(){
  window.scrollTo(pageXOffset, 0);
})
window.addEventListener('scroll',function(){
if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
  arrowTop.classList.add('arrow__active');
  document.querySelector('.header__links').classList.remove('active');
  document.querySelector('.header__burger').classList.remove('active');
  document.querySelector('.header__span').classList.remove('active');

}else{
  arrowTop.classList.remove('arrow__active');
}
})
