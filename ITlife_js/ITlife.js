// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo правильный header с бургер меню
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// выбираем по классу .header__burger, отслеживаем событие по клику, которое запускает ф
$(".header__burger").click(function (event) {
  // ф классам .header__burger и .header__menu включает (или выключает) класс active
  $(".header__burger,.header__menu").toggleClass("active");
  // отменяем скрол контента при открытом мобильном меню
  $("body").toggleClass("lock");
});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo правильный header с бургер меню
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo поведение ссылок соцсетей по hover в footer
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// twitter
let twitt = $(".twitter-link");
twitt.mouseover(function () {
  $(this).addClass("blue__svg");
  let twitt1 = $(".twitter__svg").addClass("blue");
});
twitt.mouseout(function () {
  $(this).removeClass("blue__svg");
  let twitt1 = $(".twitter__svg").removeClass("blue");
});

// facebook
let face = $(".facebook-link");
face.mouseover(function () {
  $(this).addClass("blue__svg");
  let face1 = $(".facebook__svg").addClass("blue");
});
face.mouseout(function () {
  $(this).removeClass("blue__svg");
  let face1 = $(".facebook__svg").removeClass("blue");
});

// instagram
let inst = $(".instagram-link");
inst.mouseover(function () {
  $(this).addClass("blue__svg");
  let inst1 = $(".instagram__svg").addClass("blue");
});
inst.mouseout(function () {
  $(this).removeClass("blue__svg");
  let inst1 = $(".instagram__svg").removeClass("blue");
});

// linkedin
let lin = $(".linkedin-link");
lin.mouseover(function () {
  $(this).addClass("blue__svg");
  let lin1 = $(".linkedin__svg").addClass("blue");
});
lin.mouseout(function () {
  $(this).removeClass("blue__svg");
  let lin1 = $(".linkedin__svg").removeClass("blue");
});

// telegram
let teleg = $(".telegram-link");
teleg.mouseover(function () {
  $(this).addClass("blue__svg");
  let teleg1 = $(".telegram__svg").addClass("blue");
});
teleg.mouseout(function () {
  $(this).removeClass("blue__svg");
  let teleg1 = $(".telegram__svg").removeClass("blue");
});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo поведение ссылок соцсетей по hover в footer
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo поведение ссылок соцсетей по hover в active
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// twitter active
let twitterActive = $(".active__twitter-link");
twitterActive.mouseover(function () {
  $(this).addClass("white__svg");
  let twitterActive1 = $(".twitter__svg-active").addClass("white");
});
twitterActive.mouseout(function () {
  $(this).removeClass("white__svg");
  let twitterActive1 = $(".twitter__svg-active").removeClass("white");
});

// facebook active
let facebookActive = $(".active__facebook-link");
facebookActive.mouseover(function () {
  $(this).addClass("white__svg");
  let facebookActive1 = $(".facebook__svg-active").addClass("white");
});
facebookActive.mouseout(function () {
  $(this).removeClass("white__svg");
  let facebookActive1 = $(".facebook__svg-active").removeClass("white");
});

// instagram active
let instagramActive = $(".active__instagram-link");
instagramActive.mouseover(function () {
  $(this).addClass("white__svg");
  let instagramActive1 = $(".instagram__svg-active").addClass("white");
});
instagramActive.mouseout(function () {
  $(this).removeClass("white__svg");
  let instagramActive1 = $(".instagram__svg-active").removeClass("white");
});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo поведение ссылок соцсетей по hover в active
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo поведение блока active при hover на фото сотрудников
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let active = document.querySelector(".active__choice");
let jhon = document.querySelector(".jhon");
jhon.addEventListener("mouseover", function () {
  active.classList.toggle("hide");
}); 
jhon.addEventListener("mouseout", function () {
  active.classList.toggle("hide");
}); 

// +++++++++++++++++++++++

let active1 = document.querySelector(".active__choice1");
let alex = document.querySelector(".alex");
alex.addEventListener("mouseover", function () {
  active1.classList.toggle("hide");
});
alex.addEventListener("mouseout", function () {
  active1.classList.toggle("hide");
}); 

// +++++++++++++++++++++++

let active2 = document.querySelector(".active__choice2");
let elena = document.querySelector(".elena");
elena.addEventListener("mouseover", function () {
  active2.classList.toggle("hide");
});
elena.addEventListener("mouseout", function () {
  active2.classList.toggle("hide");
}); 

// +++++++++++++++++++++++

let active3 = document.querySelector(".active__choice3");
let lily = document.querySelector(".lily");
lily.addEventListener("mouseover", function () {
  active3.classList.toggle("hide");
});
lily.addEventListener("mouseout", function () {
  active3.classList.toggle("hide");
}); 
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo поведение блока active при hover на фото сотрудников
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo попап-окно от А.Дудукало на JS (на Logo)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// открываем окно
document
  .querySelector("#btnOpenPopupLogo")
  .addEventListener("click", function () {
    document.querySelector("#hiddenArea").classList.add("open");
  });
// закрываем окно
document
  .querySelector("#id-for-close-modal-window")
  .addEventListener("click", function () {
    document.querySelector("#hiddenArea").classList.remove("open");
  });
// чтобы popup можно было закрыть в любом месте экрана запишем и тогда ссылкой будет вся area
document
  .querySelector("#id-for-close-hidden-area")
  .addEventListener("click", function () {
    document.querySelector("#hiddenArea").classList.remove("open");
  });
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo попап А.Дудукало на JS (на Contact)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo попап ITDoctor на JS (на любое кол кнопок)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// получаем все кнопки открытия по data-атрибуту
let btnsOpenModalArea = document.querySelectorAll(
  "[data-btn-for-open-modal-area]"
);
// получаем все модальные окна по data-атрибуту
let allModalAreas = document.querySelectorAll("[data-modal-area]");
console.log(allModalAreas);

