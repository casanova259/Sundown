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

function menuAnimate() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-SCR");
  var navImg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
      // console.log(flag);
    } else {
      full.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
      console.log("BSDK");
    }
  });
}


swiperAnimation();
Page4Animation();
menuAnimate();

var loader=document.querySelector("#loader");
//set timeout=delay thodi der ka wait
setTimeout(function()
{
  loader.style.top="-100%";
},4000)