$(document).ready(function () {
  $(".hero__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  });

  // it - business - section;
  function hoverFunction(a) {
    $(a).on({
      mouseenter: function () {
        $(this).addClass("active");
      },
      mouseleave: function () {
        $(this).removeClass("active");
      },
    });
  }
  hoverFunction(".it-business__bottom .txt-box .box-btn");

  // demos - cards - section;
  hoverFunction(".demos-cards-section .dm-box");

  // accordion;
  function accordion(a) {
    $(a).on("click", function () {
      var next = $(this).next();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".content").slideUp(200);
      } else {
        $(a).removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this).siblings(".content").slideDown(200);
      }
    });
  }

  accordion(".img-block .accordion");

  // swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 55,
    dynamicBullets: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
