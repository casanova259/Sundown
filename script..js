// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

function Page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixedImg = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
  });

  //apan query selector all krke sare elem ko select krege
  //aur uski img kko loop ki help se lga dege
  var elems = document.querySelectorAll(".elem");

  //yeh data mere pass aayega node list ki form me which is kindA Like array
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      // console.log(image);
      fixedImg.style.backgroundImage = `url(${image})`;
    });
  });
}
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiperAnimation();
Page4Animation();
