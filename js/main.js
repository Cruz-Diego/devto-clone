/*open botton menu mobile*/
function deployMenuNav() {
  let navlateral = document.querySelector("#navlateralOpen");
  let hamburgerBotton = document.querySelector("#hamburgerButton");
  hamburgerBotton.addEventListener("click", () => {
    navlateral.classList.toggle("d-none");
  });
}
deployMenuNav();

/*close botton menu mobile*/
function closeMenuNav() {
  let navlateral = document.querySelector("#navlateralOpen");
  let closeBotton = document.querySelector("#navlateralClose_post");
  closeBotton.addEventListener("click", () => {
    navlateral.classList.add("d-none");
  });
}
closeMenuNav();

/*block scroll*/
function blockScroll() {
  let bodyBlock = document.querySelector("body");
  let hamburgerButton = document.querySelector("#hamburgerButton");
  hamburgerButton.addEventListener("click", () => {
    bodyBlock.classList.toggle("block");
  });
}
blockScroll();

function enableScroll() {
  let bodyBlock = document.querySelector("body");
  let closeButton = document.querySelector("#navlateralClose_post");
  closeButton.addEventListener("click", () => {
    bodyBlock.classList.toggle("block");
  });
}
enableScroll();