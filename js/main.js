const navToggle = document.querySelector(".nav-toggle");
const mainMenu = document.querySelector(".main-menu");
const navToggleLabel = document.querySelector(".nav-toggle-label");

navToggle.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
    navToggleLabel.classList.toggle("active");
});

mainMenu.addEventListener("click", (event) => {
    if(event.target){
        mainMenu.classList.remove("active");
        navToggleLabel.classList.remove("active");
    }
});





let thumbnails = document.getElementsByClassName("thumbnail");
let overlay = document.getElementById("overlay");
let overlayClose = document.getElementById("overlay-close");
let overlayImage = document.getElementById("overlay-image");

for (let i = 0; i < thumbnails.length; i++) { 
//    console.log(thumbnails[i].src)
  thumbnails[i].addEventListener("click", openOverlay)
};


overlayClose.addEventListener("click", closeOverlay);

overlay.addEventListener("keydown", overlay);
overlayClose.addEventListener("click", closeOverlay);

function closeOverlay(event) {
  if (event.keyCode !== 27) {
    return;
  }
    overlay.classList.toggle("open");
  }


function closeOverlay(event){
  overlay.classList.toggle("open")
}

function openOverlay(event){
  overlay.classList.toggle("open");
  overlayImage.src = event.target.src;
}






