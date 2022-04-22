$('.menu__icon').click(function(){
    $('.menu__overlay').show();
    $('.menu__mobile__wrap').addClass('active');
});
$('.menu__overlay').click(function(){
    // $('.menu__overlay').show();
    $('.menu__mobile__wrap').removeClass('active');
    $(this).hide();
});

$(document).ready(function(){
    $('.slider__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        // dots: true,
      
    });
  })
  const search = document.querySelector(".issearch");
  const searchInput = document.querySelector(".search__input")
search.addEventListener("click", ()=>{
    searchInput.classList.toggle("isactive")
})