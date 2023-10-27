let slide = document.querySelector(".slide");
let body = document.querySelector(".body");
let navItems = document.querySelector(".navItems");
let text2 =document.querySelector(".text1")

function btn() {
  slide.classList.toggle("slide-R");
  if (slide.classList.contains("slide-R")) {
    slide.innerHTML = "L";
    slide.style.backgroundColor = "white";
    slide.style.color = "black";
  } else {
    slide.innerHTML = "D";
    slide.style.backgroundColor = "black";
    slide.style.color = "white";
  }
  body.classList.toggle("background-color");
  navItems.classList.toggle("navItems1");
  text2.classList.toggle("t")
  if (text2.classList.contains("t")){
  }
 
}

let text1 =document.querySelector(".para");
function textChange() {
  setTimeout(() => {
   text1.innerText = "Porgrammer";
  }, 0);
  setTimeout(() => {
   text1.innerText = "Developer";
  }, 5000);
  setTimeout(() => {
   text1.innerText = "Designer";
  }, 10000);
  setTimeout(() => {
   text1.innerText = "Front End";
  }, 15000);
}
textChange();
setInterval(textChange, 20000);