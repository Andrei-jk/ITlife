$(".header__burger").click(function (event) {
  $(".header__burger,.header__menu").toggleClass("active");
  $("body").toggleClass("lock");
});
let twitt = $(".twitter-link");
twitt.mouseover(function () {
  $(this).addClass("blue__svg");
  let twitt1 = $(".twitter__svg").addClass("blue");
});
twitt.mouseout(function () {
  $(this).removeClass("blue__svg");
  let twitt1 = $(".twitter__svg").removeClass("blue");
});

let face = $(".facebook-link");
face.mouseover(function () {
  $(this).addClass("blue__svg");
  let face1 = $(".facebook__svg").addClass("blue");
});
face.mouseout(function () {
  $(this).removeClass("blue__svg");
  let face1 = $(".facebook__svg").removeClass("blue");
});

let inst = $(".instagram-link");
inst.mouseover(function () {
  $(this).addClass("blue__svg");
  let inst1 = $(".instagram__svg").addClass("blue");
});
inst.mouseout(function () {
  $(this).removeClass("blue__svg");
  let inst1 = $(".instagram__svg").removeClass("blue");
});

let lin = $(".linkedin-link");
lin.mouseover(function () {
  $(this).addClass("blue__svg");
  let lin1 = $(".linkedin__svg").addClass("blue");
});
lin.mouseout(function () {
  $(this).removeClass("blue__svg");
  let lin1 = $(".linkedin__svg").removeClass("blue");
});

let teleg = $(".telegram-link");
teleg.mouseover(function () {
  $(this).addClass("blue__svg");
  let teleg1 = $(".telegram__svg").addClass("blue");
});
teleg.mouseout(function () {
  $(this).removeClass("blue__svg");
  let teleg1 = $(".telegram__svg").removeClass("blue");
});

let twitterActive = $(".active__twitter-link");
twitterActive.mouseover(function () {
  $(this).addClass("white__svg");
  let twitterActive1 = $(".twitter__svg-active").addClass("white");
});
twitterActive.mouseout(function () {
  $(this).removeClass("white__svg");
  let twitterActive1 = $(".twitter__svg-active").removeClass("white");
});

let facebookActive = $(".active__facebook-link");
facebookActive.mouseover(function () {
  $(this).addClass("white__svg");
  let facebookActive1 = $(".facebook__svg-active").addClass("white");
});
facebookActive.mouseout(function () {
  $(this).removeClass("white__svg");
  let facebookActive1 = $(".facebook__svg-active").removeClass("white");
});

let instagramActive = $(".active__instagram-link");
instagramActive.mouseover(function () {
  $(this).addClass("white__svg");
  let instagramActive1 = $(".instagram__svg-active").addClass("white");
});
instagramActive.mouseout(function () {
  $(this).removeClass("white__svg");
  let instagramActive1 = $(".instagram__svg-active").removeClass("white");
});


let active = document.querySelector(".active__choice");
let jhon = document.querySelector(".jhon");
jhon.addEventListener("mouseover", function () {
  active.classList.toggle("hide");
}); 
jhon.addEventListener("mouseout", function () {
  active.classList.toggle("hide");
}); 


let active1 = document.querySelector(".active__choice1");
let alex = document.querySelector(".alex");
alex.addEventListener("mouseover", function () {
  active1.classList.toggle("hide");
});
alex.addEventListener("mouseout", function () {
  active1.classList.toggle("hide");
}); 


let active2 = document.querySelector(".active__choice2");
let elena = document.querySelector(".elena");
elena.addEventListener("mouseover", function () {
  active2.classList.toggle("hide");
});
elena.addEventListener("mouseout", function () {
  active2.classList.toggle("hide");
}); 


let active3 = document.querySelector(".active__choice3");
let lily = document.querySelector(".lily");
lily.addEventListener("mouseover", function () {
  active3.classList.toggle("hide");
});
lily.addEventListener("mouseout", function () {
  active3.classList.toggle("hide");
}); 


document
  .querySelector("#btnOpenPopupLogo")
  .addEventListener("click", function () {
    document.querySelector("#hiddenArea").classList.add("open");
  });
document
  .querySelector("#id-for-close-modal-window")
  .addEventListener("click", function () {
    document.querySelector("#hiddenArea").classList.remove("open");
  });
document
  .querySelector("#id-for-close-hidden-area")
  .addEventListener("click", function () {
    document.querySelector("#hiddenArea").classList.remove("open");
  });


let btnsOpenModalArea = document.querySelectorAll(
  "[data-btn-for-open-modal-area]"
);
let allModalAreas = document.querySelectorAll("[data-modal-area]");
console.log(allModalAreas);

btnsOpenModalArea.forEach(function (item) {

  item.addEventListener('click', function () {
    console.log(this);
    console.log(this.dataset.btnForOpenModalArea);

    allModalAreas.forEach(function (item) {
      console.log(allModalAreas);
      item.classList.add("hide");
      console.log(item);
    });

    let znachenieDataAtributa = this.dataset.btnForOpenModalArea;
    console.log(znachenieDataAtributa);
    const windowToOpen = document.querySelector("#" + znachenieDataAtributa);
    console.log(windowToOpen);
    windowToOpen.classList.remove("hide");

     let btnCloseWindows = windowToOpen.querySelector(".modal__close-btn");
     btnCloseWindows.addEventListener("click", function () {
       windowToOpen.classList.add("hide");
     });
  });
});


window.onclick = function (e) {
  if (e.target.hasAttribute("data-modal-area")) {

    allModalAreas.forEach(function (item) {
      item.classList.add("hide");
    });
  };
};


let logoFooterAccordeonBtn = document.querySelector(".footer__logo-img");
logoFooterAccordeonBtn.addEventListener('click', function () {
  let accordeon = document.querySelector(".accordion__container");
  accordeon.classList.toggle('hidden');
});
const btnOpenElements = document.querySelectorAll(
  '[data-accordeon-summery="btn"]'
  );
  console.log(btnOpenElements);
btnOpenElements.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this);
    console.log(this.nextElementSibling);
    this.nextElementSibling.classList.toggle("hidden");
  });
});

