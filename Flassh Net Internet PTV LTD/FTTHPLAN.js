let customItems = document.querySelectorAll('.custom-slider .custom-item');
let customActive = 3;

function loadCustomShow() {
  customItems[customActive].style.transform = `none`;
  customItems[customActive].style.zIndex = 1;
  customItems[customActive].style.filter = 'none';
  customItems[customActive].style.opacity = 1;

  let stt = 0;
  for (var i = customActive + 1; i < customItems.length; i++) {
    stt++;
    customItems[i].style.transform = `translateX(${9 * stt}vw) scale(${1 - 0.2 * stt})`;
    customItems[i].style.zIndex = -stt;
    customItems[i].style.opacity = stt > 2 ? 0 : 1;
  }

  stt = 0;
  for (var i = (customActive - 1); i >= 0; i--) {
    stt++;
    customItems[i].style.transform = `translateX(${-9 * stt}vw) scale(${1 - 0.2 * stt})`;
    customItems[i].style.zIndex = -stt;
    customItems[i].style.opacity = stt > 2 ? 0 : 1;
  }
}

loadCustomShow();

let customNext = document.getElementById('custom-next');
let customPrev = document.getElementById('custom-prev');

customNext.onclick = function () {
  if (customActive + 1 < customItems.length) {
    customActive = customActive + 1;
  } else {
    customActive = customActive;
  }
  loadCustomShow();
}

customPrev.onclick = function () {
  if (customActive - 1 >= 0) {
    customActive = customActive - 1;
  } else {
    customActive = customActive;
  }
  loadCustomShow();
}