// далее надо отследить клик по каждой кнопке из массива (коллекции) и для этого запускаем цикл forEach который запускает ф, которая на вход получает по очереди КАЖДЫЙ элемент (elem) массива и
btnsOpenModalArea.forEach(function (item) {
  // и вот здесь на каждый элемент по очереди повесим прослушку по клику

  item.addEventListener('click', function () {
    console.log(this);
    // теперь надо определить ПО КАКОМУ КОНКРЕТНО item (из data-btn-for-open-modal-area) был сделан click. И делается это при помощи ключевого слова this. THIS каждый раз будет ссылаться именно на ТОТ элемент по которому произошло событие (в данном примере произошло событие click).
    // теперь, когда this показывает на какой конкретно item был сделан click, можем посмотреть контент этого элемента
    console.log(this.dataset.btnForOpenModalArea);
    //Имена атрибутов трансформируются в переменные, к которым в дальнейшем можно обращаться и получать значения, по следующим правилам:data- удаляется, любой дефис идущий перед буквой удаляется, а буква за ним становится заглавной любые другие буквы остаются неизменными Например, атрибут data-date-of-birth преобразуется в переменную dateOfBirth.Для обращения к атрибутам и получения их значений через скрипты применяется метод dataset. Он же используется и для установки нового значения.

    // также обойдем циклом allModalAreas (изначально все окна должны быть не видимы)
    allModalAreas.forEach(function (item) {
      console.log(allModalAreas);
      // скрываем - т.е обходим и добавляем скрывающий класс hide
      item.classList.add("hide");
      console.log(item);
    });
    // найдем ЗНАЧЕНИЕ data-атрибута кнопки по которой произошел клик (например data-btn-for-open-modal-area <- data-атрибут ="area-menu1" <- ЗНАЧЕНИЕ data-атрибута)
    let znachenieDataAtributa = this.dataset.btnForOpenModalArea;
    console.log(znachenieDataAtributa);
    //объявим константу в которую запишем первый найденный ID-шник равный (соответствующий) ЗНАЧЕНИЮ кликнутого data-атрибута (кнопки), т е id="area-menu3" === data-btn-for-open-modal-area="area-menu3"
    const windowToOpen = document.querySelector("#" + znachenieDataAtributa);
    // строка выше = открыто окно (windowToOpen) с таким то (#) ID-шником и совпавшим с ним ЗНАЧЕНИЕМ data-атрибута который соответствует нажатой кнопке
    console.log(windowToOpen);
    // покажем это (windowToOpen) окно убрав класс hide
    windowToOpen.classList.remove("hide");

    // закрытие окон по кнопке крестика = здесь querySelector ищем не по document, а только по windowToOpen находим закрывающую кнопку в окне
     let btnCloseWindows = windowToOpen.querySelector(".modal__close-btn");
     btnCloseWindows.addEventListener("click", function () {
       windowToOpen.classList.add("hide");
     });
  });
});


// далее опысываем закрытие модального окна при клике в любом месте модальной области
window.onclick = function (e) {
  if (e.target.hasAttribute("data-modal-area")) {
    // Свойство event.target содержит элемент, на котором сработало событие (это модальная область). Это не тот элемент, к которому был привязан обработчик этого события (обработчик события привязан к кнопке, значение data-атрибута которой совпало с ID окна, которое кроме ID еще имеет data-атрибут data-modal-area), а именно самый глубокий тег (<div data-modal-area id="area-menu1" class="modal__area1 hide">), на который непосредственно был, к примеру, совершен клик. Другими словами указывает ИМЕННО НА ТОТ элемент по которому произведен клик

    // Метод hasAttribute проверяет наличие заданного атрибута у элемента. Если атрибут есть - выведет true, если нет - выведет false.
    allModalAreas.forEach(function (item) {
      // обходим циклом и добавляем скрывающий класс hide
      item.classList.add("hide");
    });
  };
};
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo попап ITDoctor на JS (на любое кол кнопок)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo accordeon (SCSS (Ключевский) на data-атрибутах (вкючение на нижний логотип footer__logo-elements)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// вкл\выкл аккордеона
let logoFooterAccordeonBtn = document.querySelector(".footer__logo-img");
logoFooterAccordeonBtn.addEventListener('click', function () {
  let accordeon = document.querySelector(".accordion__container");
  accordeon.classList.toggle('hidden');
});
// JS аккордеона (но это для ознакомления, т к применяя тег <details></details> этот аккордеон работает без JS. Но ОЧЕНЬ ВАЖНО, что если использовать JS, то надо к классам text в HTML (<p data-dropdown-description="description2" class="text hidden">) добавить класс hidden)
const btnOpenElements = document.querySelectorAll(
  '[data-accordeon-summery="btn"]'
  );
  console.log(btnOpenElements);
btnOpenElements.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this);
    // теперь, когда this показывает на какой конкретно item был сделан click, можем посмотреть контент этого элемента (примечание: мы не можем повесить data-атрибут сразу на контент для решения этой задачи, потому что контент, по сценарию = скрыт (это же аккордеон)). Контент для this является дочерним (соседним) элементом и найти его можно при помощи nextElementSibling, т.е это следующий соседствующий элемент
    console.log(this.nextElementSibling);
    this.nextElementSibling.classList.toggle("hidden");
  });
});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// todo accordeon (SCSS (Ключевский) на data-атрибутах (вкючение на нижний логотип footer__logo-elements)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

