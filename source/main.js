
//----elements------
let sliderElement = document.querySelector(".slider")
let slideConteiner = document.querySelector(".container")

let mainElement = document.getElementById("main");

let pagin_1 = document.querySelector('.pagin1');
let pagin_2 = document.querySelector('.pagin2');
let pagin_3 = document.querySelector('.pagin3');

let todown = document.querySelector('.todown');

//-------events------
sliderElement.addEventListener("touchstart", sliderPressed, false);
sliderElement.addEventListener("mousedown", sliderPressed, false);

mainElement.addEventListener("touchstart", mouseDown, false);
mainElement.addEventListener("mousedown", mouseDown, false);

mainElement.addEventListener("touchend", mouseUp, false);
document.addEventListener("mouseup", mouseUp, false);

mainElement.addEventListener("touchmove", handleMove, false);
mainElement.addEventListener("mousemove", handleMove, false);
//-----------------------


let verticalSlide = 1
let y1, y2, x1, x2;
let position = 0;
let isMouseDown = false;
let isBottom = false;
let target;
let mainSlide = 1
let bottomSlide = 0

paginChange(pagin_1);

let getEvent = function() {
    if (event.type.search('touch') !== -1)
        return event.touches[0]; else return event;
}


function mouseDown(){
   let e = getEvent();
   y1 = e.screenY;
   x1 = e.clientX
   isMouseDown = true;
}


function mouseUp(){
  if(isBottom){
     sliderToPosition()
     isBottom = false;
   } else {
     mainAnimation(target);
   }
  isMouseDown = false;
}


function sliderPressed(){
     isBottom = true
}


function handleMove(){
  if(isMouseDown){
    let e = getEvent();
    if(!isBottom) mainMove(e); else sliderMove(e);
  }
}


function mainMove(event){
  y2 = event.screenY;
    if (y2 < y1 && position != -1536){
        position -= 6;
        mainElement.style.transform = `translateY(${position}px)`;
        y1 = y2;
        target = 'up';
        todown.style.display = "none";
     } else if (y2 > y1 && position != 0) {
        position += 6;
        mainElement.style.transform = `translateY(${position}px)`;
        y1 = y2;
        target = 'down';
     }
}


function sliderMove(event){
    x2 = event.clientX
    if (x2 < x1 && x2 > 195){
        sliderElement.style.transform = `translateX(${x2 - 20}px)`
        x1 = x2
     } else if (x2 > x1 && x2 < 822) {
        sliderElement.style.transform = `translateX(${x2 - 20}px)`
        x1 = x2
     }

    if(x2 < 800 && x2 > 670){
        if(bottomSlide != 1){
          showBottomSlide_1();
          bottomSlide = 1;
        }
      }

    if(x2 < 660 && x2 > 370){
        if(mainSlide != 2){
          showBottomSlide_2();
          bottomSlide = 2;
        }
      }

    if(x2 < 360 && x2 > 210){
        if(mainSlide != 3){
          showBottomSlide_3();
          bottomSlide = 3;
        }
      }
}


function mainAnimation(target){

    if(target == 'up'){
      if (position < 0 && position > -768){
        showSlide_1();
      } else if (position < -818 && position > -1536){
          showSlide_2();
      }
    } else {
      if (position > -768 && position < 0){
        showSlide_0();
      } else if (position > -1536 && position < -768){
        showSlide_1();
      }
    }
}


function paginChange(pagin){
  pagin_1.style.backgroundColor = "white";
  pagin_2.style.backgroundColor = "white";
  pagin_3.style.backgroundColor = "white";
  pagin.style.backgroundColor = "orange";
}

class Slider {
    constructor() {
        this.gallery = document.querySelector(`.gallery`);
        this.slidesY = this.gallery.getElementsByClassName(`slide`);
        this.slideCount = 0;
        this.rocks = this.gallery.querySelectorAll(`.rock`);
        this.range = this.gallery.querySelector(`#range`);
        this.timer();
        this.showLeftMenu();
    }



    timer() {
        // Таймер
        const timer = this.gallery.querySelector(`.timer`);
        const minSpan = timer.querySelector(`.min`);
        const secSpan = timer.querySelector(`.sec`);
        let min = 9;
        let sec = 59;

        const setZero = n => `0${n}`;

        const startTimer = () => {
            sec--;
            if (sec < 0) {
                sec = 59;
                min--;
            } else if (min <= 0 && sec <= 0) clearInterval(timerGo)

            minSpan.textContent = min < 10 ? setZero(min) : min;
            secSpan.textContent = sec < 10 ? setZero(sec) : sec;
        }

        const timerGo = setInterval(startTimer, 1000);
    }

    showLeftMenu() {
        // Кнопка и список
        const button = this.gallery.querySelector(`.button`);
        const ul = this.gallery.querySelector('.menu');

        // При нажатии на кнопку, или ведению мышкой/пальцем
        // по списку, список убираться не будет
        // Иначе через 5 секунд он исчезнет
        let hideMenu;
        const startTimer = () => {
            hideMenu = setTimeout(() => {
                ul.classList.add('hide-menu');
            }, 5000);
        }

        const dontHideMenu = () => clearTimeout(hideMenu);

        let show = false;
        button.onmousedown = () => {
            show = !show;
            show ? ul.classList.remove('hide-menu') :
            ul.classList.add('hide-menu');
        };

        button.onmouseup = startTimer;
        ul.onmousemove = dontHideMenu;
        ul.onmouseout = startTimer;
        ul.ontouchmove = dontHideMenu;
        ul.ontouchend = startTimer;
    }
}
new Slider();
