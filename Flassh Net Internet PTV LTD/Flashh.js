function mediaQuery900() {
  let items = document.querySelectorAll('.slider .item');
  let body = document.querySelectorAll("body");
  let active = 3;
  function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for (var i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${9 * stt}vw) scale(${1 - 0.2 * stt})`;
      items[i].style.zIndex = -stt;
      // items[i].style.filter = 'blur(7px)';
      items[i].style.opacity = stt > 2 ? 0 : 1;
    }
    stt = 0;
    for (var i = (active - 1); i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-9 * stt}vw) scale(${1 - 0.2 * stt})`;
      items[i].style.zIndex = -stt;
      // items[i].style.filter = 'blur(7px)';
      items[i].style.opacity = stt > 2 ? 0 : 1;
    }
  }
  loadShow();
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  next.onclick = function () {
    if (active + 1 < items.length) {
      active = active + 1;
    } else {
      active = active;

    }
    loadShow();
  }
  prev.onclick = function () {
    if (active - 1 >= 0) {
      active = active - 1;
    } else {
      active = active;
    }
    loadShow();
  }
}
mediaQuery900()
function asd() {   let items = document.querySelectorAll('.slider .item');
let active = 3;
function loadShow() {
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  // show after
  let stt = 0;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${9 * stt}vw) scale(${1 - 0.2 * stt})`;
    items[i].style.zIndex = -stt;
    // items[i].style.filter = 'blur(7px)';
    items[i].style.opacity = stt > 0 ? 0 : 1;
  }
  stt = 0;
  for (var i = (active - 1); i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-9 * stt}vw) scale(${1 - 0.2 * stt})`;
    items[i].style.zIndex = -stt;
    // items[i].style.filter = 'blur(7px)';
    items[i].style.opacity = stt > 0 ? 0 : 1;
  }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function () {
  if (active + 1 < items.length) {
    active = active + 1;
  } else {
    active = 0;

  }
  loadShow();
}
prev.onclick = function () {
  if (active - 1 >= 0) {
    active = active - 1;
  } else {
    active = 5;
  }
  loadShow();
} }




// *******____________media Query_____________*******
function myFunction(x) {
  if (x.matches) { // If media query matches
      asd()
    
  } else {
    mediaQuery900()
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 900px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});

function copperplanDetails() {
  // ---------------------------------------------------//
  slider = document.querySelector(".slider");
  mianplan = document.querySelector(".PlanDetailsPopUp");//main plans div 

  //**********------20mb paln Details-------*************** */


  opentag20mbplan = document.querySelector("#plan20open");//button  open
  detailsDiv20mbplan = document.querySelector("#plan20")//div plan
  closetag20mbplan = document.querySelector("#plan20close");//close div


  opentag20mbplan.onclick = function () {
    console.log("hello 20");
    slider.style.opacity = "0";
    slider.style.display = "none";
    mianplan.style.opacity = "1";
    mianplan.style.display = "flex";
    detailsDiv20mbplan.style.display = "block";
  }


  closetag20mbplan.onclick = function () {
    console.log("close");
    slider.style.opacity = "1";
    slider.style.display = "flex";
    mianplan.style.opacity = "0";
    mianplan.style.display = "none";

    detailsDiv20mbplan.style.display = "none";

  }
  //**************-------------25 mb plan Details------------***************
  opentag25mb = document.querySelector("#plan25open");//button  open
  detailsDiv25mb = document.querySelector("#plan25")//div plan
  closetag25mb = document.querySelector("#plan25close");//close div


  opentag25mb.onclick = function () {
    console.log("hello 25");
    slider.style.opacity = "0";
    slider.style.display = "none";
    mianplan.style.opacity = "1";
    mianplan.style.display = "flex";
    detailsDiv25mb.style.display = "block";
  }


  closetag25mb.onclick = function () {
    console.log("close");
    slider.style.opacity = "1";
    slider.style.display = "flex";
    mianplan.style.opacity = "0";
    mianplan.style.display = "none";

    detailsDiv25mb.style.display = "none";

  }
  //*******-----30mb Plan Details------*********** */
  opentag30mb = document.querySelector("#plan30open");//button  open
  detailsDiv30mb = document.querySelector("#plan30")//div plan
  closetag30mb = document.querySelector("#plan30close");//close div

  opentag30mb.onclick = function () {
    console.log("hello30");
    slider.style.opacity = "0";
    slider.style.display = "none";
    mianplan.style.opacity = "1";
    mianplan.style.display = "flex";
    detailsDiv30mb.style.display = "block";
  }


  closetag30mb.onclick = function () {
    console.log("close");
    slider.style.opacity = "1";
    slider.style.display = "flex";
    mianplan.style.opacity = "0";
    mianplan.style.display = "none";

    detailsDiv30mb.style.display = "none";

  }
  //******------------35mb plan Details----------------*******/
  opentag35mbplan = document.querySelector("#plan35open");//button  open
  detailsDiv35mbplan = document.querySelector("#plan35")//div plan
  closetag35mbplan = document.querySelector("#plan35close");//close div


  opentag35mbplan.onclick = function () {
    console.log("hello 35");
    slider.style.opacity = "0";
    slider.style.display = "none";
    mianplan.style.opacity = "1";
    mianplan.style.display = "flex";
    detailsDiv35mbplan.style.display = "block";
  }


  closetag35mbplan.onclick = function () {
    console.log("close");
    slider.style.opacity = "1";
    slider.style.display = "flex";
    mianplan.style.opacity = "0";
    mianplan.style.display = "none";

    detailsDiv35mbplan.style.display = "none";

  }
  //******------------50mb plan Details----------------*******/
  opentag50mbplan = document.querySelector("#plan50open");//button  open
  detailsDiv50mbplan = document.querySelector("#plan50")//div plan
  closetag50mbplan = document.querySelector("#plan50close");//close div


  opentag50mbplan.onclick = function () {
    console.log("hello 50");
    slider.style.opacity = "0";
    slider.style.display = "none";
    mianplan.style.opacity = "1";
    mianplan.style.display = "flex";
    detailsDiv50mbplan.style.display = "block";
  }


  closetag50mbplan.onclick = function () {
    console.log("close");
    slider.style.opacity = "1";
    slider.style.display = "flex";
    mianplan.style.opacity = "0";
    mianplan.style.display = "none";

    detailsDiv50mbplan.style.display = "none";

  }
  //******------------60mb plan Details----------------*******/
  opentag60mbplan = document.querySelector("#plan60open");//button  open
  detailsDiv60mbplan = document.querySelector("#plan60")//div plan
  closetag60mbplan = document.querySelector("#plan60close");//close div


  opentag60mbplan.onclick = function () {
    console.log("hello 60");
    slider.style.opacity = "0";
    slider.style.display = "none";
    mianplan.style.opacity = "1";
    mianplan.style.display = "flex";
    detailsDiv60mbplan.style.display = "block";
  }


  closetag60mbplan.onclick = function () {
    console.log("close");
    slider.style.opacity = "1";
    slider.style.display = "flex";
    mianplan.style.opacity = "0";
    mianplan.style.display = "none";
    detailsDiv60mbplan.style.display = "none";

  }

}
copperplanDetails()