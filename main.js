let downButton = document.getElementById('downBtn');
let upButton = document.getElementById('upBtn');
let about = document.getElementById('about');


window.onscroll = function() {
  scrollFunction1();
  scrollFunction2();
};

function scrollFunction1() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    downButton.style.display = "none";
  } else {
    downButton.style.display = "block";
  }
}

function scrollFunction2() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function downFunction() {
  about.scrollIntoView();
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
