$( document ).ready(function() {
const prev = document.querySelector(".js-prev");
const next = document.querySelector(".js-next");
const progressBar = document.querySelector(".js-bar");
const circles = document.querySelectorAll(".js-circle");

let currentActive = 1;
// initially set to 1
console.log(currentActive)

const update = function () {
  circles.forEach((circle, i) => {
    i < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");

  progressBar.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};

function toggle(className, displayState){
    var elements = document.getElementsByClassName(className)
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}

function displayOn(className, i){
    var elements = document.getElementsByClassName(className)
    elements[i-1].style.display = 'block';
}


toggle("progress_body_text", 'none');
displayOn("progress_body_text", currentActive);

next.addEventListener("click", () => {
  currentActive++;
  console.log(currentActive)
  currentActive > circles.length && (currentActive = circles.length);
  
  toggle("progress_body_text", 'none');
  displayOn("progress_body_text", currentActive)
  
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  console.log(currentActive)
  currentActive < 1 && (currentActive = 1);
  
  toggle("progress_body_text", 'none');
   displayOn("progress_body_text", currentActive)
  
  update();
});

});