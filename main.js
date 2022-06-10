//If the width of device is lesser than or equal to 530, change the image to image for mobile
if ($(window).innerWidth() <= 530) {
  console.log("me");
  $(".creations-img-1").attr("src", "./images/mobile/image-deep-earth.jpg");
  $(".creations-img-2").attr("src", "./images/mobile/image-night-arcade.jpg");
  $(".creations-img-3").attr("src", "./images/mobile/image-soccer-team.jpg");
  $(".creations-img-4").attr("src", "./images/mobile/image-grid.jpg");
  $(".creations-img-5").attr("src", "./images/mobile/image-from-above.jpg");
  $(".creations-img-6").attr(
    "src",
    "./images/mobile/image-pocket-borealis.jpg"
  );
  $(".creations-img-7").attr("src", "./images/mobile/image-curiosity.jpg");
  $(".creations-img-8").attr("src", "./images/mobile/image-fisheye.jpg");
}

//Menu Toggle click
// $(".icon-mobile-nav").click(function () {
//   $(".main-menu-ul").css("opacity", "1");
//   $(".spacer-3").css("max-width", "100%");
//   $(".logo").css({
//     "z-index": "9",
//     width: "75rem",
//     height: "14.3rem",
//     "margin-top": "2rem",
//   });
//   $("img.logo, .main-menu-ul").css("padding-left", "12rem");
//   // $("main,footer").css("display", "none");
// });

$(document).ready(function () {
  $(".icon-mobile-nav-open").click(function () {
    $(".main-menu-ul").css({
      opacity: "1",
      width: "100%",
      "padding-left": "14rem",
      "pointer-events": "auto",
      visibility: "visible",
    });
    $(".spacer-3").css("max-width", "100%");
    $(".logo-parent").css({
      "z-index": "9",
      width: "75rem",
      height: "14rem",
      "margin-top": "11.3rem",
      "padding-left": "14rem",
    });
    $(".navigation").css("padding-top", "6.5rem");
    $("[name='close-outline']").css({
      display: "block",
      "margin-top": "-2rem",
      "margin-right": "13rem",
    });
    $("[name='menu-outline']").css({
      display: "none",
    });
  });

  $(".icon-mobile-nav-close").click(function () {
    $(".main-menu-ul").css({
      opacity: "1",
      "pointer-events": "none",
      visibility: "hidden",
    });

    $(this).hide(700);
    $(".icon-mobile-nav-open").show(1000);
    $(".btn-menu-nav").css({ "margin-right": "13rem" });
    $(".navigation").css("padding-top", "0.5rem");
  });
});
